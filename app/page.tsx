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
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/25">
      {initials}
    </div>
  );
}

const radarItems = [
  {
    slug: "pokemon-151",
    label: "Pokémon 151 JP",
    change: "+12%",
    status: "Rising fast",
    className:
      "absolute left-[16%] top-[26%] rounded-2xl bg-green-500/20 px-4 py-2 text-sm text-green-200 ring-1 ring-green-400/30 transition hover:scale-105",
    changeClass: "text-green-300",
  },
  {
    slug: "evolving-skies",
    label: "Evolving Skies ETB",
    change: "-3%",
    status: "Cooling off",
    className:
      "absolute right-[14%] top-[34%] rounded-2xl bg-red-500/20 px-4 py-2 text-sm text-red-200 ring-1 ring-red-400/30 transition hover:scale-105",
    changeClass: "text-red-300",
  },
  {
    slug: "one-piece",
    label: "One Piece OP-05",
    change: "+8%",
    status: "Heat building",
    className:
      "absolute bottom-[20%] left-[24%] rounded-2xl bg-amber-500/20 px-4 py-2 text-sm text-amber-200 ring-1 ring-amber-400/30 transition hover:scale-105",
    changeClass: "text-green-300",
  },
  {
    slug: "lorcana",
    label: "Lorcana Enchanted",
    change: "+5%",
    status: "Watch closely",
    className:
      "absolute bottom-[24%] right-[18%] rounded-2xl bg-blue-500/20 px-4 py-2 text-sm text-blue-200 ring-1 ring-blue-400/30 transition hover:scale-105",
    changeClass: "text-green-300",
  },
];

export default function Home() {
  const shopList = Object.values(shops);

  const featuredPinned = shopList.filter((shop) => shop.featured);
  const nonFeatured = [...shopList]
    .filter((shop) => !shop.featured)
    .sort((a, b) => Number(b.trust) - Number(a.trust));

  const homepageShops = [...featuredPinned, ...nonFeatured].slice(0, 4);

  const bestTrust = [...shopList].sort(
    (a, b) => Number(b.trust) - Number(a.trust)
  )[0];

  const bestStock = [...shopList].sort(
    (a, b) => Number(b.stock) - Number(a.stock)
  )[0];

  const topTrend = featuredPinned[0] || bestTrust;

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
              className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-400/20"
            >
              Get Featured
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
          </aside>

          <div className="rounded-[32px] border border-cyan-400/20 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-semibold">
                Discover what is moving before everyone else
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/65">
                Compare trusted card shops, follow momentum, and spot the places
                collectors are most likely to buy from next.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/shops"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-cyan-300"
                >
                  Explore Shops
                </Link>
                <Link
                  href="/advertise"
                  className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-3 text-sm text-amber-100 transition hover:border-amber-300"
                >
                  Feature Your Store
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square max-w-2xl items-center justify-center rounded-full border border-cyan-300/20 bg-[radial-gradient(circle,rgba(34,211,238,0.12),rgba(3,7,18,0.2)_55%,transparent_70%)]">
              <div className="absolute h-[84%] w-[84%] rounded-full border border-cyan-200/10" />
              <div className="absolute h-[64%] w-[64%] rounded-full border border-cyan-200/10" />
              <div className="absolute h-[44%] w-[44%] rounded-full border border-cyan-200/10" />
              <div className="absolute h-2 w-2 rounded-full bg-cyan-300" />

              {radarItems.map((item) => (
                <a
                  key={item.slug}
                  href={`/go/${item.slug}?from=radar`}
                  className={item.className}
                >
                  {item.label} {item.change}
                </a>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-lg font-semibold">What’s Moving</h3>

            <div className="mt-5 space-y-4 text-sm">
              {radarItems.map((item) => (
                <div
                  key={item.slug}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium">{item.label}</p>
                    <p className={`font-medium ${item.changeClass}`}>
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
                  <span className="text-cyan-200">{topTrend.name}</span>
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
          {homepageShops.map((shop, index) => (
            <div
              key={shop.slug}
              className={`rounded-[24px] border p-5 transition ${
                shop.featured
                  ? "border-amber-400/30 bg-gradient-to-b from-amber-400/10 to-white/5 hover:border-amber-300/50"
                  : "border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-white/10"
              }`}
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <ShopInitials name={shop.name} />
                  <div>
                    <p className="text-xs text-cyan-300">{shop.location}</p>
                    <h4 className="text-lg font-semibold">{shop.name}</h4>
                  </div>
                </div>

                <div className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  #{index + 1}
                </div>
              </div>

              <div className="mb-3 flex flex-wrap gap-2">
                {shop.featured ? (
                  <span className="inline-block rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-200 ring-1 ring-amber-400/20">
                    Sponsored
                  </span>
                ) : null}
              </div>

              <p className="mt-2 text-sm text-cyan-200">{shop.category}</p>
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

              <div className="mt-6 flex gap-3">
                <Link
                  href={`/shops/${shop.slug}`}
                  className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  View Store
                </Link>
                <a
                  href={`/go/${shop.slug}?from=home`}
                  className={`inline-block rounded-full border px-4 py-2 text-sm transition ${
                    shop.featured
                      ? "border-amber-300/30 hover:border-amber-200 hover:text-amber-100"
                      : "border-white/15 hover:border-cyan-400 hover:text-cyan-200"
                  }`}
                >
                  Visit →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}