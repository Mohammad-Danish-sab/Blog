import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 mb-6">
              🚀 Welcome to BlogSphere
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Discover Stories
              <span className="block text-cyan-400">That Inspire</span>
            </h1>

            <p className="text-slate-400 text-lg mb-10 max-w-xl">
              Read articles from developers, founders, designers and creators
              from around the world.
            </p>

            <div className="flex gap-5">
              <Link
                to="/blogs"
                className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition flex items-center gap-2"
              >
                Explore Blogs
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/register"
                className="px-8 py-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition"
              >
                Start Writing
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden lg:block"
          >
            <img
              src="/images/hero.png"
              alt="Hero"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
