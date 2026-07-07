import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Logo />

            <p className="text-slate-400 mt-5 leading-7">
              Discover stories, ideas and experiences from developers, creators
              and entrepreneurs around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">Quick Links</h3>

            <div className="space-y-3 text-slate-400">
              <p>Home</p>
              <p>Blogs</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-5">Categories</h3>

            <div className="space-y-3 text-slate-400">
              <p>Technology</p>
              <p>Programming</p>
              <p>Artificial Intelligence</p>
              <p>Business</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-5">Newsletter</h3>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none focus:border-cyan-500"
              />

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-slate-500">
            © 2026 BlogSphere. All Rights Reserved.
          </p>

          <div className="flex gap-5 text-slate-400">
            <Github />
            <Linkedin />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
}
