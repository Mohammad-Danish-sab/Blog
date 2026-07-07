import api from "./api";

const authService = {
  register: async (userData) => {
    const response = await api.post("/auth/local/register", {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });

    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post("/auth/local", credentials);

    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get("/users/me");

    return response.data;
  },
};

export default authService;
