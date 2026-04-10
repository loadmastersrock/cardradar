export default function MagicMadhousePage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <a
            href="/shops"
            className="text-sm text-cyan-300 transition hover:text-cyan-200"
          >
            ← Back to Shops
          </a>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              UK CARD SHOP
            </p>
            <h1 className="mt-4 text-4xl font-semibold">Magic Madhouse</h1>
            <p className="mt-4 max-w-3xl text-white/65">
              Magic Madhouse is a major UK trading card retailer with wide
              coverage across sealed products, singles, accessories, and popular
              TCG releases. It works well as a broad-market reference point for
              collectors comparing availability and mainstream pricing.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-white/50">Best for</p>
                <p className="mt-2 font-medium text-cyan-200">
                  Broad TCG coverage
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-white/50">Region</p>
                <p className="mt-2 font-medium">United Kingdom</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-white/50">Focus</p>
                <p className="mt-2 font-medium">Mainstream card games</p>
              </div>
            </div>
          </div>

          <aside className="rounded-[32px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Store Scores</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/60">Trust</p>
                  <p className="font-semibold text-cyan-200">8.8 / 10</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/60">Pricing</p>
                  <p className="font-semibold text-cyan-200">8.1 / 10</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/60">Stock Range</p>
                  <p className="font-semibold text-cyan-200">9.3 / 10</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/60">Collector Appeal</p>
                  <p className="font-semibold text-cyan-200">8.3 / 10</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="mt-6 inline-block rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Visit Store
            </a>
          </aside>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">What it is known for</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/70">
              <li>• Wide range across major card games</li>
              <li>• Good mainstream sealed product coverage</li>
              <li>• Useful price comparison reference point</li>
              <li>• Strong accessories and broader hobby appeal</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Watch-outs</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/70">
              <li>• Hottest products can move fast</li>
              <li>• Collector bargains are not always the strongest</li>
              <li>• Broad stock can mean less niche depth in some areas</li>
              <li>• Best checked alongside trend and price data</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Recent Highlights</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                Highlight
              </p>
              <h3 className="mt-3 text-lg font-medium">
                Strong mainstream TCG depth
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                Highlight
              </p>
              <h3 className="mt-3 text-lg font-medium">
                Reliable comparison shop for UK buyers
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                Highlight
              </p>
              <h3 className="mt-3 text-lg font-medium">
                Good spread of sealed and hobby products
              </h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}