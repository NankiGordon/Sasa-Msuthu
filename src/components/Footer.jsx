import { useState } from "react";
import "./Footer.css";

const policies = {
  terms: {
    title: "Terms & Conditions",
    content: `
These Terms & Conditions govern the use of this website and all related services.
By accessing this website, you agree to comply with these terms in full.

Use of this site is intended for lawful purposes only. Any misuse, including
unauthorised access, data scraping, or interference with operations, is strictly prohibited.

All content remains the intellectual property of the website owner unless otherwise stated.
`,
  },

  disclaimer: {
    title: "Disclaimer",
    content: `
Information provided on this website is for general informational purposes only.
While every effort is made to ensure accuracy, no warranties are given regarding
completeness, reliability, or suitability.

The website owner shall not be held liable for any losses or damages arising
from reliance on the information contained herein.
`,
  },

  sitemap: {
    title: "Site Map",
    content: `
This website consists of public informational pages including:
• Home
• About Us
• Careers
• Contact

The site map is provided to assist users in navigating available content
and does not imply guaranteed availability of any specific service.
`,
  },

  paia: {
    title: "PAIA Manual",
    content: `
This PAIA Manual is prepared in accordance with the Promotion of Access to Information Act (PAIA), Act 2 of 2000.

The purpose of PAIA is to promote transparency, accountability, and effective governance
by providing the public with access to information held by private bodies where required.

Requests for information must be made in writing and will be processed in line with statutory requirements.
`,
  },

  cookies: {
    title: "Cookie Policy",
    content: `
This website uses cookies to improve user experience and analyse website performance.

Cookies are small text files stored on your device. You may disable cookies
via your browser settings; however, certain site functionality may be affected.

By continuing to use this website, you consent to the use of cookies.
`,
  },

  privacy: {
    title: "Privacy Policy",
    content: `
We are committed to protecting your personal information in accordance with POPIA.

Personal data collected through this website is used solely for its intended purpose
and is not shared with third parties without consent, unless required by law.

You have the right to access, correct, or request deletion of your personal data.
`,
  },
};

function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const currentYear = new Date().getFullYear();
  const lastUpdated = `December ${currentYear}`;

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <span className="copyright">
            © {currentYear} Website. All rights reserved.
          </span>

          <ul className="footer-links">
            <li>
              <button onClick={() => setActiveModal("terms")}>
                Terms & Conditions
              </button>
            </li>
            <li>
              <button onClick={() => setActiveModal("disclaimer")}>
                Disclaimer
              </button>
            </li>
            <li>
              <button onClick={() => setActiveModal("sitemap")}>
                Site Map
              </button>
            </li>
            <li>
              <button onClick={() => setActiveModal("paia")}>PAIA</button>
            </li>
            <li>
              <button onClick={() => setActiveModal("cookies")}>
                Cookie Policy
              </button>
            </li>
            <li>
              <button onClick={() => setActiveModal("privacy")}>
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{policies[activeModal].title}</h2>
            <p className="modal-date">Last updated: {lastUpdated}</p>
            <p className="modal-content">{policies[activeModal].content}</p>

            <button
              className="modal-close"
              onClick={() => setActiveModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
