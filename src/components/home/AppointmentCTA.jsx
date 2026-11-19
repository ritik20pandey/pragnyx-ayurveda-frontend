import { ArrowUpRight, CalendarDays, Leaf } from "lucide-react";
import { Link } from "react-router";
import "./AppointmentCTA.css";

function AppointmentCTA() {
  return (
    <section className="appointment-cta-section">
      <div className="container">
        <div className="appointment-cta-content">
          {/* Decorative Icon */}
          <div className="appointment-cta-icon">
            <Leaf size={25} strokeWidth={1.5} />
          </div>

          {/* Small Label */}
          <span className="appointment-cta-label">
            YOUR WELLNESS JOURNEY STARTS HERE
          </span>

          {/* Heading */}
          <h2>
            Take the First Step Towards
            <span> Better Wellbeing</span>
          </h2>

          {/* Description */}
          <p>
            Give yourself the care and attention you deserve. Connect with our
            Ayurvedic team and explore a wellness approach that feels right for
            you.
          </p>

          {/* Buttons */}
          <div className="appointment-cta-actions">
            <Link to="/appointment" className="appointment-cta-primary">
              <CalendarDays size={18} />
              Book an Appointment
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/doctors" className="appointment-cta-secondary">
              Meet Our Doctors
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Supporting Text */}
          <span className="appointment-cta-note">
            Thoughtful care. Traditional wisdom. Holistic wellness.
          </span>
        </div>
      </div>
    </section>
  );
}

export default AppointmentCTA;
