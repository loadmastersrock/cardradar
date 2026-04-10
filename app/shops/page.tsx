const shops = [
  {
    name: "Obsidia Distribution",
    category: "Japanese sealed",
    location: "UK",
    note: "Strong for Japanese booster boxes and harder-to-find sealed products.",
    href: "#",
  },
  {
    name: "Chaos Cards",
    category: "Mainstream sealed",
    location: "UK",
    note: "Well-known card retailer with broad Pokémon and TCG coverage.",
    href: "/shops/chaos-cards",
  },
  {
    name: "Magic Madhouse",
    category: "Broad TCG range",
    location: "UK",
    note: "Strong selection across Pokémon, Yu-Gi-Oh, Magic, and accessories.",
    href: "#",
  },
  {
    name: "Karnage Collectables",
    category: "Collector picks",
    location: "UK",
    note: "More collector-focused stock with quick-moving items.",
    href: "#",
  },
];

export default function ShopsPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <a
            href="/"
            className="text-sm text-cyan-300 transition hover:text-cyan-200"
          >
            ← Back to Home
          </a>

          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-cyan-300">
            CardRadar Directory
          </p>
          <h1 className="mt-3 text-4xl font-semibold">Top Card Shops</h1>
          <p className="mt-3 max-w-2xl text-white/65">
            Browse trusted card shops by speciality, region, and what they are
            best known for.
          </p>
        </div>

        <div className="mb-8 grid gap-3 md:grid-cols-4">
          {["Pokémon", "One Piece", "Japanese", "UK Only"].map((filter) => (
            <div
              key={filter}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
            >
              {filter}
            </div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {shops.map((shop) => (
            <div
              key={shop.name}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                {shop.location}
              </p>
              <h2 className="mt-3 text-xl font-semibold">{shop.name}</h2>
              <p className="mt-3 text-sm text-cyan-200">{shop.category}</p>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {shop.note}
              </p>
              <a
                href={shop.href}
                className="mt-6 inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-400/40 hover:text-cyan-200"
              >
                View Store
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}