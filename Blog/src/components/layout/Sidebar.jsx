export default function Sidebar() {
  const categories = [
    "Technology",
    "Programming",
    "AI",
    "Business",
    "Travel",
    "Health",
  ];

  return (
    <aside className="hidden xl:block w-72">
      <div className="bg-slate-900 rounded-3xl p-6 sticky top-28">
        <h2 className="text-xl font-bold mb-6">Categories</h2>

        <div className="space-y-4">
          {categories.map((category) => (
            <button
              key={category}
              className="w-full text-left p-3 rounded-xl hover:bg-slate-800 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
