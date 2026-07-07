import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/blogs" element={<Blogs />} />

      <Route path="/blogs/:slug" element={<BlogDetails />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
