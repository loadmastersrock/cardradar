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
        <h1 className="text-2xl">Shop not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <a href="/shops" className="text-cyan-300 hover:text-cyan-200">
          ← Back to Shops
        </a>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h1 className="text-4xl font-semibold">{shop.name}</h1>
            <p className="mt-4 text-white/65">{shop.description}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-black/20 rounded-2xl border border-white/10">
                <p className="text-sm text-white/50">Best for</p>
                <p className="mt-2 text-cyan-200">{shop.bestFor}</p>
              </div>

              <div className="p-4 bg-black/20 rounded-2xl border border-white/10">
                <p className="text-sm text-white/50">Region</p>
                <p className="mt-2">{shop.region}</p>
              </div>

              <div className="p-4 bg-black/20 rounded-2xl border border-white/10">
                <p className="text-sm text-white/50">Focus</p>
                <p className="mt-2">{shop.focus}</p>
              </div>
            </div>
          </div>

          <aside className="rounded-[32px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Scores</h2>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between">
                <span>Trust</span>
                <span>{shop.trust}/10</span>
              </div>
              <div className="flex justify-between">
                <span>Pricing</span>
                <span>{shop.pricing}/10</span>
              </div>
              <div className="flex justify-between">
                <span>Stock</span>
                <span>{shop.stock}/10</span>
              </div>
              <div className="flex justify-between">
                <span>Appeal</span>
                <span>{shop.appeal}/10</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}