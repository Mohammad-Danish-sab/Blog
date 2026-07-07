import { PenSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="bg-blue-600 p-2 rounded-xl">
        <PenSquare className="text-white" size={24} />
      </div>

      <div>
        <h2 className="text-xl font-bold text-white">BlogHub</h2>

        <p className="text-xs text-gray-400">Share Your Stories</p>
      </div>
    </Link>
  );
}
