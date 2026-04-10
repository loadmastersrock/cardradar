import Link from "next/link";

export default function AdvertisePage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-cyan-300 transition hover:text-cyan-200"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-6 text-4xl font-semibold">
            Feature your store on CardRadar
          </h1>
          <p className="mt-4 max-w-3xl text-white/70">
            CardRadar helps collectors discover trusted card shops. Featured
            placements give your store stronger visibility, premium positioning,
            and more outbound traffic from motivated buyers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">
              Standard
            </p>
            <h2 className="mt-4 text-3xl font-semibold">£29/mo</h2>
            <p className="mt-3 text-sm text-white/65">
              Simple directory presence for stores that want a professional
              listing.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li>• Store profile page</li>
              <li>• Directory listing</li>
              <li>• Outbound store link</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-amber-400/30 bg-amber-400/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-200">
              Featured
            </p>
            <h2 className="mt-4 text-3xl font-semibold">£79/mo</h2>
            <p className="mt-3 text-sm text-white/80">
              Premium visibility for stores that want stronger attention and
              higher click-through.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              <li>• Sponsored badge</li>
              <li>• Pinned above rankings</li>
              <li>• Priority visibility in directory</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-cyan-400/30 bg-cyan-400/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
              Premium+
            </p>
            <h2 className="mt-4 text-3xl font-semibold">£149/mo</h2>
            <p className="mt-3 text-sm text-white/80">
              Best for shops that want maximum exposure across homepage and
              directory placements.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              <li>• Everything in Featured</li>
              <li>• Homepage priority slot</li>
              <li>• Best-for category callout</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Why advertise here?</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="font-medium">Buy-intent traffic</p>
              <p className="mt-2 text-sm text-white/65">
                Collectors land here looking for where to buy.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="font-medium">Premium positioning</p>
              <p className="mt-2 text-sm text-white/65">
                Featured spots are clearly separated and more visible.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="font-medium">Fast to launch</p>
              <p className="mt-2 text-sm text-white/65">
                Start with a simple placement and scale up later.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hello@cardradar.co.uk?subject=Feature%20my%20store%20on%20CardRadar"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-300"
            >
              Enquire about featured placement
            </a>
            <Link
              href="/shops"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              View current directory
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}