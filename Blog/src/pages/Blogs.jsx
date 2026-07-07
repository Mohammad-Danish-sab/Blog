import { useEffect, useState } from "react";

import Layout from "../components/layout/Layout";
import BlogCard from "../components/blog/BlogCard";
import blogService from "../services/blogService";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await blogService.getBlogs();

    setBlogs(response.data);
  };

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-12">Latest Articles</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog.attributes} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
