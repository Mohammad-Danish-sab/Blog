import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">Categories</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-slate-900 rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
