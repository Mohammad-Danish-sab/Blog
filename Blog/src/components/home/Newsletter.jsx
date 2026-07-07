export default function Newsletter() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl p-12 text-center border border-cyan-500/20">
        <h2 className="text-5xl font-bold mb-6">Stay Updated</h2>

        <p className="text-slate-400 mb-10">
          Subscribe to receive the latest articles directly in your inbox.
        </p>

        <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-cyan-500"
          />

          <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
