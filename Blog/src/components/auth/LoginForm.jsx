import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const { login } = useAuth();

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(form.identifier, form.password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-4 rounded-xl bg-slate-900"
        onChange={(e) =>
          setForm({
            ...form,
            identifier: e.target.value,
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

      <button className="w-full py-4 rounded-xl bg-cyan-500">Login</button>
    </form>
  );
}
