import type { MetaFunction } from "@remix-run/node";
import wood from "../assets/img/wood.webp";
import nick from "../assets/photo/nick.jpeg";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Alf & Trin | Share" },
    { name: "description", content: "Share Alf & Trin's love story" },
  ];
};

export default function Share() {
  const shareUrl = "https://alfandtrin.love";
  const shareText = "Check out Alf & Trin's epic love story! 💕";

  const handleShare = (platform: string) => {
    const urls = {
      instagram: `instagram://share?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`,
    };

    if (platform === "instagram") {
      // Fallback for desktop or if Instagram app is not installed
      window.open("https://instagram.com", "_blank");
    } else {
      window.open(urls[platform as keyof typeof urls], "_blank");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-12"
      style={{
        backgroundImage: `url(${wood})`,
        backgroundRepeat: "repeat",
        backgroundSize: "20%",
      }}
    >
      <div className="max-w-2xl w-full mx-auto px-4">
        <div className="bg-[#f4d03f] bg-opacity-90 rounded-lg p-8 shadow-lg border-4 border-[#8b4513]">
          <h1 className="text-4xl font-bold text-[#8b4513] mb-6 text-center">
            Spread the Love! 📜
          </h1>

          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <img
                src={nick}
                alt="Nick from Monkey Island"
                className="w-48 h-48 object-cover rounded-lg border-4 border-[#8b4513] shadow-lg transform -rotate-3"
              />
            </div>
            <p className="text-[#8b4513] text-lg text-center">
              Ahoy! Help us share our tale of love across the seven seas!
            </p>

            <div className="bg-[#deb887] p-6 rounded-lg border-2 border-[#8b4513]">
              <h2 className="text-2xl font-bold text-[#8b4513] mb-4">
                Choose Your Message Bottle
              </h2>

              <div className="grid gap-4">
                <button
                  onClick={() => handleShare("instagram")}
                  className="bg-[#cd853f] hover:bg-[#8b4513] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  📸 Share on Instagram
                </button>

                <button
                  onClick={() => handleShare("facebook")}
                  className="bg-[#cd853f] hover:bg-[#8b4513] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  📘 Share on Facebook
                </button>

                <button
                  onClick={() => handleShare("whatsapp")}
                  className="bg-[#cd853f] hover:bg-[#8b4513] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  💬 Share on WhatsApp
                </button>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/"
                className="inline-block text-[#8b4513] hover:text-[#cd853f] font-bold text-lg"
              >
                ← Return to the Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
