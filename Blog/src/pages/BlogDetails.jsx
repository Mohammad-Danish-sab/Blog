import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Layout from "../components/layout/Layout";
import blogService from "../services/blogService";

export default function BlogDetails() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const data = await blogService.getBlogBySlug(slug);

    setBlog(data.attributes);
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-6 py-20">
        <img
          src={`${import.meta.env.VITE_UPLOAD_URL}${blog.coverImage.url}`}
          className="rounded-3xl mb-10"
        />

        <h1 className="text-6xl font-bold mb-6">{blog.title}</h1>

        <p className="text-slate-400 mb-10">{blog.excerpt}</p>

        <div
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </article>
    </Layout>
  );
}
