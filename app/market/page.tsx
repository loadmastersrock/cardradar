"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
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

function formatPrice(value: number) {
  return "£" + value.toLocaleString();
}

function Change({ value }: { value: number }) {
  const isUp = value >= 0;

  return (
    <span className={isUp ? "text-green-300" : "text-red-300"}>
      {isUp ? "+" : ""}
      {value}%
    </span>
  );
}

function ConfidenceBadge({ level }: { level: "high" | "low" }) {
  return (
    <span
      className={`ml-2 text-xs px-2 py-1 rounded-full ${
        level === "high"
          ? "bg-green-500/20 text-green-300"
          : "bg-yellow-500/20 text-yellow-300"
      }`}
    >
      {level === "high" ? "High" : "Low"}
    </span>
  );
}

function Sparkline({ data }: { data: number[] }) {
  if (!data.length) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);

  const points = data
    .map((value, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y =
        max === min
          ? 50
          : 100 - ((value - min) / (max - min)) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" className="w-24 h-10">
      <polyline
        fill="none"
        stroke="cyan"
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
}

export default function MarketPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/market/live")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">
            📊 Card Market
          </h1>

          <Link href="/" className="text-sm text-cyan-300">
            ← Home
          </Link>
        </div>

        {/* SEARCH */}
        <input
          className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* TABLE */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="text-left text-white/50 text-sm">
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>24h</th>
                <th>7d</th>
                <th>30d</th>
                <th>Trend</th>
                <th>Listings</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p) => (
                <tr
                  key={p.slug}
                  className="border-t border-white/10 hover:bg-white/5"
                >
                  <td className="py-4">{p.rank}</td>

                  <td className="py-4 font-medium">
                    {p.name}
                    <ConfidenceBadge level={p.confidence} />
                  </td>

                  <td className="py-4">
                    {formatPrice(p.price)}
                  </td>

                  <td className="py-4">
                    <Change value={p.change24h} />
                  </td>

                  <td className="py-4">
                    <Change value={p.change7d} />
                  </td>

                  <td className="py-4">
                    <Change value={p.change30d} />
                  </td>

                  <td className="py-4">
                    <Sparkline data={p.trend} />
                  </td>

                  <td className="py-4 text-white/60">
                    {p.listings}
                  </td>

                  <td className="py-4">
                    <a
                      href={`/go/${p.slug}?from=market`}
                      className="text-cyan-300"
                    >
                      View →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </main>
  );
}