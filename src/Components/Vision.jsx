import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, Hand } from "lucide-react";

const cards = [
  {
    title: "Our Vision",
    text: "To establish India as a global leader in AI innovation, pioneering autonomous, intelligent systems that revolutionize the way industries operate.",
    color: "yellow",
    icon: <Lightbulb className="w-14 h-14 sm:w-16 sm:h-16 text-yellow-400" />,
  },
  {
    title: "Our Mission",
    text: "To develop AI solutions that empower businesses with real-time insights, automated decision-making, & seamless digital transformation in an era of security.",
    color: "green",
    icon: <Target className="w-14 h-14 sm:w-16 sm:h-16 text-green-500" />,
  },
  {
    title: "Our Values",
    text: "We develop cutting-edge AI ecosystems for retail, security, and enterprise automation, reducing human dependency while enhancing efficiency.",
    color: "blue",
    icon: <Hand className="w-14 h-14 sm:w-16 sm:h-16 text-blue-500" />,
  },
];

function Vision() {
  const [index, setIndex] = useState(0);

  const handleSwipe = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="flex items-center justify-center h-screen px-4 sm:px-6 md:px-8 bg-white relative overflow-hidden">
      {cards.map((card, i) => {
        const isActive = i === index;
        const isRight = (i - 1 + cards.length) % cards.length === index;

        return (
          <motion.div
            key={i}
            className={`absolute w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6 sm:p-8 bg-gray-100 shadow-xl rounded-2xl text-center transition-all duration-500 ${
              isActive ? "z-20 scale-100" : "z-10 scale-90 blur-sm"
            }`}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: isActive ? 0 : isRight ? 100 : -100, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold relative inline-block">
              {card.title}
              <span
                className={`absolute left-1/2 bottom-0 w-12 sm:w-16 h-1 ${
                  card.color === "yellow"
                    ? "bg-yellow-400"
                    : card.color === "green"
                    ? "bg-green-400"
                    : "bg-blue-400"
                } -translate-x-1/2`}
              />
            </h2>
            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">{card.text}</p>
            <motion.div
              className="flex justify-center mt-4 sm:mt-6"
              animate={{ scale: isActive ? [1, 1.1, 1] : 1 }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {card.icon}
            </motion.div>
            <button
              className={`mt-5 sm:mt-6 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md text-white text-sm sm:text-base ${
                card.color === "yellow"
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : card.color === "green"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={handleSwipe}
            >
              SWIPE &gt;&gt;&gt;
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Vision;
