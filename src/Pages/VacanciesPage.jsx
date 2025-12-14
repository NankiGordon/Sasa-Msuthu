import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./VacanciesPage.css";

function Vacancies() {
  const [selectedPdf, setSelectedPdf] = useState(null); // state to store selected PDF

  // Demo placeholder vacancies with PDF links
  const vacancies = [
    {
      title: "Mining Engineer",
      location: "Johannesburg, South Africa",
      type: "Full-Time",
      closingDate: "09 Jan 2026",
      pdf: "/pdf/vacancy01.pdf"
  
,
    }
  ];

  return (
    <div className="vacancies-page">
      <Navbar />

      <section className="vacancies-hero">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="vacancies-hero-content"
        >
          <h1>Current Vacancies</h1>
          <p>Join our team and be part of a leading mining company.</p>
        </motion.div>
      </section>

      <section className="vacancies-list">
        {vacancies.map((vacancy, index) => (
          <motion.div
            className="vacancy-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="vacancy-icon">📌</div>
            <div className="vacancy-details">
              <h3>{vacancy.title}</h3>
              <p><strong>Location:</strong> {vacancy.location}</p>
              <p><strong>Type:</strong> {vacancy.type}</p>
              <p><strong>Closing Date:</strong> {vacancy.closingDate}</p>
            </div>
            <button
              className="vacancy-button"
              onClick={() => setSelectedPdf(vacancy.pdf)}
            >
              View Details
            </button>
          </motion.div>
        ))}
      </section>

      {/* Modal for PDF */}
      {selectedPdf && (
        <div className="pdf-modal">
          <div className="pdf-modal-content">
            <button
              className="pdf-modal-close"
              onClick={() => setSelectedPdf(null)}
            >
              &times;
            </button>
            <iframe
              src={selectedPdf}
              title="Vacancy PDF"
              width="100%"
              height="600px"
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
}

export default Vacancies;
