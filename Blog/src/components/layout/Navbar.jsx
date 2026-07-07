import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";

import { Link } from "react-router-dom";
import Logo from "../common/Logo";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const token = localStorage.getItem("token");

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-slate-300">
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>

            <Link to="/blogs" className="hover:text-cyan-400 transition">
              Blogs
            </Link>

            <Link to="/about" className="hover:text-cyan-400 transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 transition">
              <Search size={20} />
            </button>

            {!token ? (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-xl border border-slate-700 hover:border-cyan-500 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                to="/profile"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center"
              >
                <User size={20} />
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden py-6 flex flex-col gap-5 text-slate-300">
            <Link to="/">Home</Link>

            <Link to="/blogs">Blogs</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

            <Link to="/login">Login</Link>

            <Link to="/register">Sign Up</Link>
          </div>
        )}
      </div>
    </header>
  );
}
