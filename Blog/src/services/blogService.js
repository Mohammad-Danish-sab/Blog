import api from "./api";

const blogService = {
  getBlogs: async (page = 1, search = "", category = "") => {
    let url = `/blogs?populate=*`;

    url += `&pagination[page]=${page}`;
    url += `&pagination[pageSize]=6`;

    if (search) {
      url += `&filters[title][$containsi]=${search}`;
    }

    if (category) {
      url += `&filters[category][slug][$eq]=${category}`;
    }

    const response = await api.get(url);

    return response.data;
  },

  getBlogBySlug: async (slug) => {
    const response = await api.get(
      `/blogs?filters[slug][$eq]=${slug}&populate=*`,
    );

    return response.data.data[0];
  },

  getFeaturedBlogs: async () => {
    const response = await api.get(
      `/blogs?filters[featured][$eq]=true&populate=*`,
    );

    return response.data.data;
  },

  getRelatedBlogs: async (categoryId, currentId) => {
    const response = await api.get(
      `/blogs?filters[category][id][$eq]=${categoryId}&filters[id][$ne]=${currentId}&populate=*`,
    );

    return response.data.data;
  },
};

export default blogService;
