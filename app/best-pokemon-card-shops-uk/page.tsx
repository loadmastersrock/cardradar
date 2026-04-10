import Link from "next/link";
import { shops } from "@/lib/shops";

export default function BestUKPage() {
  const shopList = Object.values(shops).sort(
    (a, b) => Number(b.trust) - Number(a.trust)
  );

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <h1 className="text-4xl font-semibold">
          Best Pokémon Card Shops in the UK (2026)
        </h1>

        <p className="mt-4 text-white/70">
          Looking for the best place to buy Pokémon cards in the UK? We’ve ranked
          the top stores based on trust, stock levels, and collector appeal.
        </p>

        {/* LIST */}
        <div className="mt-10 space-y-8">
          {shopList.map((shop, index) => (
            <div
              key={shop.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  #{index + 1} {shop.name}
                </h2>

                {shop.featured && (
                  <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs text-amber-200">
                    Sponsored
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm text-cyan-300">{shop.category}</p>

              <p className="mt-3 text-white/70">{shop.description}</p>

              <div className="mt-4 flex gap-6 text-sm text-white/60">
                <span>Trust: {shop.trust}</span>
                <span>Stock: {shop.stock}</span>
              </div>

              <div className="mt-5 flex gap-4">
                <Link
                  href={`/shops/${shop.slug}`}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-cyan-400 hover:text-cyan-200"
                >
                  View Profile
                </Link>

                <a
                  href={shop.url}
                  target="_blank"
                  className="rounded-full bg-cyan-400 px-4 py-2 text-sm text-black hover:bg-cyan-300"
                >
                  Visit Store →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-2xl font-semibold">
            Want your store featured here?
          </h2>

          <p className="mt-3 text-white/70">
            Get more visibility and customers by appearing at the top of our rankings.
          </p>

          <Link
            href="/advertise"
            className="mt-6 inline-block rounded-full bg-cyan-400 px-6 py-3 text-sm text-black hover:bg-cyan-300"
          >
            Advertise with us
          </Link>
        </div>
      </div>
    </main>
  );
}