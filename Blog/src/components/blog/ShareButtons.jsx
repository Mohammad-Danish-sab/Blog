import { Facebook, Linkedin, Twitter, Copy } from "lucide-react";

export default function ShareButtons() {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="flex gap-4 mt-10">
      <button>
        <Facebook />
      </button>

      <button>
        <Twitter />
      </button>

      <button>
        <Linkedin />
      </button>

      <button onClick={copyLink}>
        <Copy />
      </button>
    </div>
  );
}
