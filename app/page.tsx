import Link from "next/link";

export default function Home() {
  const shops = [
    {
      name: "Obsidia Distribution",
      tag: "Best for Japanese sealed",
      note: "Trusted UK seller",
      href: "/shops",
    },
    {
      name: "Chaos Cards",
      tag: "Popular sealed stock",
      note: "Strong Pokémon range",
      href: "/shops/chaos-cards",
    },
    {
      name: "Magic Madhouse",
      tag: "Broad card coverage",
      note: "Good for mainstream sets",
      href: "/shops/magic-madhouse",
    },
    {
      name: "Karnage Collectables",
      tag: "Collector-focused picks",
      note: "Fast-moving products",
      href: "/shops",
    },
  ];

  const opportunities = [
    {
      title: "Undervalued Right Now",
      product: "Pokémon 151 Japanese Booster Box",
      description:
        "Strong nostalgia, steady demand, and broad collector appeal.",
    },
    {
      title: "Heat Building",
      product: "One Piece OP-05",
      description: "Momentum is building as sealed interest keeps rising.",
    },
    {
      title: "Cooling Off",
      product: "Crown Zenith ETB",
      description: "Still popular, but pricing may be running ahead of demand.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-[0.2em] text-cyan-300">
              CARDRADAR
            </h1>
            <p className="text-sm text-white/60">
              Track the pulse of the card market
            </p>
          </div>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <Link href="/shops" className="transition hover:text-white">
              Shops
            </Link>
            <Link href="#" className="transition hover:text-white">
              Products
            </Link>
            <Link href="#" className="transition hover:text-white">
              Trends
            </Link>
            <Link href="#" className="transition hover:text-white">
              Guides
            </Link>
          </nav>

          <button className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20">
            Join Watchlist
          </button>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_40%)]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[260px_minmax(0,1fr)_300px]">
          <aside className="space-y-3">
            {[
              "Pokémon",
              "One Piece",
              "Lorcana",
              "Sealed Boxes",
              "Single Cards",
              "UK Market",
              "Japan Market",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="rounded-[32px] border border-cyan-400/20 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-semibold">
                The smarter way to buy collectible cards
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/65">
                Compare shops, track trends, and discover what is actually worth
                watching.
              </p>
            </div>

            <div className="relative mx-auto flex aspect-square max-w-2xl items-center justify-center rounded-full border border-cyan-300/20 bg-[radial-gradient(circle,rgba(34,211,238,0.12),rgba(3,7,18,0.2)_55%,transparent_70%)]">
              <div className="absolute h-[82%] w-[82%] rounded-full border border-cyan-200/10" />
              <div className="absolute h-[62%] w-[62%] rounded-full border border-cyan-200/10" />
              <div className="absolute h-[42%] w-[42%] rounded-full border border-cyan-200/10" />
              <div className="absolute h-2 w-2 rounded-full bg-cyan-300" />

              <div className="absolute left-[18%] top-[28%] rounded-2xl bg-green-500/20 px-4 py-2 text-sm text-green-200 ring-1 ring-green-400/30">
                Pokémon 151 Box +12%
              </div>
              <div className="absolute right-[14%] top-[35%] rounded-2xl bg-red-500/20 px-4 py-2 text-sm text-red-200 ring-1 ring-red-400/30">
                Lorcana Enchanted -8%
              </div>
              <div className="absolute bottom-[20%] left-[28%] rounded-2xl bg-amber-500/20 px-4 py-2 text-sm text-amber-200 ring-1 ring-amber-400/30">
                One Piece OP-05 +15%
              </div>
              <div className="absolute bottom-[24%] right-[20%] rounded-2xl bg-blue-500/20 px-4 py-2 text-sm text-blue-200 ring-1 ring-blue-400/30">
                New Set Radar
              </div>
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-lg font-semibold">Market Insights</h3>
            <div className="mt-5 space-y-4 text-sm">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-white/50">Hot today</p>
                <p className="mt-1 font-medium">Charizard UPC</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-white/50">Biggest gainer</p>
                <p className="mt-1 font-medium text-green-300">
                  Eevee Heroes +15%
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-white/50">Overpriced alert</p>
                <p className="mt-1 font-medium text-amber-300">
                  Evolving Skies ETB
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Top Card Shops</h3>
          <p className="text-sm text-white/50">Trusted places to start</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {shops.map((shop) => (
            <div
              key={shop.name}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <h4 className="text-lg font-semibold">{shop.name}</h4>
              <p className="mt-3 text-sm text-cyan-200">{shop.tag}</p>
              <p className="mt-2 text-sm text-white/60">{shop.note}</p>

              <Link
                href={shop.href}
                className="mt-5 inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-400/40 hover:text-cyan-200"
              >
                View Store
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Opportunities</h3>
          <p className="text-sm text-white/50">
            Where attention may be building
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                {item.title}
              </p>
              <h4 className="mt-4 text-2xl font-semibold">{item.product}</h4>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {item.description}
              </p>
              <button className="mt-6 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90">
                View Breakdown
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CardRadar</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              About
            </Link>
            <Link href="#" className="hover:text-white">
              Contact
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}