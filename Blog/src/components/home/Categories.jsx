import { Cpu, Code2, Briefcase, Plane, Heart, Brain } from "lucide-react";

const categories = [
  { name: "Technology", icon: Cpu },
  { name: "Programming", icon: Code2 },
  { name: "Business", icon: Briefcase },
  { name: "Travel", icon: Plane },
  { name: "Health", icon: Heart },
  { name: "AI", icon: Brain },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12">Explore Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.name}
              className="bg-slate-900 rounded-3xl p-8 hover:scale-105 transition text-center"
            >
              <Icon className="mx-auto mb-5 text-cyan-400" size={36} />

              <h3 className="font-semibold">{category.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
