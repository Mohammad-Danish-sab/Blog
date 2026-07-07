import { useEffect, useState } from "react";
import { getLatestBlogs } from "../../services/blogService";

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await getLatestBlogs();
    setBlogs(data);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">Latest Blogs</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-slate-900 rounded-3xl overflow-hidden"
          >
            <img
              src={`http://localhost:1337${blog.coverImage?.url}`}
              className="h-52 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">{blog.title}</h3>

              <p className="mt-4 text-gray-400">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
