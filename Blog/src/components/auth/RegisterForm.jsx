import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function RegisterForm() {
  const { register } = useAuth();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      await register(form.username, form.email, form.password);

      setSuccess("Account created successfully!");

      setForm({
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.error(err.response?.data);

      setError(err.response?.data?.error?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-xl">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-500/20 border border-green-500 text-green-300 p-3 rounded-xl">
          {success}
        </div>
      )}

      <input
        type="text"
        placeholder="Username"
        value={form.username}
        className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500"
        onChange={(e) =>
          setForm({
            ...form,
            username: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition"
      >
        Create Account
      </button>
    </form>
  );
}
