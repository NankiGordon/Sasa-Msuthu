import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import VacanciesPage from "./Pages/VacanciesPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="root">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
