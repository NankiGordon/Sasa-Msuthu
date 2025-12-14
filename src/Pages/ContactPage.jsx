import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactPage.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // to show success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xrbnjjjy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
        console.error("Formspree response error:", response);
      }
    } catch (error) {
      setStatus("Failed to send message. Try again later.");
      console.error("Formspree error:", error);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="contact-hero-content"
        >
          <h1>Contact Us</h1>
          <p>We are here to help. Reach out to us anytime.</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
            {status && <p className="form-status">{status}</p>}
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Our Information</h2>
            <p>
              <strong>Address:</strong> 123 Mining Rd, Johannesburg, South Africa
            </p>
            <p>
              <strong>Phone:</strong> +27 79 056 3456
            </p>
            <p>
              <strong>Email:</strong> info@miningcompany.co.za
            </p>
            <p>
              <strong>Working Hours:</strong> Mon-Fri 08:00 - 17:00
            </p>
          </div>
        </motion.div>
      </section>


    </div>
  );
}

export default Contact;
