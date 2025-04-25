import "./Footer.css";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul>
                <li>contact@resolv.com</li>
                <li>+977 987654321</li>
                <li>Libali, Bhaktapur-08</li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Resolv. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;