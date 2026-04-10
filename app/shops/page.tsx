"use client";

import Link from "next/link";
import { useState } from "react";
import { shops } from "@/lib/shops";

export default function ShopsPage() {
  const [sortBy, setSortBy] = useState("trust");

  const shopList = Object.values(shops);

  const sortedShops = [...shopList].sort((a, b) => {
    if (sortBy === "trust") return Number(b.trust) - Number(a.trust);
    if (sortBy === "stock") return Number(b.stock) - Number(a.stock);
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-cyan-300 hover:text-cyan-200"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-6 text-4xl font-semibold">Top Card Shops</h1>
          <p className="mt-3 text-white/65">
            Compare shops by trust, stock and category.
          </p>
        </div>

        {/* SORT BUTTONS */}
        <div className="mb-8 flex gap-3">
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
                  : "border border-white/20 text-white/70 hover:border-cyan-400"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* SHOP GRID */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {sortedShops.map((shop) => (
            <div
              key={shop.slug}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <p className="text-xs text-cyan-300">{shop.location}</p>

              <h2 className="mt-2 text-xl font-semibold">{shop.name}</h2>

              <p className="mt-2 text-sm text-cyan-200">{shop.category}</p>

              <p className="mt-3 text-sm text-white/65">{shop.note}</p>

              {/* SCORES */}
              <div className="mt-4 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">Trust</span>
                  <span>{shop.trust}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Stock</span>
                  <span>{shop.stock}</span>
                </div>
              </div>

              <Link
                href={`/shops/${shop.slug}`}
                className="mt-5 inline-block rounded-full border border-white/15 px-4 py-2 text-sm hover:border-cyan-400 hover:text-cyan-200"
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