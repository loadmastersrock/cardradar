import Link from "next/link";
import { shops } from "@/lib/shops";

function ShopInitials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-semibold tracking-wide text-cyan-200 ring-1 ring-cyan-400/25">
      {initials}
    </div>
  );
}

export default function Home() {
  const shopList = Object.values(shops);
  const featuredShops = shopList.slice(0, 4);

  const bestTrust = [...shopList].sort(
    (a, b) => Number(b.trust) - Number(a.trust)
  )[0];

  const bestStock = [...shopList].sort(
    (a, b) => Number(b.stock) - Number(a.stock)
  )[0];

  const featured = shopList.find((s) => s.featured) || shopList[0];

  const movers = [
    { name: "Pokémon 151 JP", change: "+12.4%", status: "Rising fast" },
    { name: "One Piece OP-05", change: "+8.1%", status: "Heat building" },
    { name: "Evolving Skies ETB", change: "-3.2%", status: "Cooling off" },
    { name: "Lorcana Enchanted", change: "+5.7%", status: "Watch closely" },
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
            <Link
              href="/best-pokemon-card-shops-uk"
              className="transition hover:text-white"
            >
              Best UK Shops
            </Link>
            <Link href="/advertise" className="transition hover:text-white">
              Advertise
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/shops"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Browse Shops
            </Link>
            <Link
              href="/advertise"
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
            >
              List Your Store
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_40%)]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[240px_minmax(0,1fr)_320px]">
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

            <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                Quick Links
              </p>
              <div className="mt-4 space-y-3">
                <Link
                  href="/shops"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80 transition hover:border-cyan-400/30 hover:text-cyan-200"
                >
                  Explore ranked shops
                </Link>
                <Link
                  href="/best-pokemon-card-shops-uk"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80 transition hover:border-cyan-400/30 hover:text-cyan-200"
                >
                  View best UK shops
                </Link>
                <Link
                  href="/advertise"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80 transition hover:border-cyan-400/30 hover:text-cyan-200"
                >
                  Advertise on CardRadar
                </Link>
              </div>
            </div>
          </aside>

          <div className="rounded-[32px] border border-cyan-400/20 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-semibold">
                The smarter way to track what is moving
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/65">
                Compare shops, spot momentum, and discover which products are
                getting hotter before everyone else piles in.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/shops"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-cyan-300"
                >
                  Explore Shops
                </Link>
                <Link
                  href="/best-pokemon-card-shops-uk"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  Best UK Shops
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square max-w-2xl items-center justify-center rounded-full border border-cyan-300/20 bg-[radial-gradient(circle,rgba(34,211,238,0.12),rgba(3,7,18,0.2)_55%,transparent_70%)]">
              <div className="absolute h-[84%] w-[84%] rounded-full border border-cyan-200/10" />
              <div className="absolute h-[64%] w-[64%] rounded-full border border-cyan-200/10" />
              <div className="absolute h-[44%] w-[44%] rounded-full border border-cyan-200/10" />
              <div className="absolute h-2 w-2 rounded-full bg-cyan-300" />

              <div className="absolute left-[16%] top-[26%] rounded-2xl bg-green-500/20 px-4 py-2 text-sm text-green-200 ring-1 ring-green-400/30">
                Pokémon 151 JP +12%
              </div>

              <div className="absolute right-[14%] top-[34%] rounded-2xl bg-red-500/20 px-4 py-2 text-sm text-red-200 ring-1 ring-red-400/30">
                Evolving Skies ETB -3%
              </div>

              <div className="absolute bottom-[20%] left-[24%] rounded-2xl bg-amber-500/20 px-4 py-2 text-sm text-amber-200 ring-1 ring-amber-400/30">
                One Piece OP-05 +8%
              </div>

              <div className="absolute bottom-[24%] right-[18%] rounded-2xl bg-blue-500/20 px-4 py-2 text-sm text-blue-200 ring-1 ring-blue-400/30">
                Lorcana Enchanted +5%
              </div>
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-lg font-semibold">What’s Moving</h3>

            <div className="mt-5 space-y-4 text-sm">
              {movers.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium">{item.name}</p>
                    <p
                      className={`font-medium ${
                        item.change.startsWith("-")
                          ? "text-red-300"
                          : "text-green-300"
                      }`}
                    >
                      {item.change}
                    </p>
                  </div>
                  <p className="mt-2 text-white/50">{item.status}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                Market Snapshot
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/55">Top Trend</span>
                  <span className="text-cyan-200">{featured.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/55">Best Shop by Trust</span>
                  <span className="text-cyan-200">{bestTrust.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/55">Best Shop by Stock</span>
                  <span className="text-cyan-200">{bestStock.name}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Top Card Shops</h3>
          <Link
            href="/shops"
            className="text-sm text-white/50 transition hover:text-cyan-200"
          >
            View all shops →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredShops.map((shop) => (
            <div
              key={shop.slug}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <ShopInitials name={shop.name} />
                <div>
                  <p className="text-xs text-cyan-300">{shop.location}</p>
                  <h4 className="text-lg font-semibold">{shop.name}</h4>
                </div>
              </div>

              <p className="mt-3 text-sm text-cyan-200">{shop.category}</p>
              <p className="mt-2 text-sm text-white/60">{shop.note}</p>

              <div className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">Trust</span>
                  <span className="text-cyan-200">{shop.trust}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Stock</span>
                  <span className="text-cyan-200">{shop.stock}</span>
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
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Radar Opportunities</h3>
          <p className="text-sm text-white/50">Where attention may be building</p>
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
              <Link
                href="/shops"
                className="mt-6 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
              >
                Explore Shops
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-4">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-3xl font-semibold">Own a card shop?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/65">
            Get featured placement, more visibility, and direct buyer traffic by
            listing your store on CardRadar.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/advertise"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-300"
            >
              Advertise with us
            </Link>
            <Link
              href="/shops"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              View Directory
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}