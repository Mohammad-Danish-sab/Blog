import API from "./api";

export const getCategories = async () => {
  const response = await API.get("/categories?populate=*");

  return response.data.data;
};
