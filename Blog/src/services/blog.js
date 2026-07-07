import API from "./api";

export const getBlogs = async (page = 1, search = "", category = "") => {
  let url = `/blogs?populate=*`;

  url += `&pagination[page]=${page}`;
  url += `&pagination[pageSize]=6`;

  if (search) {
    url += `&filters[title][$containsi]=${search}`;
  }

  if (category) {
    url += `&filters[category][name][$eq]=${category}`;
  }

  const response = await API.get(url);

  return response.data;
};

export const getBlogBySlug = async (slug) => {
  const response = await API.get(
    `/blogs?filters[slug][$eq]=${slug}&populate=*`,
  );

  return response.data.data[0];
};

export const getRelatedBlogs = async (categoryId, currentId) => {
  const response = await API.get(
    `/blogs?filters[category][id][$eq]=${categoryId}&filters[id][$ne]=${currentId}&populate=*`,
  );

  return response.data.data;
};
