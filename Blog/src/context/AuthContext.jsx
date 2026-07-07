import { createContext, useContext, useEffect, useState } from "react";

import { loginUser, registerUser, getCurrentUser } from "../services/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const currentUser = await getCurrentUser(token);
      setUser(currentUser);
    } catch (error) {
      localStorage.removeItem("token");
    }

    setLoading(false);
  };

  const login = async (data) => {
    const response = await loginUser(data);

    localStorage.setItem("token", response.jwt);

    setUser(response.user);

    return response;
  };

  const register = async (data) => {
    const response = await registerUser(data);

    localStorage.setItem("token", response.jwt);

    setUser(response.user);

    return response;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
