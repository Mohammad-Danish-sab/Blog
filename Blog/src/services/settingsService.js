import API from "./api";

export const getSettings = async () => {
  const res = await API.get("/site-setting?populate=*");

  return res.data.data;
};
