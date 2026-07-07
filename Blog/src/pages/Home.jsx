import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import FeaturedBlogs from "../components/home/FeaturedBlogs";
import LatestBlogs from "../components/home/LatestBlogs";
import Categories from "../components/home/Categories";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedBlogs />
      <LatestBlogs />
      <Categories />
    </Layout>
  );
}
