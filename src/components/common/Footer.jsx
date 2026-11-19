import { ArrowUpRight, Leaf, MapPin, Phone, Mail, Clock3 } from "lucide-react";
import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main">
          {/* Brand Information */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">
                <Leaf size={25} />
              </span>

              <span>
                <strong>PragnyX</strong>
                <small>AYURVEDA & WELLNESS</small>
              </span>
            </Link>

            <p className="footer-description">
              Bringing together traditional Ayurvedic wisdom and a thoughtful
              approach to holistic wellness. Discover a peaceful path towards
              better wellbeing.
            </p>

            <div className="footer-brand-note">
              <Leaf size={16} />
              <span>Traditional Wisdom. Holistic Wellness.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Treatments</Link>
              </li>
              <li>
                <Link to="/doctors">Our Doctors</Link>
              </li>
              <li>
                <Link to="/appointment">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-column">
            <h3>Our Treatments</h3>

            <ul>
              <li>
                <Link to="/services">Panchakarma</Link>
              </li>
              <li>
                <Link to="/services">Abhyanga</Link>
              </li>
              <li>
                <Link to="/services">Shirodhara</Link>
              </li>
              <li>
                <Link to="/services">Ayurvedic Consultation</Link>
              </li>
              <li>
                <Link to="/services">Yoga & Wellness</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <MapPin size={17} />
              </span>

              <p>Explore our hospital and wellness facilities.</p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <Phone size={17} />
              </span>

              <p>For appointment enquiries, use our booking page.</p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <Mail size={17} />
              </span>

              <p>Contact details will be updated soon.</p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <Clock3 size={17} />
              </span>

              <p>Consultation timings will be announced soon.</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="footer-cta">
          <div>
            <h3>Begin Your Wellness Journey</h3>
            <p>Take a thoughtful step towards holistic wellbeing.</p>
          </div>

          <Link to="/appointment" className="footer-cta-link">
            Book Appointment
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} PragnyX Ayurveda. All rights reserved.
          </p>

          <p className="footer-bottom-credit">
            Designed with care for your wellbeing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
