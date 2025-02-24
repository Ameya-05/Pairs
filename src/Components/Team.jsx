import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import team1 from "../images/Team-1.jpeg";
import team2 from "../images/Team-2.jpeg";
import team3 from "../images/team3.jpeg";
import team4 from "../images/Team-4.png";
import team5 from "../images/Team-5.jpeg";

const testimonials = [
  {
    image: team1,
    text: "Pairs helps businesses unlock their full potential through innovative optimization solutions. We streamline operations, enhance efficiency, and drive sustainable growth with smart, data-driven strategies.",
    name: "Gaurav Pandit",
    position: "Founder",
    link: "https://www.linkedin.com/in/gauravpandit07/",
  },
  {
    image: team2,
    text: "Driving innovative solutions to help businesses optimize operations, boost efficiency, and achieve sustainable growth through smart, data-driven strategies.",
    name: "Prajwal Nivangune",
    position: "Co-Founder",
    link: "https://www.linkedin.com/in/prajwal-nivangune/",
  },
  {
    image: team5,
    text: "Building scalable, secure, and efficient cloud solutions to help businesses optimize operations and drive seamless growth with cutting-edge technology.",
    name: "Anushka Yeole",
    position: "Cloud Engineer",
    link: "https://www.linkedin.com/in/anushka-yeole-9661bb251/",
  },
  {
    image: team3,
    text: "Crafting intuitive and engaging digital experiences that empower businesses to optimize operations, enhance user satisfaction, and drive seamless growth.",
    name: "Aryan Tikle",
    position: "UI/UX Designer",
    link: "https://www.linkedin.com/in/aryan-tikle-899843250/",
  },
  {
    image: team4,
    text: "Designing and managing efficient, secure, and scalable databases to empower businesses with optimized operations, seamless data flow, and smart growth solutions.",
    name: "Hemani Wankhedkar",
    position: "Database Engineer",
    link: "http://linkedin.com/in/hemxni13/",
  },
];

export default function TeamTestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="team" className="bg-white py-10 text-center px-4 md:px-10 lg:px-20">
      <h1 className="text-[40px] md:text-[50px] lg:text-[55px] font-semibold font-crimson leading-tight">
        Meet the talented team <br />
      </h1>
      <h1 className="text-[30px] md:text-[35px] lg:text-[40px] tracking-normal font-semibold font-crimson -mt-2">
        who make all this a reality
      </h1>

      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.9, x: -50 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-center mt-16 gap-8 md:gap-12 px-4"
      >
        <div className="w-[150px] md:w-[188px] h-[170px] md:h-[213px]">
          <img
            src={testimonials[currentIndex].image}
            className="w-full h-full rounded-lg shadow-lg object-cover"
            alt="Team Member"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-base md:text-lg italic"
          >
            {testimonials[currentIndex].text}
          </motion.p>

          <div className="flex flex-col md:flex-row items-center md:items-start mt-5 gap-3 md:gap-6">
            <p className="font-bold text-lg md:text-xl">{testimonials[currentIndex].name}</p>
            <a
              href={testimonials[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-gray-500 hover:border-blue-600 border-2 px-2 py-2 rounded-full transition-all duration-300"
            >
              <FaLinkedinIn className="text-black group-hover:text-blue-600 transition-all duration-300" />
            </a>
          </div>

          <p className="font-ebgaramond text-gray-500 text-sm md:text-base">
            {testimonials[currentIndex].position}
          </p>
        </div>
      </motion.div>

      {/* Slider Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={prevTestimonial}
          className="mx-2 p-2 bg-transparent rounded-full shadow-md hover:bg-gray-200"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextTestimonial}
          className="mx-2 p-2 bg-transparent rounded-full shadow-md hover:bg-gray-200"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}