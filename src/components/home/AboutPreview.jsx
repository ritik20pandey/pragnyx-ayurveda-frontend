import { Link } from "react-router";
import {
  ArrowUpRight,
  Leaf,
  Heart,
  Sprout,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import "./AboutPreview.css";

function AboutPreview() {
  const features = [
    {
      icon: <Leaf size={21} />,
      title: "Traditional Wisdom",
      description: "Inspired by classical Ayurvedic principles.",
    },
    {
      icon: <Heart size={21} />,
      title: "Personalized Care",
      description: "An approach centered around individual needs.",
    },
    {
      icon: <Sprout size={21} />,
      title: "Holistic Wellness",
      description: "A thoughtful focus on mind and body wellness.",
    },
  ];

  return (
    <section className="about-preview section">
      <div className="container">
        <div className="about-grid">
          {/* LEFT IMAGE AREA */}
          <div className="about-image-wrapper">
            <div className="about-main-image">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85"
                alt="Peaceful wellness therapy space"
                loading="lazy"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="about-floating-card">
              <div className="about-floating-icon">
                <Sparkles size={23} />
              </div>

              <div>
                <h3>Ancient Wisdom</h3>
                <p>Thoughtful wellness practices</p>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="about-image-decoration"></div>

            <div className="about-image-caption">
              <Leaf size={16} />
              <span>A MORE BALANCED WAY OF LIVING</span>
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="about-content">
            <div className="about-eyebrow">
              <span className="about-eyebrow-line"></span>
              <span>ABOUT PRAGNYX</span>
            </div>

            <h2 className="about-title">
              Rooted in
              <span> Tradition.</span>
              <br />
              Focused on
              <span> You.</span>
            </h2>

            <p className="about-description">
              At PragnyX Ayurveda, we bring the timeless principles of Ayurveda
              into a thoughtful and welcoming wellness experience. We believe
              that every individual deserves care that considers their unique
              needs and lifestyle.
            </p>

            <p className="about-description about-description-second">
              Our approach combines traditional Ayurvedic knowledge,
              personalized consultations and mindful wellness practices to help
              people make informed choices about their well-being.
            </p>

            {/* Feature List */}
            <div className="about-points">
              <div className="about-point">
                <CheckCircle2 size={18} />
                <span>Inspired by traditional Ayurvedic knowledge</span>
              </div>

              <div className="about-point">
                <CheckCircle2 size={18} />
                <span>Individual attention and thoughtful consultations</span>
              </div>

              <div className="about-point">
                <CheckCircle2 size={18} />
                <span>A calm and welcoming wellness environment</span>
              </div>
            </div>

            {/* CTA */}
            <Link to="/about" className="about-btn">
              Discover Our Story
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="about-features">
          {features.map((feature, index) => (
            <div className="about-feature-card" key={index}>
              <div className="about-feature-icon">{feature.icon}</div>

              <div className="about-feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
