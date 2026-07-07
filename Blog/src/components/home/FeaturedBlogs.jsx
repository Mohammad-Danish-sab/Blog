import { useEffect, useState } from "react";
import { getFeaturedBlogs } from "../../services/blogService";

export default function FeaturedBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await getFeaturedBlogs();
    setBlogs(data);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">Featured Blogs</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-slate-900 rounded-3xl overflow-hidden"
          >
            <img
              src={`http://localhost:1337${blog.coverImage?.url}`}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>

              <p className="text-gray-400">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
