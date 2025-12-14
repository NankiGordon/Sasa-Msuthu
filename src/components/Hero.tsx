import { FaArrowRight } from "react-icons/fa";
import image1 from "../assets/images/image001.webp";
import image2 from "../assets/images/image003.webp";
import image3 from "../assets/images/image002.webp";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Add `ctaText` and `ctaLink` for each slide
const heroData = [
  {
    text: "Our Operation",
    image: image1,
    ctaText: "Learn More",
    ctaLink: "/about",
  },
  {
    text: "Work With Us",
    image: image2,
    ctaText: "Browse Career Opportunities",
    ctaLink: "/vacancies",
  },
  {
    text: "Contact Us",
    image: image3,
    ctaText: "Reach Out Today",
    ctaLink: "/contact",
  },
];

export default function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev < heroData.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroData[slideIndex];

  return (
    <section
      style={{
        backgroundImage: `url(${currentSlide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen flex items-center px-32 relative"
    >
      <div className="absolute inset-0 bg-blue-950 opacity-30"></div>
      <div className="z-10 grid gap-15">
        {/* Slide Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentSlide.text}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-7xl text-white font-bold"
          >
            {currentSlide.text}
          </motion.p>
        </AnimatePresence>

        {/* Slide CTA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex + "-cta"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to={currentSlide.ctaLink}
              className="bg-white inline-flex items-center justify-between gap-10 p-2 rounded-full pl-4"
            >
              <span className="text-xl font-semibold">{currentSlide.ctaText}</span>
              <span className="bg-orange-300 p-4 place-items-center text-white rounded-full">
                <FaArrowRight />
              </span>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2 mt-12">
          {heroData.map((_, index) => (
            <span
              className={`w-3 h-3 rounded-full bg-gray-400 hover:bg-white cursor-pointer ${
                index === slideIndex && "bg-orange-300"
              }`}
              key={index}
              onClick={() => setSlideIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
