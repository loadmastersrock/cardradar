"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { shops } from "@/lib/shops";

function ShopLogo({
  logo,
  name,
}: {
  logo: string;
  name: string;
}) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed || !logo) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-semibold tracking-wide text-cyan-200 ring-1 ring-cyan-400/25">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      className="h-10 w-10 rounded-full bg-white p-1 object-contain"
      onError={() => setImageFailed(true)}
    />
  );
}

function getBadge(index: number) {
  if (index === 0) return "Top Ranked";
  if (index === 1) return "Strong Pick";
  if (index === 2) return "Watchlist";
  return null;
}

export default function ShopsPage() {
  const [sortBy, setSortBy] = useState("trust");
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const shopList = Object.values(shops);

  const filteredAndSortedShops = useMemo(() => {
    let filtered = [...shopList];

    if (activeFilter === "uk") {
      filtered = filtered.filter((shop) => shop.location === "UK");
    }

    if (activeFilter === "japanese") {
      filtered = filtered.filter(
        (shop) =>
          shop.category.toLowerCase().includes("japanese") ||
          shop.focus.toLowerCase().includes("japanese")
      );
    }

    if (activeFilter === "collector") {
      filtered = filtered.filter(
        (shop) =>
          shop.category.toLowerCase().includes("collector") ||
          shop.focus.toLowerCase().includes("collector")
      );
    }

    if (activeFilter === "mainstream") {
      filtered = filtered.filter(
        (shop) =>
          shop.category.toLowerCase().includes("mainstream") ||
          shop.focus.toLowerCase().includes("mainstream")
      );
    }

    const query = searchTerm.trim().toLowerCase();

    if (query) {
      filtered = filtered.filter((shop) => {
        const text = [
          shop.name,
          shop.category,
          shop.location,
          shop.note,
          shop.description,
          shop.bestFor,
          shop.region,
          shop.focus,
        ]
          .join(" ")
          .toLowerCase();

        return text.includes(query);
      });
    }

    filtered.sort((a, b) => {
      if (sortBy === "trust") return Number(b.trust) - Number(a.trust);
      if (sortBy === "stock") return Number(b.stock) - Number(a.stock);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    return filtered;
  }, [shopList, sortBy, activeFilter, searchTerm]);

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
            ← Back to Home
          </Link>

          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-cyan-300">
            CardRadar Directory
          </p>
          <h1 className="mt-3 text-4xl font-semibold">Top Card Shops</h1>
          <p className="mt-3 max-w-2xl text-white/65">
            Browse trusted card shops by speciality, region, and what they are
            best known for.
          </p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search shops..."
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-cyan-400"
          />
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          {[
            { key: "all", label: "All" },
            { key: "uk", label: "UK" },
            { key: "japanese", label: "Japanese" },
            { key: "collector", label: "Collector" },
            { key: "mainstream", label: "Mainstream" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-full px-4 py-2 text-sm ${
                activeFilter === filter.key
                  ? "bg-cyan-400 text-black"
                  : "border border-white/20 text-white/70 hover:border-cyan-400"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {[
            { key: "trust", label: "Trust" },
            { key: "stock", label: "Stock" },
            { key: "name", label: "A–Z" },
          ].map((option) => (
            <button
              key={option.key}
              onClick={() => setSortBy(option.key)}
              className={`rounded-full px-4 py-2 text-sm ${
                sortBy === option.key
                  ? "bg-cyan-400 text-black"
                  : "border border-white/20 text-white/70 hover:border-cyan-400"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mb-6 text-sm text-white/50">
          {filteredAndSortedShops.length} results
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredAndSortedShops.map((shop, index) => {
            const badge = getBadge(index);

            return (
              <div
                key={shop.slug}
                className="relative rounded-[24px] border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <ShopLogo logo={shop.logo} name={shop.name} />
                    <div>
                      <p className="text-xs text-cyan-300">{shop.location}</p>
                      <h2 className="text-lg font-semibold">{shop.name}</h2>
                    </div>
                  </div>

                  <div className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    #{index + 1}
                  </div>
                </div>

                {badge ? (
                  <div className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/10">
                    {badge}
                  </div>
                ) : null}

                <p className="mt-2 text-sm text-cyan-200">{shop.category}</p>
                <p className="mt-3 text-sm text-white/65">{shop.note}</p>

                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Trust</span>
                    <span className="text-cyan-200">{shop.trust}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-white/50">Stock</span>
                    <span className="text-cyan-200">{shop.stock}</span>
                  </div>
                </div>

                <Link
                  href={`/shops/${shop.slug}`}
                  className="mt-6 inline-block rounded-full border border-white/15 px-4 py-2 text-sm hover:border-cyan-400 hover:text-cyan-200"
                >
                  View Store
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}