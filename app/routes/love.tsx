import { Link } from "@remix-run/react";
import pre1 from "~/assets/photo/pre1.jpeg";
import pre2 from "~/assets/photo/pre2.jpeg";
import stoch from "~/assets/photo/stoch.jpeg";
import sard2 from "~/assets/photo/sard2.jpeg";
import lakedist from "~/assets/photo/lakedist.jpeg";
import cornw from "~/assets/photo/cornw.jpeg";
import moto from "~/assets/photo/moto.jpeg";
import naples from "~/assets/photo/naples.jpeg";
import venic from "~/assets/photo/venic.jpeg";
import ski from "~/assets/photo/ski.jpeg";
import sard11 from "~/assets/photo/sard11.jpeg";
import thai from "~/assets/photo/thai.jpeg";
import jap4 from "~/assets/photo/jap4.jpeg";
import alf from "~/assets/photo/alf.png";
import pingpong from "~/assets/photo/pingpong.jpeg";
export default function Love() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-4 md:p-12">
      <Link to="/" className="flex flex-col items-center text-gray-200">
        <h1 className="text-center text-4xl md:text-6xl font-bold font-[solid]">
          Love Story
        </h1>
        <div className="text-center text-xl md:text-2xl font-bold mt-2">
          Alf & Trin
        </div>
      </Link>
      {story.map((s) => (
        <div
          key={s.title}
          className="flex flex-col items-center margin-auto py-12 md:py-24"
        >
          <div className="text-center text-xl md:text-2xl font-[solid]">
            {s.title}
          </div>
          <p className="text-center text-2xl py-4 px-4 max-w-[400px]">
            {s.description}
          </p>
          <div className="w-full max-w-[400px] px-4 my-4 md:my-8 justify-center text-center">
            <div className="relative w-full pb-[75%]">
              <div className="absolute inset-0 flex items-center justify-center">
                {s.photo}
              </div>
            </div>
            <p className="text-center text-gray-400 mt-2 italic text-xs font-[solid]">
              {s.caption}
            </p>
          </div>
        </div>
      ))}
      <div className="flex justify-center pb-12 md:pb-24">
        <Link to="/quiz">
          <button className="bg-orange-900 text-white px-6 py-4 rounded-lg shadow-xl m-auto text-lg md:text-xl hover:bg-orange-800 transition-colors">
            Start the quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

