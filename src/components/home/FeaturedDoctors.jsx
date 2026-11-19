import { Link } from "react-router";
import doctors from "../../data/doctors";

import {
  ArrowUpRight,
  ArrowRight,
  Clock3,
  CalendarDays,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

import "./FeaturedDoctors.css";

function FeaturedDoctors() {
  return (
    <section className="doctors-section section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="doctors-header">
          <div className="doctors-heading-left">
            <div className="doctors-eyebrow">
              <span></span>
              <p>MEET OUR TEAM</p>
              <span></span>
            </div>

            <h2 className="doctors-title">
              Meet Our
              <br />
              <span>Ayurvedic Experts.</span>
            </h2>
          </div>

          <div className="doctors-heading-right">
            <p>
              Get to know our team of sample Ayurvedic practitioners and explore
              their areas of interest and consultation availability.
            </p>

            <Link to="/doctors" className="doctors-view-all">
              View All Doctors
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* DOCTOR CARDS */}
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.id}>
              {/* DOCTOR IMAGE */}
              <div className="doctor-image-wrapper">
                <img
                  src={doctor.image}
                  alt={doctor.imageAlt}
                  className="doctor-image"
                  loading="lazy"
                />

                <span className="doctor-experience">{doctor.experience}</span>
              </div>

              {/* DOCTOR DETAILS */}
              <div className="doctor-content">
                <div className="doctor-specialization">
                  <Stethoscope size={14} />
                  <span>{doctor.specialization}</span>
                </div>

                <h3 className="doctor-name">{doctor.name}</h3>

                <div className="doctor-qualification">
                  <GraduationCap size={16} />
                  <span>{doctor.qualification}</span>
                </div>

                <p className="doctor-biography">{doctor.biography}</p>

                {/* CONSULTATION DETAILS */}
                <div className="doctor-availability">
                  <div className="doctor-availability-row">
                    <CalendarDays size={15} />
                    <span>{doctor.availability}</span>
                  </div>

                  <div className="doctor-availability-row">
                    <Clock3 size={15} />
                    <span>{doctor.timing}</span>
                  </div>
                </div>

                {/* PROFILE LINK */}
                <Link
                  to="/doctors"
                  className="doctor-profile-link"
                  aria-label={`View profile of ${doctor.name}`}
                >
                  View Doctor Profile
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="doctors-bottom">
          <div className="doctors-bottom-content">
            <h3>Looking for the right wellness consultation?</h3>

            <p>
              Explore our sample doctor profiles and consultation information.
            </p>
          </div>

          <Link to="/appointment" className="doctors-appointment-btn">
            Book an Appointment
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDoctors;
