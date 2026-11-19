import { Link } from "react-router";
import { ArrowUpRight, Leaf, CheckCircle2, Sparkles } from "lucide-react";

import services from "../data/services";
import "./Services.css";

function Services() {
  return (
    <main className="services-page">
      {/* SERVICES HERO */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <span className="services-eyebrow">
            <Leaf size={16} />
            OUR SERVICES & TREATMENTS
          </span>

          <h1>
            Discover the Path to
            <span> Natural Wellness</span>
          </h1>

          <p>
            Explore traditional Ayurvedic therapies and wellness practices
            designed around balance, mindful living, and individual needs.
          </p>

          <div className="services-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* SERVICES INTRODUCTION */}
      <section className="services-intro section">
        <div className="container services-intro-content">
          <span className="services-section-label">EXPLORE OUR OFFERINGS</span>

          <h2>
            Traditional Wisdom,
            <span> Thoughtful Wellness</span>
          </h2>

          <p>
            At PragnyX Ayurveda, we introduce you to a range of traditional
            Ayurvedic therapies and wellness practices. Explore our services and
            learn about the different approaches to holistic well-being.
          </p>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="services-list-section section">
        <div className="container">
          <div className="services-heading-row">
            <div>
              <span className="services-section-label">
                OUR TREATMENT COLLECTION
              </span>

              <h2>Explore Our Treatments</h2>
            </div>

            <span className="services-count">
              {services.length} Services Available
            </span>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-page-card" key={service.id}>
                <div className="service-card-image">
                  <img
                    src={service.image}
                    alt={service.imageAlt || service.name}
                    loading="lazy"
                  />

                  <span className="service-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="service-card-category">
                    {service.category}
                  </span>
                </div>

                <div className="service-card-content">
                  <div className="service-card-title-row">
                    <h3>{service.name}</h3>
                    <Leaf size={19} />
                  </div>

                  <p className="service-card-description">
                    {service.description}
                  </p>

                  <div className="service-card-benefit">
                    <CheckCircle2 size={17} />

                    <p>
                      <strong>Key focus:</strong> {service.benefit}
                    </p>
                  </div>

                  <Link to="/appointment" className="service-card-link">
                    Enquire About This Service
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WELLNESS MESSAGE */}
      <section className="services-wellness">
        <div className="container services-wellness-content">
          <div className="services-wellness-icon">
            <Sparkles size={29} />
          </div>

          <span>YOUR WELLNESS, YOUR JOURNEY</span>

          <h2>
            Find an Approach That
            <br />
            Feels Right for You
          </h2>

          <p>
            Every wellness journey is different. Connect with our team to learn
            more about our services and available consultation options.
          </p>

          <Link to="/appointment" className="services-cta-button">
            Book an Appointment
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
