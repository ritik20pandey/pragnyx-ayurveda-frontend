import { Link } from "react-router";
import { ArrowUpRight, ArrowRight, Leaf } from "lucide-react";

import services from "../../data/services";
import "./FeaturedTreatments.css";

function FeaturedTreatments() {
  const featuredServices = services.filter((service) => service.featured);

  return (
    <section className="treatments-section section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="treatments-header">
          <div className="treatments-heading-content">
            <div className="treatments-eyebrow">
              <Leaf size={15} />
              <span>OUR TREATMENTS</span>
            </div>

            <h2 className="treatments-title">
              Discover the Art of
              <br />
              <span>Traditional Wellness.</span>
            </h2>
          </div>

          <div className="treatments-heading-right">
            <p>
              Explore traditional Ayurvedic therapies and personalized wellness
              services designed around your individual needs.
            </p>

            <Link to="/services" className="treatments-view-all">
              View All Treatments
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* TREATMENT CARDS */}
        <div className="treatments-grid">
          {featuredServices.map((service, index) => (
            <article className="treatment-card" key={service.id}>
              {/* IMAGE */}
              <div className="treatment-image-wrapper">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="treatment-image"
                  loading="lazy"
                />

                <span className="treatment-index">0{index + 1}</span>

                <div className="treatment-image-overlay"></div>
              </div>

              {/* CONTENT */}
              <div className="treatment-content">
                <span className="treatment-category">{service.category}</span>

                <h3 className="treatment-name">{service.name}</h3>

                <p className="treatment-description">{service.description}</p>

                <div className="treatment-benefit">
                  <Leaf size={15} />
                  <span>{service.benefit}</span>
                </div>

                <Link
                  to="/services"
                  className="treatment-learn-more"
                  aria-label={`Learn more about ${service.name}`}
                >
                  Explore Treatment
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="treatments-bottom">
          <p>
            <Leaf size={16} />
            <span>
              Every wellness journey begins with understanding your individual
              needs.
            </span>
          </p>

          <Link to="/appointment" className="treatments-book-btn">
            Book a Consultation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTreatments;
