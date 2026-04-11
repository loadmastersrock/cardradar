"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { shops } from "@/lib/shops";

type Props = {
  initialSearch: string;
};

export default function ShopsClient({ initialSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  const shopList = Object.values(shops);

  const filteredShops = useMemo(() => {
    if (!searchTerm.trim()) return shopList;

    return shopList.filter((shop) => {
      const text = [
        shop.name,
        shop.category,
        shop.note,
        shop.description,
        shop.bestFor,
        shop.focus,
        shop.region,
        shop.location,
      ]
        .join(" ")
        .toLowerCase();

      return text.includes(searchTerm.toLowerCase());
    });
  }, [shopList, searchTerm]);

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm text-cyan-300">
          ← Back
        </Link>

        <h1 className="mt-6 text-4xl font-semibold">Shops</h1>

        <input
          className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="mt-3 text-sm text-white/50">
          Searching for:{" "}
          <span className="text-cyan-300">{searchTerm || "All"}</span>
        </div>

        <div className="mt-2 text-sm text-white/50">
          {filteredShops.length} results
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {filteredShops.map((shop) => (
            <div
              key={shop.slug}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <h2 className="text-lg font-semibold">{shop.name}</h2>

              <p className="text-sm text-white/60">{shop.note}</p>

              <div className="mt-3 flex justify-between text-sm">
                <span>Trust</span>
                <span>{shop.trust}</span>
              </div>

              <div className="mt-4 flex gap-3">
                <Link href={`/shops/${shop.slug}`} className="text-cyan-300">
                  View
                </Link>

                <a
                  href={`/go/${shop.slug}?from=shops`}
                  className="text-cyan-300"
                >
                  Visit →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}