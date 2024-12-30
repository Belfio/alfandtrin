import type { MetaFunction } from "@remix-run/node";
import wood from "../assets/img/wood.webp";
import map from "../assets/img/map.png";
import heart from "../assets/img/hearts.png";
import quiz from "../assets/img/quiz.png";
import share from "../assets/img/star.png";
import donate from "../assets/img/money.png";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Alf & Trin | Love story" },
    { name: "description", content: "Alf & Trin | Love story" },
  ];
};

export default function Index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex min-h-screen md:items-center justify-center px-4 py-8 overflow-hidden"
      style={{
        backgroundImage: `url(${wood})`,
        backgroundRepeat: "repeat",
        backgroundSize: "20%",
      }}
    >
      <div className="flex flex-col items-center md:gap-16">
        <nav
          className="flex flex-col w-screen h-screen md:w-[624px] md:h-[732px] mt-12 md:mt-0 relative overflow-hidden"
          style={{
            backgroundImage: `url(${map})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: isMobile ? "140% " : "100% 100%",
            backgroundPosition: isMobile ? "40% 25%" : "50% 0%",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-4 rounded-3xl mt-64 md:mt-56 relative z-10">
            <header className="flex flex-col items-center gap-9">
              <h1 className="leading text-5xl md:text-6xl font-bold text-brown-700 dark:text-gray-100">
                Alf & Trin
              </h1>
            </header>
            <ul className="flex flex-col gap-2">
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <Link
                    className="group flex items-center self-stretch p-2 leading-normal hover:underline"
                    to={href}
                  >
                    <div className="flex items-center justify-center w-[60px] md:w-[100px]">
                      {icon}
                    </div>
                    <span className="text-lg md:text-xl">{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

const resources = [
  {
    href: "/love",
    text: "Love story",
    icon: <img src={heart} alt="heart" className="w-[60px] md:w-[80px]" />,
  },
  {
    href: "/quiz",
    text: "Quiz",
    icon: <img src={quiz} alt="quiz" className="w-[20px] md:w-[26px]" />,
  },
  {
    href: "/share",
    text: "Share",
    icon: <img src={share} alt="share" className="w-[20px] md:w-[26px]" />,
  },
  {
    href: "/donate",
    text: "Donate",
    icon: <img src={donate} alt="donate" className="w-[24px] md:w-[30px]" />,
  },
];
