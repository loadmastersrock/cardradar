import { NextResponse } from "next/server";
import { shops } from "@/lib/shops";
import { supabaseServer } from "@/lib/supabase-server";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const url = new URL(request.url);
  const source = url.searchParams.get("from") || "unknown";

  const shop = shops[slug as keyof typeof shops];

  // Real shop click -> log it, then redirect to external store
  if (shop) {
    await supabaseServer.from("shop_clicks").insert({
      shop_slug: shop.slug,
      shop_name: shop.name,
      destination_url: shop.url,
      source,
    });

    return NextResponse.redirect(shop.url);
  }

  // Radar/trend click -> log it, then redirect into internal shop search
  const searchMap: Record<string, string> = {
    "pokemon-151": "pokemon 151",
    "evolving-skies": "evolving skies",
    "one-piece": "one piece",
    lorcana: "lorcana",
  };

  const searchTerm = searchMap[slug] ?? slug.replace(/-/g, " ");

  await supabaseServer.from("shop_clicks").insert({
    shop_slug: slug,
    shop_name: slug,
    destination_url: `/shops?search=${encodeURIComponent(searchTerm)}`,
    source,
  });

  return NextResponse.redirect(
    new URL(`/shops?search=${encodeURIComponent(searchTerm)}`, request.url)
  );
}