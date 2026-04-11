import { supabaseServer } from "@/lib/supabase-server";

export default async function DashboardPage() {
  const { data } = await supabaseServer
    .from("shop_clicks")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);

  const clicks = data || [];

  // GROUP BY SHOP
  const grouped = clicks.reduce((acc: any, click: any) => {
    const key = click.shop_slug;

    if (!acc[key]) {
      acc[key] = {
        name: click.shop_name,
        total: 0,
        radar: 0,
        shops: 0,
      };
    }

    acc[key].total++;

    if (click.source === "radar") acc[key].radar++;
    if (click.source === "shops") acc[key].shops++;

    return acc;
  }, {});

  const sorted = Object.values(grouped).sort(
    (a: any, b: any) => b.total - a.total
  );

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold mb-8">📊 CardRadar Dashboard</h1>

        <div className="space-y-4">
          {sorted.map((shop: any) => (
            <div
              key={shop.name}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <h2 className="text-lg font-semibold">{shop.name}</h2>

              <div className="mt-3 grid grid-cols-3 text-sm gap-4">
                <div>
                  <p className="text-white/50">Total Clicks</p>
                  <p className="text-cyan-300 text-lg">{shop.total}</p>
                </div>

                <div>
                  <p className="text-white/50">From Radar</p>
                  <p className="text-green-300 text-lg">{shop.radar}</p>
                </div>

                <div>
                  <p className="text-white/50">From Shops</p>
                  <p className="text-amber-300 text-lg">{shop.shops}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sorted.length === 0 && (
          <p className="text-white/50 mt-10">
            No data yet — click some radar items or shop links 👀
          </p>
        )}
      </div>
    </main>
  );
}