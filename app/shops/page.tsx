"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { shops } from "@/lib/shops";

export default function ShopsPage() {
  const [sortBy, setSortBy] = useState("trust");
  const [activeFilter, setActiveFilter] = useState("all");

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

    filtered.sort((a, b) => {
      if (sortBy === "trust") return Number(b.trust) - Number(a.trust);
      if (sortBy === "stock") return Number(b.stock) - Number(a.stock);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    return filtered;
  }, [shopList, sortBy, activeFilter]);

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-cyan-300 transition hover:text-cyan-200"
          >
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

        <div className="mb-6">
          <h2 className="mb-3 text-sm uppercase tracking-[0.2em] text-white/45">
            Filters
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              { key: "all", label: "All Shops" },
              { key: "uk", label: "UK Only" },
              { key: "japanese", label: "Japanese" },
              { key: "collector", label: "Collector Picks" },
              { key: "mainstream", label: "Mainstream" },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeFilter === filter.key
                    ? "bg-cyan-400 text-black"
                    : "border border-white/20 text-white/70 hover:border-cyan-400 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-sm uppercase tracking-[0.2em] text-white/45">
            Sort
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              { key: "trust", label: "Sort by Trust" },
              { key: "stock", label: "Sort by Stock" },
              { key: "name", label: "Sort A–Z" },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setSortBy(option.key)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  sortBy === option.key
                    ? "bg-cyan-400 text-black"
                    : "border border-white/20 text-white/70 hover:border-cyan-400 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 text-sm text-white/50">
          Showing {filteredAndSortedShops.length} shop
          {filteredAndSortedShops.length === 1 ? "" : "s"}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredAndSortedShops.map((shop) => (
            <div
              key={shop.slug}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                {shop.location}
              </p>
              <h2 className="mt-3 text-xl font-semibold">{shop.name}</h2>
              <p className="mt-3 text-sm text-cyan-200">{shop.category}</p>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {shop.note}
              </p>

              <div className="mt-5 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Trust</span>
                  <span className="font-medium text-cyan-200">
                    {shop.trust} / 10
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/50">Stock</span>
                  <span className="font-medium text-cyan-200">
                    {shop.stock} / 10
                  </span>
                </div>
              </div>

              <Link
                href={`/shops/${shop.slug}`}
                className="mt-6 inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-400/40 hover:text-cyan-200"
              >
                View Store
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}