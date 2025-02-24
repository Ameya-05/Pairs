import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../images/about.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const words = paragraphRef.current.innerText.split(" ");
      paragraphRef.current.innerHTML = words
        .map((word) => `<span class="opacity-30 text-gray-400">${word}</span>`)
        .join(" ");

      gsap.to(paragraphRef.current.children, {
        color: "#ffffff", 
        opacity: 1, 
        stagger: {
          each: 0.05,
          from: "start",
        },
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1, 
        },
      });
    }
  }, []);

  return (
    <>
      <div id="about" className="flex flex-col  items-center justify-center">
        <h1 className="text-4xl text-white font-bold">About Us</h1>
      </div>
      <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-8 px-12 pb-8">
        <p
          ref={paragraphRef}
          className="text-justify font-lobster italic text-xl text-gray-400 text-medium leading-relaxed md:w-1/2"
        >
          At Pandit AI Research & Innovative Solutions (P.A.I.R.S), we are on a
          mission to redefine industries through cutting-edge AI-driven
          solutions. Founded by Gaurav Pandit, a visionary AI engineer and
          entrepreneur, P.A.I.R.S. is dedicated to creating transformative,
          human-less AI ecosystems that enhance efficiency, productivity, and
          decision-making across various domains.
          <br />
          <br />
          Our flagship innovation, Dr. ASTAN (Advanced Shopper Tracking and
          Analysis Network), has been recognized among the top 600 ideas at IIT
          Bombay's Eureka event, showcasing our commitment to groundbreaking AI
          research. From AI-powered retail analytics and inventory management to
          theft detection and employee performance tracking, P.A.I.R.S. is
          shaping the future of automation.
        </p>
        <img src={about} alt="About P.A.I.R.S" className="w-full md:w-1/2 h-auto pb-10" />
      </div>
    </>
  );
};

export default About;
