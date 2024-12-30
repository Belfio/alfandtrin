import type { MetaFunction } from "@remix-run/node";
import wood from "../assets/img/wood.webp";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Alf & Trin | Donate" },
    { name: "description", content: "Help Trinity get some shoes!" },
  ];
};

export default function Donate() {
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
            A Quest for Trinity's Feet! 👠
          </h1>

          <div className="space-y-6">
            <p className="text-[#8b4513] text-lg text-center">
              Ahoy there, generous soul! Our beloved Trinity is in dire need of
              new shoes for her adventures!
            </p>

            <div className="bg-[#deb887] p-6 rounded-lg border-2 border-[#8b4513]">
              <div className="flex flex-col items-center">
                <button
                  className="bg-[#cd853f] hover:bg-[#8b4513] text-white text-xl font-bold py-6 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:rotate-1 shadow-lg"
                  onClick={() =>
                    window.open(
                      "https://buy.stripe.com/test_28o29z0Sx3Ht1Gg144",
                      "_blank"
                    )
                  }
                >
                  🥾 Donate Trinity Some Shoes! 👢
                </button>
                <p className="mt-4 text-[#8b4513] text-sm italic">
                  (She really needs them!)
                </p>
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
