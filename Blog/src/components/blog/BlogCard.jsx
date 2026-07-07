import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const image = blog.coverImage?.url
    ? `${import.meta.env.VITE_UPLOAD_URL}${blog.coverImage.url}`
    : "";

  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300">
      <img src={image} alt={blog.title} className="w-full h-56 object-cover" />

      <div className="p-6">
        <span className="text-cyan-400 text-sm">{blog.category?.name}</span>

        <h2 className="text-2xl font-bold mt-3 mb-4">{blog.title}</h2>

        <p className="text-slate-400 mb-5">{blog.excerpt}</p>

        <Link
          to={`/blogs/${blog.slug}`}
          className="text-cyan-400 hover:text-cyan-300"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
