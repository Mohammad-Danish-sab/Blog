import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function RegisterForm() {
  const { register } = useAuth();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(form.username, form.email, form.password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        placeholder="Username"
        className="w-full p-4 rounded-xl bg-slate-900"
        onChange={(e) =>
          setForm({
            ...form,
            username: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        className="w-full p-4 rounded-xl bg-slate-900"
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
        className="w-full p-4 rounded-xl bg-slate-900"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <button className="w-full py-4 rounded-xl bg-cyan-500">
        Create Account
      </button>
    </form>
  );
}
