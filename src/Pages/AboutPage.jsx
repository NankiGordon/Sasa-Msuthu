import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutPage.css";

// Swiper imports (v9+)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function About() {
  // Safety slides with corresponding text
  const safetySlides = [
    {
      img: "https://picsum.photos/500/300?random=1",
      title: "Safety First",
      description:
        "Safety is our top priority. All operations are performed with strict safety standards to protect our employees and environment.",
    },
    {
      img: "https://picsum.photos/500/300?random=2",
      title: "Continuous Training",
      description:
        "Continuous training and monitoring ensure a culture of safety throughout the organization.",
    },
    {
      img: "https://picsum.photos/500/300?random=3",
      title: "Equipment Safety",
      description:
        "All equipment is regularly inspected and maintained to prevent accidents and ensure operational safety.",
    },
  ];

  const [activeSafetyIndex, setActiveSafetyIndex] = useState(0);

  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>About Our Mining Company</h1>
          <p>Leading the mining industry with safety, sustainability, and innovation.</p>
          <img
            src="https://picsum.photos/1600/500?random=10"
            alt="Hero mining"
            className="hero-image"
          />
        </motion.div>
      </section>

      {/* Company History */}
      <section className="about-section history">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our History
        </motion.h2>
        <motion.div
          className="history-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="history-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="history-images">
            <img src="https://picsum.photos/400/250?random=11" alt="Mining history 1" />
            <img src="https://picsum.photos/400/250?random=12" alt="Mining history 2" />
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section mission-vision">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Mission & Vision
        </motion.h2>
        <motion.div
          className="mv-cards"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card">
            <img src="https://picsum.photos/150/150?random=13" alt="Mission" />
            <h3>Mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Driving sustainable mining worldwide.</p>
          </div>
          <div className="card">
            <img src="https://picsum.photos/150/150?random=14" alt="Vision" />
            <h3>Vision</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. To be a global mining leader.</p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="about-section values">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Values
        </motion.h2>
        <motion.div
          className="values-cards"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card">
            <span className="icon">💎</span>
            <h3>Integrity</h3>
            <p>Upholding honesty and transparency in all operations.</p>
          </div>
          <div className="card">
            <span className="icon">🤝</span>
            <h3>Collaboration</h3>
            <p>Working together to achieve excellence in mining.</p>
          </div>
          <div className="card">
            <span className="icon">🌱</span>
            <h3>Sustainability</h3>
            <p>Commitment to eco-friendly and responsible mining practices.</p>
          </div>
          <div className="card">
            <span className="icon">⚡</span>
            <h3>Innovation</h3>
            <p>Driving growth through technology and innovation.</p>
          </div>
        </motion.div>
      </section>

      {/* Safety Culture */}
      <section className="about-section safety">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Safety Culture
        </motion.h2>

        <motion.div
          className="safety-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Dynamic Safety Text */}
          <div className="safety-text">
            <h3>{safetySlides[activeSafetyIndex].title}</h3>
            <p>{safetySlides[activeSafetyIndex].description}</p>
          </div>

          {/* Auto-playing Swiper Carousel */}
          <div className="safety-carousel">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              onSlideChange={(swiper) => setActiveSafetyIndex(swiper.realIndex)}
            >
              {safetySlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img src={slide.img} alt={slide.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default About;
