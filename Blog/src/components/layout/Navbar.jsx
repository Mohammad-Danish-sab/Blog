import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";

import { Link } from "react-router-dom";
import Logo from "../common/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/">Home</Link>

            <Link to="/blogs">Blogs</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>
          </nav>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-4">
            <button>
              <Search />
            </button>

            <Link to="/login" className="px-4 py-2 rounded-lg bg-slate-800">
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile */}

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-slate-900">
          <div className="flex flex-col p-6 gap-5">
            <Link to="/">Home</Link>

            <Link to="/blogs">Blogs</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

            <Link to="/login">Login</Link>

            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
