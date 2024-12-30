import { useState } from "react";
import pre1 from "~/assets/photo/pre1.jpeg";
import pingpong from "~/assets/photo/pingpong.jpeg";
import stoch from "~/assets/photo/stoch.jpeg";
import pre2 from "~/assets/photo/pre2.jpeg";
import sard2 from "~/assets/photo/sard2.jpeg";
import sard4 from "~/assets/photo/sard4.jpeg";
import ski from "~/assets/photo/ski.jpeg";
import cornw from "~/assets/photo/cornw.jpeg";
import lakedist from "~/assets/photo/lakedist.jpeg";
import venic from "~/assets/photo/venic.jpeg";
import jap4 from "~/assets/photo/jap4.jpeg";
import moto from "~/assets/photo/moto.jpeg";
import naples from "~/assets/photo/naples.jpeg";
import thai from "~/assets/photo/thai.jpeg";
import masks from "~/assets/photo/masks.jpeg";
import sard from "~/assets/photo/sard.jpeg";
import climbing from "~/assets/photo/climbing.jpeg";
import board from "~/assets/img/board.png";
import { Link } from "@remix-run/react";
import patt from "~/assets/img/pattern3.png";
const quizQuestions = [
  {
    question: "Where did Alf and Trin first meet?",
    options: ["Italian Restaurant", "German Pub", "English Bar", "French Cafe"],
    correctAnswer: "German Pub",
    image: pre1,
  },
  {
    question: "What happened at the end of their first meeting?",
    options: [
      "They went dancing",
      "They shared a meal",
      "A kiss at the overground station",
      "They exchanged phone numbers",
    ],
    correctAnswer: "A kiss at the overground station",
    image: masks,
  },
  {
    question: "When did they celebrate Alf's birthday with ping pong?",
    options: ["December 2019", "January 2020", "February 2020", "March 2020"],
    correctAnswer: "January 2020",
    image: pingpong,
  },
  {
    question: "What was Trin wearing during the ping pong tournament?",
    options: ["Nike jumper", "Adidas jacket", "Pepsi jumper", "Sports uniform"],
    correctAnswer: "Pepsi jumper",
    image: pingpong,
  },
  {
    question: "What nickname did Trin earn during Alf's birthday celebration?",
    options: ["Tennis Pro", "Champion", "Little Egg", "Ping Pong Queen"],
    correctAnswer: "Little Egg",
    image: pingpong,
  },
  {
    question: "What was their first secret love trip destination?",
    options: ["Venice", "Naples", "Stockholm", "Cornwall"],
    correctAnswer: "Stockholm",
    image: stoch,
  },
  {
    question: "When did they take their Stockholm trip?",
    options: ["January 2020", "February 2020", "March 2020", "April 2020"],
    correctAnswer: "February 2020",
    image: stoch,
  },
  {
    question: "What unique business did Trin try to start during lockdown?",
    options: [
      "Online Bakery",
      "Virtual Fitness Classes",
      "Hen-powered Electricity",
      "Home Gardening",
    ],
    correctAnswer: "Hen-powered Electricity",
    image: pre2,
  },
  {
    question: "Where did they spend lockdown together?",
    options: [
      "Brighton flat",
      "Camden house flat",
      "London apartment",
      "Cornwall house",
    ],
    correctAnswer: "Camden house flat",
    image: pre2,
  },
  {
    question: "What was their first trip to Sardinia significant for?",
    options: [
      "Learning to cook",
      "Meeting Alf's close ones",
      "Starting a business",
      "Learning Italian",
    ],
    correctAnswer: "Meeting Alf's close ones",
    image: sard2,
  },
  {
    question: "When did they make their first Sardinia trip?",
    options: ["June 2020", "July 2020", "August 2020", "September 2020"],
    correctAnswer: "July 2020",
    image: sard4,
  },
  {
    question: "What activities did they do in Sardinia?",
    options: [
      "Hiking and camping",
      "Diving and boat rides",
      "Shopping and dining",
      "Mountain climbing",
    ],
    correctAnswer: "Diving and boat rides",
    image: sard,
  },
  {
    question: "What nickname did Trin earn on the ski slopes?",
    options: ["Snow Queen", "Blizzard", "Ice Princess", "Mountain Star"],
    correctAnswer: "Blizzard",
    image: ski,
  },
  {
    question: "Where was Trin born?",
    options: ["London", "Stockholm", "Cornwall", "Sardinia"],
    correctAnswer: "Cornwall",
    image: cornw,
  },
  {
    question: "What activities did they do in the Lake District?",
    options: [
      "Swimming and sunbathing",
      "Shopping and dining",
      "Hiking and fireside stories",
      "Skiing and snowboarding",
    ],
    correctAnswer: "Hiking and fireside stories",
    image: climbing,
  },
  {
    question: "In which year did they visit Venice together?",
    options: ["2020", "2021", "2022", "2023"],
    correctAnswer: "2022",
    image: venic,
  },
  {
    question: "Which Asian countries did they explore together?",
    options: [
      "China, Korea, Japan",
      "Vietnam, Thailand, Japan",
      "Thailand, Malaysia, Singapore",
      "Japan, Korea, Taiwan",
    ],
    correctAnswer: "Vietnam, Thailand, Japan",
    image: thai,
  },
  {
    question: "Where did they experience a motorbike adventure together?",
    options: ["Naples", "Cornwall", "Sardinia", "Lake District"],
    correctAnswer: "Sardinia",
    image: moto,
  },
  {
    question: "When did they visit Naples?",
    options: ["August 2021", "September 2021", "October 2021", "November 2021"],
    correctAnswer: "October 2021",
    image: naples,
  },
  {
    question: "Where did their friend groups meet for the first time?",
    options: ["Cornwall", "Lake District", "Stockholm", "Sardinia"],
    correctAnswer: "Lake District",
    image: lakedist,
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    // Check if the answer is correct before moving to next question
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer("");
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-gray-100"
        style={{
          backgroundImage: `url(${patt})`,
          backgroundRepeat: "repeat",
          backgroundSize: "20%",
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6">
            Quiz Complete!
          </h2>
          <p className="text-xl text-center">
            Your score: {score} out of {quizQuestions.length}
          </p>
          <p className="text-center mt-4">
            ({Math.round((score / quizQuestions.length) * 100)}%)
          </p>
          <img
            src={jap4}
            alt="Final celebration"
            className="mt-6 rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-cover bg-center p-4 bg-gray-900 w-full">
      <Link to="/">
        <h1 className="text-white font-[solid] text-4xl font-bold py-8">
          Alf &amp; Trin&apos;s Love Story Quiz
        </h1>
      </Link>
      <div className="flex items-center justify-center w-full">
        <div
          className="rounded-lg max-w-[800px] w-full justify-center items-center flex "
          style={{
            backgroundImage: `url(${board})`,
            backgroundRepeat: "cover",
            backgroundSize: "100%",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-[rgba(230,205,140,1)]  px-4 md:mt-[280px] w-[384px] py-6  ">
            <div className="mb-0 w-full">
              <p className="text-md text-gray-500 mb-2">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>
              <div className="mb-4">
                <img
                  src={quizQuestions[currentQuestion].image}
                  alt={`Question ${currentQuestion + 1}`}
                  className="w-full h-24 object-contain rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold m-auto text-center">
                {quizQuestions[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-2 mb-0 ">
              {quizQuestions[currentQuestion].options.map((option) => (
                <label
                  key={option}
                  className="flex items-center p-2 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelect(option)}
                    className="mr-3"
                  />
                  <span className="font-[solid] text-xs md:text-sm">
                    {option}
                  </span>
                </label>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`px-4 text-white py-2 rounded  ${
                  !selectedAnswer
                    ? "bg-orange-950 cursor-not-allowed"
                    : "bg-orange-950 hover:bg-orange-900 text-white"
                }`}
              >
                {currentQuestion === quizQuestions.length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
