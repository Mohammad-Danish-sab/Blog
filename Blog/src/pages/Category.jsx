import { useParams } from "react-router-dom";

export default function Category() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center text-white text-4xl">
      Category Page: {slug}
    </div>
  );
}
