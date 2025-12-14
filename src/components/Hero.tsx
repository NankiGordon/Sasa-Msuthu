import { FaArrowRight } from "react-icons/fa";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroData = [
  {
    text: "Upgrade Your Journey",
    image: image1, // 👈 Add the image here
  },
  {
    text: "Drive in Style",
    image: image2,
  },
  {
    text: "Discover Performance",
    image: image3,
  },
];

export default function () {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < heroData.length - 1) {
      setSlideIndex((prevSlide) => prevSlide + 1);
    } else {
      setSlideIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); //cleanup on unmount
  }, [nextSlide]);

  return (
    <section
      style={{
        backgroundImage: `url(${heroData[slideIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen flex items-center px-32 relative"
    >
      <div className="absolute inset-0 bg-blue-950 opacity-30"></div>
      <div className="z-10 grid gap-15">
        <AnimatePresence mode="wait">
          <motion.p
            key={heroData[slideIndex].text} // so it re-animates on slide change
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-7xl text-white font-bold"
          >
            {heroData[slideIndex].text}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex + "-cta"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }} // slight delay after text
          >
            <a
              href="#"
              className="bg-white inline-flex items-center justify-between gap-10 p-2 rounded-full pl-4"
            >
              <span className="text-xl font-semibold">Explore Features</span>
              <span className="bg-teal-600 p-4 place-items-center text-white rounded-full">
                <FaArrowRight />
              </span>
            </a>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-2 mt-12">
          {heroData.map((data, index) => {
            return (
              <span
                className={`w-3 h-3 rounded-full bg-gray-400 hover:bg-white cursor-pointer ${
                  index === slideIndex && "bg-teal-600"
                }`}
                key={index}
                onClick={() => setSlideIndex(index)}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
