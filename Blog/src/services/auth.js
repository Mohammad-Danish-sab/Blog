import API from "./api";

export const registerUser = async (data) => {
  const response = await API.post("/auth/local/register", {
    username: data.username,
    email: data.email,
    password: data.password,
  });

  return response.data;
};

export const loginUser = async (data) => {
  const response = await API.post("/auth/local", {
    identifier: data.email,
    password: data.password,
  });

  return response.data;
};

export const getCurrentUser = async (token) => {
  const response = await API.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
