import axios from "axios";

const API_URL = "http://localhost:1337/api";

const blogService = {
  getBlogs: async () => {
    const response = await axios.get(`${API_URL}/blogs?populate=*`);
    return response.data;
  },

  getFeaturedBlogs: async () => {
    const response = await axios.get(
      `${API_URL}/blogs?filters[featured][$eq]=true&populate=*`,
    );
    return response.data;
  },

  getLatestBlogs: async () => {
    const response = await axios.get(
      `${API_URL}/blogs?sort=createdAt:desc&pagination[pageSize]=6&populate=*`,
    );
    return response.data;
  },
};

export default blogService;
