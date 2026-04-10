export default function AdvertisePage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold">Advertise with CardRadar</h1>

        <p className="mt-4 text-white/70">
          CardRadar connects buyers directly with trusted card shops. 
          If you want more visibility, traffic, and sales — we offer premium placement options.
        </p>

        {/* PLANS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Basic</h2>
            <p className="mt-2 text-3xl font-bold">£29/mo</p>

            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Listed in directory</li>
              <li>• Standard visibility</li>
              <li>• Link to your store</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-6">
            <h2 className="text-xl font-semibold">Featured</h2>
            <p className="mt-2 text-3xl font-bold">£79/mo</p>

            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• 🔝 Pinned to top</li>
              <li>• ⭐ Sponsored badge</li>
              <li>• Increased visibility</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-6">
            <h2 className="text-xl font-semibold">Premium</h2>
            <p className="mt-2 text-3xl font-bold">£149/mo</p>

            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• 🥇 Top placement</li>
              <li>• Featured + priority ranking</li>
              <li>• Future homepage placement</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-2xl font-semibold">Get Listed</h2>
          <p className="mt-3 text-white/70">
            Want your store featured on CardRadar?
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-6 inline-block rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black hover:bg-cyan-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}