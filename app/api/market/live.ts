import type { NextApiRequest, NextApiResponse } from "next";
import { searchEbay } from "@/lib/ebay";
import { supabaseServer } from "@/lib/supabase-server";

type ProductConfig = {
  name: string;
  slug: string;
  query: string;
  minPrice: number;
  maxPrice: number;
  includeKeywords: string[];
  excludeKeywords: string[];
  minListingsForConfidence: number;
};

type MarketResponseItem = {
  rank: number;
  name: string;
  slug: string;
  price: number;
  change24h: number;
  change7d: number;
  change30d: number;
  listings: number;
  trend: number[];
  confidence: "high" | "low";
};

function median(values: number[]): number {
  if (!values.length) return 0;

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

function trimmedMedian(values: number[]): number {
  if (!values.length) return 0;
  if (values.length < 5) return median(values);

  const sorted = [...values].sort((a, b) => a - b);
  const trimCount = Math.floor(sorted.length * 0.15);
  const trimmed = sorted.slice(trimCount, sorted.length - trimCount);

  return median(trimmed.length ? trimmed : sorted);
}

function normalise(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function calcChange(current: number, past: number | null): number {
  if (!past || past === 0) return 0;
  return Number((((current - past) / past) * 100).toFixed(2));
}

async function getPastPrice(slug: string, hoursAgo: number): Promise<number | null> {
  const targetDate = new Date(Date.now() - hoursAgo * 60 * 60 * 1000);

  const { data } = await supabaseServer
    .from("market_snapshots")
    .select("price, created_at")
    .eq("slug", slug)
    .lte("created_at", targetDate.toISOString())
    .order("created_at", { ascending: false })
    .limit(1);

  const value = data?.[0]?.price;
  return typeof value === "number" ? value : value ? Number(value) : null;
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<MarketResponseItem[] | { error: string; details?: string }>
) {
  try {
    const products: ProductConfig[] = [
      {
        name: "Pokémon 151 JP Booster Box",
        slug: "pokemon-151",
        query: `"pokemon 151" japanese booster box -pack -single -empty`,
        minPrice: 150,
        maxPrice: 360,
        includeKeywords: ["pokemon", "151", "japanese"],
        excludeKeywords: ["single", "pack", "empty", "wrapper", "card"],
        minListingsForConfidence: 4,
      },
      {
        name: "One Piece OP-05 Booster Box",
        slug: "one-piece",
        query: `"one piece op-05" booster box -pack -single -empty`,
        minPrice: 80,
        maxPrice: 260,
        includeKeywords: ["one piece", "op-05"],
        excludeKeywords: ["single", "pack", "card", "psa", "graded"],
        minListingsForConfidence: 4,
      },
      {
        name: "Evolving Skies ETB",
        slug: "evolving-skies",
        query: `"evolving skies" elite trainer box -pack -single -empty`,
        minPrice: 350,
        maxPrice: 900,
        includeKeywords: ["evolving skies", "elite trainer box"],
        excludeKeywords: ["single", "pack", "card"],
        minListingsForConfidence: 5,
      },
      {
        name: "Lorcana Enchanted",
        slug: "lorcana",
        query: `"lorcana enchanted" card -lot -bundle`,
        minPrice: 40,
        maxPrice: 250,
        includeKeywords: ["lorcana", "enchanted"],
        excludeKeywords: ["lot", "bundle", "proxy"],
        minListingsForConfidence: 5,
      },
    ];

    const results: MarketResponseItem[] = await Promise.all(
      products.map(async (p, i) => {
        try {
          const items = await searchEbay(p.query);

          const matchedItems = items.filter((item: any) => {
            const title = normalise(String(item.title ?? ""));

            const hasAllIncludes = p.includeKeywords.every((k: string) =>
              title.includes(normalise(k))
            );

            const hasExcluded = p.excludeKeywords.some((k: string) =>
              title.includes(normalise(k))
            );

            return hasAllIncludes && !hasExcluded;
          });

          const rawPrices: number[] = matchedItems
            .map((item: any) => parseFloat(item.price?.value))
            .filter((v: number) => !isNaN(v) && v > 0);

          const filteredPrices: number[] = rawPrices.filter(
            (price: number) => price >= p.minPrice && price <= p.maxPrice
          );

          const marketPrice = trimmedMedian(filteredPrices);
          const roundedPrice = marketPrice ? Math.round(marketPrice) : 0;

          const listingCount = filteredPrices.length;
          const confidence: "high" | "low" =
            listingCount >= p.minListingsForConfidence ? "high" : "low";

          const price24h = await getPastPrice(p.slug, 24);
          const price7d = await getPastPrice(p.slug, 24 * 7);
          const price30d = await getPastPrice(p.slug, 24 * 30);

          const change24h = calcChange(roundedPrice, price24h);
          const change7d = calcChange(roundedPrice, price7d);
          const change30d = calcChange(roundedPrice, price30d);

          if (roundedPrice > 0) {
            await supabaseServer.from("market_snapshots").insert({
              slug: p.slug,
              name: p.name,
              price: roundedPrice,
              listings: listingCount,
            });
          }

          return {
            rank: i + 1,
            name: p.name,
            slug: p.slug,
            price: roundedPrice,
            change24h,
            change7d,
            change30d,
            listings: listingCount,
            trend: filteredPrices.slice(0, 6),
            confidence,
          };
        } catch (err) {
          console.error("Product error:", p.name, err);

          return {
            rank: i + 1,
            name: p.name,
            slug: p.slug,
            price: 0,
            change24h: 0,
            change7d: 0,
            change30d: 0,
            listings: 0,
            trend: [0, 0, 0],
            confidence: "low",
          };
        }
      })
    );

    return res.status(200).json(results);
  } catch (err) {
    console.error("API crash:", err);

    return res.status(200).json({
      error: "API failed",
      details: String(err),
    });
  }
}