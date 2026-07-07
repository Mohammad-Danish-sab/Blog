import Layout from "../components/layout/Layout";
import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-slate-900 p-10 rounded-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Create Account
          </h1>

          <RegisterForm />
        </div>
      </div>
    </Layout>
  );
}
