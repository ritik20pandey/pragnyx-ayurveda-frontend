import { Link } from "react-router";
import {
  ArrowUpRight,
  Leaf,
  Heart,
  Sprout,
  Sun,
  ShieldCheck,
} from "lucide-react";

import "./About.css";

function About() {
  return (
    <main className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="about-eyebrow">
            <Leaf size={16} />
            OUR STORY & PHILOSOPHY
          </span>

          <h1>
            Discover the Art of
            <span> Natural Healing</span>
          </h1>

          <p>
            Bringing traditional Ayurvedic wisdom and a thoughtful approach to
            holistic wellness together.
          </p>

          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-intro section">
        <div className="container about-intro-grid">
          <div className="about-intro-images">
            <img
              className="about-main-image"
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900"
              alt="Peaceful wellness treatment environment"
            />

            <div className="about-image-note">
              <Leaf size={25} />
              <div>
                <strong>Rooted in Nature</strong>
                <span>Inspired by Ayurveda</span>
              </div>
            </div>
          </div>

          <div className="about-intro-content">
            <span className="about-section-label">ABOUT PRAGNYX AYURVEDA</span>

            <h2>
              A Thoughtful Approach to
              <span> Holistic Wellness</span>
            </h2>

            <p>
              At PragnyX Ayurveda, we believe that wellness involves caring for
              the mind, body, and spirit. Our approach is inspired by the
              traditional principles of Ayurveda and the importance of
              maintaining a balanced lifestyle.
            </p>

            <p>
              We aim to create a welcoming environment where people can explore
              Ayurvedic therapies, wellness practices, and guidance suited to
              their individual needs.
            </p>

            <Link to="/services" className="about-primary-btn">
              Explore Our Services
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose section">
        <div className="container">
          <div className="about-section-heading">
            <span className="about-section-label">WHAT GUIDES US</span>

            <h2>
              Our Purpose & <span>Direction</span>
            </h2>

            <p>
              Guided by traditional wisdom, compassion, and a commitment to
              thoughtful wellness experiences.
            </p>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Heart size={27} />
              </div>

              <span>01 / OUR MISSION</span>

              <h3>Making Wellness Meaningful</h3>

              <p>
                Our mission is to introduce people to the principles of Ayurveda
                through a welcoming environment, thoughtful care, and accessible
                wellness experiences.
              </p>
            </article>

            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Sun size={27} />
              </div>

              <span>02 / OUR VISION</span>

              <h3>A Healthier, Balanced Lifestyle</h3>

              <p>
                Our vision is to encourage a balanced way of living by bringing
                traditional Ayurvedic knowledge and holistic wellness practices
                into everyday life.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Ayurvedic Approach */}
      <section className="about-approach section">
        <div className="container about-approach-grid">
          <div className="about-approach-content">
            <span className="about-section-label">OUR PHILOSOPHY</span>

            <h2>
              Wellness That Respects
              <span> Your Natural Balance</span>
            </h2>

            <p>
              Ayurveda is a traditional system of wellness that emphasizes
              balance, mindful living, and an understanding of individual needs.
            </p>

            <div className="about-values-list">
              <div className="about-value-item">
                <div className="about-value-icon">
                  <Sprout size={22} />
                </div>

                <div>
                  <h4>Natural Wellness</h4>
                  <p>An appreciation for nature-inspired wellness practices.</p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon">
                  <Heart size={22} />
                </div>

                <div>
                  <h4>Individual Attention</h4>
                  <p>
                    Recognizing that every individual's wellness needs are
                    different.
                  </p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h4>Thoughtful Care</h4>
                  <p>Encouraging informed and responsible wellness choices.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-approach-image">
            <img
              src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900"
              alt="Natural oils and wellness ingredients"
            />

            <div className="about-image-caption">
              <Leaf size={20} />
              <span>Inspired by the wisdom of Ayurveda</span>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="about-bottom-cta">
        <div className="container about-bottom-cta-content">
          <div>
            <span>YOUR WELLNESS JOURNEY STARTS HERE</span>

            <h2>
              Take a Step Towards
              <br />a More Balanced Life
            </h2>

            <p>
              Explore our wellness services and discover an approach inspired by
              Ayurveda.
            </p>
          </div>

          <Link to="/appointment" className="about-cta-btn">
            Book an Appointment
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
