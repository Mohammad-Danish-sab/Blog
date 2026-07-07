import { useEffect, useState } from "react";
import { getSiteSettings } from "../../services/settingsService";

export default function Hero() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const data = await getSiteSettings();
      setSettings(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!settings) {
    return (
      <div className="h-[500px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const imageUrl = settings.heroImage?.url
    ? `http://localhost:1337${settings.heroImage.url}`
    : "";

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            {settings.heroTitle}
          </h1>

          <p className="text-gray-400 text-lg mb-8">{settings.heroSubtitle}</p>

          <button className="bg-blue-600 px-8 py-4 rounded-xl">
            {settings.heroButtonText}
          </button>
        </div>

        <div>
          <img src={imageUrl} alt="Hero" className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
