import Link from "next/link";
import { shops } from "@/lib/shops";

export default async function ShopPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const shop = shops[slug as keyof typeof shops];

  if (!shop) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Shop not found</h1>
          <Link
            href="/shops"
            className="mt-4 inline-block text-cyan-300 hover:text-cyan-200"
          >
            ← Back to Shops
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/shops"
          className="text-sm text-cyan-300 transition hover:text-cyan-200"
        >
          ← Back to Shops
        </Link>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              {shop.region} CARD SHOP
            </p>
            <h1 className="mt-4 text-4xl font-semibold">{shop.name}</h1>
            <p className="mt-4 max-w-2xl text-white/65">{shop.description}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-white/50">Best for</p>
                <p className="mt-2 text-cyan-200">{shop.bestFor}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-white/50">Region</p>
                <p className="mt-2">{shop.region}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-white/50">Focus</p>
                <p className="mt-2">{shop.focus}</p>
              </div>
            </div>
          </div>

          <aside className="rounded-[32px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Scores</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Trust</span>
                  <span className="font-semibold text-cyan-200">
                    {shop.trust} / 10
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Pricing</span>
                  <span className="font-semibold text-cyan-200">
                    {shop.pricing} / 10
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Stock Range</span>
                  <span className="font-semibold text-cyan-200">
                    {shop.stock} / 10
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Collector Appeal</span>
                  <span className="font-semibold text-cyan-200">
                    {shop.appeal} / 10
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}