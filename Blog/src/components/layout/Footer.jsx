import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          <div>
            <Logo />

            <p className="mt-5 text-gray-400">
              Discover amazing blogs from developers, creators and writers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5">Quick Links</h3>

            <div className="space-y-3">
              <p>Home</p>

              <p>Blogs</p>

              <p>About</p>

              <p>Contact</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">Categories</h3>

            <div className="space-y-3">
              <p>Technology</p>

              <p>Programming</p>

              <p>AI</p>

              <p>Travel</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">Newsletter</h3>

            <input
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-slate-800"
            />

            <button className="w-full mt-4 bg-blue-600 rounded-lg p-3">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-400">
          © 2026 BlogHub. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
