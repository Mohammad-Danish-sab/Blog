import { createContext, useEffect, useState } from "react";
import authService from "../services/authService";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      localStorage.removeItem("token");
    }

    setLoading(false);
  };

  const login = async (identifier, password) => {
    const data = await authService.login({
      identifier,
      password,
    });

    localStorage.setItem("token", data.jwt);
    setUser(data.user);
  };

  const register = async (username, email, password) => {
    const data = await authService.register({
      username,
      email,
      password,
    });

    localStorage.setItem("token", data.jwt);
    setUser(data.user);
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
