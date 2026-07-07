import { Flame } from "lucide-react";
import BlogCard from "../blog/BlogCard";

export default function TrendingBlogs({ blogs = [] }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-center gap-3 mb-12">
        <Flame className="text-orange-500" />

        <h2 className="text-4xl font-bold">Trending Now</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
