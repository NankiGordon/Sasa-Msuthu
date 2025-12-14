import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutPage.css";
import coal from "../assets/images/image004.webp";
import image001 from "../assets/images/image005.webp";
import image002 from "../assets/images/image006.webp";
import image003 from "../assets/images/image007.webp";
import image004 from "../assets/images/image008.webp";
import image005 from "../assets/images/image009.webp";

// Swiper imports (v9+)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function About() {
  const [activeSafetyIndex, setActiveSafetyIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  // History images
  const historyImages = [
    { src: image001, alt: "Mining operations 1" },
    { src: image002, alt: "Mining operations 2" },
  ];

  // Safety slides
  const safetySlides = [
    {
      img: image003,
      title: "Operational Awareness",
      description:
        "Every operator, from ADT drivers to dozer pilots, is trained to anticipate risks before they arise.",
    },
    {
      img: image004,
      title: "Continuous Training",
      description:
        "Regular workshops, scenario drills, and skill refreshers ensure our teams remain alert, competent, and ready for any challenge.",
    },
    {
      img: image005,
      title: "Equipment Excellence",
      description:
        "Machines are rigorously inspected and maintained to guarantee reliability and operational safety.",
    },
  ];

  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${coal})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>Sasa Msuthu’s Uitkyk Mine</h1>
          <p>
            A modern open-cast coal mining operation in Nkangala, Mpumalanga,
            blending technology, efficiency, and safety.
          </p>
        </motion.div>
      </section>

      {/* About Us */}
      <section className="about-section history">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.div
          className="history-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="history-text">
            <p>
              Nestled just outside Middleburg, Mpumalanga, Uitkyk Mine is a
              purpose-built, modern open-cast coal operation. From the roar of
              ADTs hauling coal to the precision of excavators and dozers
              shaping the landscape, every corner reflects a blend of advanced
              technology and hands-on expertise.
            </p>
            <p>
              Although a new operation, our ambition is clear: to set the
              benchmark in productivity, safety, and environmental stewardship,
              while delivering value to our community and stakeholders.
            </p>
          </div>
          <div className="history-images">
            {historyImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{ cursor: "pointer" }}
                onClick={() => setModalImage(img.src)}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modal for history images */}
      {modalImage && (
        <div
          className="modal-overlay"
          onClick={() => setModalImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "10px",
          }}
        >
          <img
            src={modalImage}
            alt="Enlarged"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              objectFit: "contain",
            }}
          />
        </div>
      )}

      {/* Our Compass */}
      <section className="about-section mission-vision">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Compass
        </motion.h2>
        <motion.div
          className="mv-cards"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card">
            <h3>Purpose in Action</h3>
            <p>
              We deliver coal efficiently and responsibly, powering industries
              and livelihoods without compromise.
            </p>
          </div>
          <div className="card">
            <h3>Pioneering Spirit</h3>
            <p>
              Every operation is an opportunity to innovate, refining methods
              and leveraging technology to enhance safety and efficiency.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="about-section values">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Core Values
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
            <p>
              From boardroom to pit, honesty and accountability guide every
              action.
            </p>
          </div>
          <div className="card">
            <span className="icon">🤝</span>
            <h3>Collaboration</h3>
            <p>
              Success is achieved when teams, operators, and engineers work
              seamlessly together.
            </p>
          </div>
          <div className="card">
            <span className="icon">🌱</span>
            <h3>Sustainability</h3>
            <p>
              Commitment to environmentally responsible and eco-friendly mining
              practices.
            </p>
          </div>
          <div className="card">
            <span className="icon">⚡</span>
            <h3>Innovation</h3>
            <p>
              Modern solutions and technology continuously improve operations
              and outcomes.
            </p>
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
                  <div className="slide-image-wrapper">
                    <img src={slide.img} alt={slide.title} loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
