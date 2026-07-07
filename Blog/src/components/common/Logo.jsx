import { PenSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
        <PenSquare size={24} className="text-white" />
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">BlogSphere</h1>

        <p className="text-sm text-slate-400">Stories That Matter</p>
      </div>
    </Link>
  );
}
