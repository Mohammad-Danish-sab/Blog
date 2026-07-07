import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(formData);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto py-20">
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full p-4 rounded-lg"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-4 rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-4 rounded-lg"
        />

        <button
          className="w-full bg-blue-600 p-4 rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
}