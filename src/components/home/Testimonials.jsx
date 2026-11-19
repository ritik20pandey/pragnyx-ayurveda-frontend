import testimonials from "../../data/testimonials";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section section">
      <div className="container">
        {/* Section Heading */}
        <div className="testimonials-heading">
          <span className="testimonials-subtitle">PATIENT EXPERIENCES</span>

          <h2>
            Stories of Care &<span> Wellness</span>
          </h2>

          <p>
            Every experience matters. Discover what people appreciate about our
            welcoming environment and approach to holistic wellness.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>
              {/* Quote Icon */}
              <div className="testimonial-quote">“</div>

              {/* Star Rating */}
              <div
                className="testimonial-stars"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {"★".repeat(testimonial.rating)}
              </div>

              {/* Feedback */}
              <p className="testimonial-feedback">{testimonial.feedback}</p>

              {/* Patient Information */}
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>

                <div className="testimonial-author-info">
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="testimonials-bottom">
          <p>Your wellness journey deserves thoughtful care and attention.</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
