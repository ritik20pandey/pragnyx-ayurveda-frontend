import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  ShieldCheck,
  Heart,
} from "lucide-react";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-background"></div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Small Label */}
          <div className="hero-label">
            <Leaf size={16} />
            <span>WELCOME TO PRAGNYX AYURVEDA</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Rediscover the
            <br />
            Art of <span>Natural</span>
            <br />
            Healing.
          </h1>

          {/* Description */}
          <p className="hero-description">
            Experience the timeless wisdom of Ayurveda through personalized
            wellness, traditional therapies and compassionate care. Your journey
            towards a balanced life begins here.
          </p>

          {/* Buttons */}
          <div className="hero-actions">
            <Link to="/appointment" className="hero-primary-btn">
              Book Your Consultation
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/services" className="hero-secondary-btn">
              Explore Treatments
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">
                <Leaf size={18} />
              </span>
              <span>Natural Wellness</span>
            </div>

            <div className="trust-item">
              <span className="trust-icon">
                <ShieldCheck size={18} />
              </span>
              <span>Personalized Care</span>
            </div>

            <div className="trust-item">
              <span className="trust-icon">
                <Heart size={18} />
              </span>
              <span>Holistic Approach</span>
            </div>
          </div>
        </div>

        {/* Right Side Decorative Badge */}
        <div className="hero-side-badge">
          <div className="badge-circle">
            <Leaf size={27} />
          </div>

          <span>WELLNESS</span>
          <span>BEGINS WITHIN</span>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hero-scroll">
        <span></span>
        <p>SCROLL TO DISCOVER</p>
      </div>
    </section>
  );
}

export default Hero;
