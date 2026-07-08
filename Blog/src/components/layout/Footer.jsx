import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
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
              Discover stories, ideas, and experiences from developers,
              creators, and entrepreneurs around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Quick Links</h3>

            <div className="space-y-3 text-slate-400 flex flex-col">
              <Link
                to="/"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Home
              </Link>

              <Link
                to="/blogs"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Blogs
              </Link>

              <Link
                to="/about"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Categories</h3>

            <div className="space-y-3 text-slate-400 flex flex-col">
              <Link
                to="/category/technology"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Technology
              </Link>

              <Link
                to="/category/programming"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Programming
              </Link>

              <Link
                to="/category/artificial-intelligence"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Artificial Intelligence
              </Link>

              <Link
                to="/category/business"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Business
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Newsletter</h3>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none focus:border-cyan-500 text-white placeholder:text-slate-500"
              />

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold text-white hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 BlogSphere. All Rights Reserved.
          </p>

          <div className="flex gap-5 text-slate-400 text-xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