const story = [
  {
    title: "Once upon a time",
    description:
      "There was a young girl named Trin. She was a beautiful girl with a heart of gold. One day in September 2019 she met a guy.",
    photo: (
      <img
        src={pre1}
        alt="Alf & Trin"
        className="rounded-lg shadow-xl m-auto w-48"
      />
    ),
  },
  {
    title: "The boy",
    description:
      "The guy was a good guy. He was a good listener and a good sport.",
    photo: (
      <img
        src={alf}
        alt="Alf & Trin"
        className="rounded-lg shadow-xl m-auto w-48"
      />
    ),
  },
  {
    title: "The Fateful Meeting",
    description:
      "In a cozy German pub, fate brought Alf and Trin together. The night ended with a romantic kiss at the overground station, marking the beginning of their beautiful journey together.",
    photo: <></>,
  },
  {
    title: "Ping Pong Champion",
    description:
      "After months apart, they met again for Alf's birthday. The celebration featured a lively ping-pong tournament where Trin, wearing her iconic Pepsi jumper, showcased her skills. It was here that her endearing nickname 'Little Egg' was born.",
    photo: (
      <img
        src={pingpong}
        alt="Birthday celebrations"
        className="rounded-lg shadow-xl"
      />
    ),
    caption: "January 2020 - McEnroe against Agassi",
  },
  {
    title: "Stockholm Escape",
    description:
      "Their first secret love trip took them to Stockholm, where they explored the city's beauty together, creating memories that would last a lifetime.",
    photo: (
      <img
        src={stoch}
        alt="Stockholm adventures"
        className="rounded-lg shadow-xl"
      />
    ),
    caption: "February 2020 - When they thought they were being sneaky",
  },
  {
    title: "Lockdown Lovebirds",
    description:
      "During the COVID lockdown, their Camden house flat became their sanctuary. While Alf worked from home, Trin started an innovative business breeding hens to generate electricity. Her 'Hen Power' startup may not have taken off, but their shared meals, movie nights, and deep conversations strengthened their bond in unexpected ways.",
    photo: (
      <img
        src={pre2}
        alt="Lockdown memories"
        className="rounded-lg shadow-xl"
      />
    ),
    caption:
      "March 2020 - Trin's revolutionary but short-lived hen-powered electricity venture",
  },
  {
    title: "Diving into Love",
    description:
      "Their first trip to Sardinia marked a special milestone. Days were filled with diving adventures and boat rides, as Alf introduced Trin to his close ones.",
    photo: (
      <img
        src={sard2}
        alt="First Sardinia trip"
        className="rounded-lg shadow-xl"
      />
    ),
    caption: "July 2020 - Trin's friends approved ",
  },
  {
    title: "Lake District Love-In",
    description:
      "In the Lake District, their friend groups came together for the first time. Hiking, laughter, and fireside stories created bonds that would last forever.",
    photo: (
      <img
        src={lakedist}
        alt="Lake District memories"
        className="rounded-lg shadow-xl"
      />
    ),
    caption: "May 2021 - When their friends finally met",
  },
  {
    title: "Cornish Roots",
    description:
      "Visiting Cornwall, Trin's birthplace, they explored her childhood memories together, discovering the beauty of the coastline and sharing precious moments.",
    photo: (
      <img src={cornw} alt="Cornwall visit" className="rounded-lg shadow-xl" />
    ),
    caption: "July 2021 - Smug face",
  },
  {
    title: "Two Wheels, One Love",
    description:
      "Their motorbike adventure in Sardinia, despite a minor accident, proved their resilience and strengthened their bond through teamwork and care.",
    photo: (
      <img
        src={moto}
        alt="Motorbike adventures"
        className="rounded-lg shadow-xl"
      />
    ),
    caption: "August 2021 - Cooooooooool",
  },
  {
    title: "Pizza, Pasta, and Love",
    description:
      "Naples welcomed them with its vibrant streets, incredible food, and rich culture, creating unforgettable memories with friends.",
    photo: (
      <img
        src={naples}
        alt="Naples exploration"
        className="rounded-lg shadow-xl"
      />
    ),
    caption: "October 2021",
  },
  {
    title: "Venetian Wanderlust",
    description:
      "Venice's romantic canals became the perfect backdrop for their first love trip of 2022, where they strolled hand in hand through the magical city.",
    photo: (
      <img src={venic} alt="Venice romance" className="rounded-lg shadow-xl" />
    ),
    caption: "January 2022 - Getting lost in Venice - AND IN EACH OTHER's EYES",
  },
  {
    title: "Blizzard",
    description:
      "Alf introduced Trin to the world of winter sports, where she started her transformation into the unstoppable Blizzard. Her fearless nature and determination on the slopes earned her this legendary nickname.",
    photo: (
      <img src={ski} alt="Ski adventures" className="rounded-lg shadow-xl" />
    ),
    caption: "February 2022 - Trin mastered skiing",
  },
  {
    title: "Mediterranean Paradise",
    description:
      "Sardinia became their summer haven, filled with countless sunsets, swims, and moments of pure joy together.",
    photo: (
      <img
        src={sard11}
        alt="Sardinian summer"
        className="rounded-lg shadow-xl"
      />
    ),
    caption: "Summer 2022 - Bottarga",
  },
  {
    title: "Eastern Escapades",
    description:
      "Their adventurous spirits led them across Asia, exploring Vietnam, Thailand, and Japan. From bustling markets to serene temples, every moment added to their growing story.",
    photo: (
      <img src={thai} alt="Asian adventures" className="rounded-lg shadow-xl" />
    ),
    caption: "2023 - Too much fun",
  },
  {
    title: "Adventure Awaits",
    description:
      "Now deeply in love, Alf and Trin look toward their future together. Their journey continues, filled with shared dreams of adventure, laughter, and building a life that celebrates their unique bond.",
    photo: (
      <img
        src={jap4}
        alt="Recent adventures"
        className="rounded-lg shadow-xl"
      />
    ),
    caption: "Continues...",
  },
];
