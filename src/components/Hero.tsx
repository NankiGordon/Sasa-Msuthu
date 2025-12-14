import { FaArrowRight } from "react-icons/fa";
import image1 from "../assets/images/image001.webp";
import image2 from "../assets/images/image003.webp";
import image3 from "../assets/images/image002.webp";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Slide data
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

// Fade variants (NO movement)
const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1); // kept for future use

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setSlideIndex((prev) => (prev + 1) % heroData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroData[slideIndex];

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence custom={direction}>
        <motion.div
          key={slideIndex}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 1.4,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center px-4 md:px-32"
          style={{
            backgroundImage: `url(${currentSlide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-950 opacity-30" />

          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="flex flex-col items-center md:items-start md:ml-32 gap-10 max-w-4xl">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl 
                           font-bold text-white leading-tight text-center md:text-left"
              >
                {currentSlide.text}
              </motion.h1>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                <Link
                  to={currentSlide.ctaLink}
                  className="inline-flex items-center justify-between gap-16 
                             p-12 sm:p-14 md:p-16 lg:p-20 
                             rounded-full text-white text-2xl md:text-3xl"
                >
                  <span className="font-bold text-2xl md:text-3xl lg:text-4xl">
                    {currentSlide.ctaText}
                  </span>
                  <span
                    className="bg-orange-300 p-8 sm:p-9 md:p-10 lg:p-11 
                               flex items-center justify-center 
                               text-white rounded-full text-2xl md:text-3xl"
                  >
                    <FaArrowRight />
                  </span>
                </Link>
              </motion.div>

              {/* Dots */}
              <div className="flex gap-3 mt-12 justify-center md:justify-start">
                {heroData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > slideIndex ? 1 : -1);
                      setSlideIndex(index);
                    }}
                    className={`w-4 h-4 rounded-full transition-colors duration-300
                      ${
                        index === slideIndex
                          ? "bg-orange-300"
                          : "bg-gray-400 hover:bg-white"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
