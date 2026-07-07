import API from "./api";

export const getBlogs = async () => {
  const res = await API.get("/blogs?populate=*");

  return res.data.data;
};
