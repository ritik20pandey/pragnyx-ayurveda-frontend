import facilities from "../../data/facilities";
import "./Facilities.css";

function Facilities() {
  return (
    <section className="facilities-section section">
      <div className="container">
        {/* Section Heading */}
        <div className="facilities-heading">
          <span className="facilities-subtitle">OUR ENVIRONMENT</span>

          <h2>
            A Space Designed for
            <span> Healing & Wellness</span>
          </h2>

          <p>
            Discover a peaceful environment where traditional Ayurvedic
            practices meet comfort, care and nature.
          </p>
        </div>

        {/* Facilities Gallery */}
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <article
              className={`facility-card ${
                facility.featured ? "facility-featured" : ""
              }`}
              key={facility.id}
            >
              <img
                src={facility.image}
                alt={facility.imageAlt}
                loading="lazy"
                decoding="async"
              />

              <div className="facility-overlay">
                <span className="facility-category">{facility.category}</span>

                <h3>{facility.title}</h3>

                <p>{facility.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="facilities-bottom">
          <p>
            A peaceful atmosphere is an important part of the wellness
            experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
