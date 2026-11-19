import { Link } from "react-router";
import {
  ArrowUpRight,
  Leaf,
  GraduationCap,
  BriefcaseBusiness,
  Clock3,
  CalendarDays,
} from "lucide-react";

import doctors from "../data/doctors";
import "./Doctors.css";

function Doctors() {
  return (
    <main className="doctors-page">
      {/* DOCTORS HERO */}
      <section className="doctors-hero">
        <div className="doctors-hero-overlay"></div>

        <div className="doctors-hero-content">
          <span className="doctors-eyebrow">
            <Leaf size={16} />
            MEET OUR DOCTORS
          </span>

          <h1>
            Experienced Care,
            <span> Inspired by Ayurveda</span>
          </h1>

          <p>
            Get to know our sample team of Ayurvedic practitioners and explore
            their areas of wellness expertise.
          </p>

          <div className="doctors-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Doctors</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="doctors-intro section">
        <div className="container doctors-intro-content">
          <span className="doctors-section-label">OUR TEAM</span>

          <h2>
            Meet the People Behind
            <span> Thoughtful Care</span>
          </h2>

          <p>
            Explore our sample practitioner profiles, their qualifications,
            areas of specialization, and experience. Our aim is to make it
            easier for visitors to learn about the care team.
          </p>
        </div>
      </section>

      {/* DOCTOR PROFILES */}
      <section className="doctors-list-section section">
        <div className="container">
          <div className="doctors-heading-row">
            <div>
              <span className="doctors-section-label">OUR PRACTITIONERS</span>

              <h2>Meet Our Doctors</h2>
            </div>

            <span className="doctors-count">
              {doctors.length} Doctor Profiles
            </span>
          </div>

          <div className="doctors-grid">
            {doctors.map((doctor, index) => (
              <article className="doctor-profile-card" key={doctor.id}>
                {/* DOCTOR IMAGE */}
                <div className="doctor-profile-image">
                  <img
                    src={doctor.image}
                    alt={doctor.imageAlt || doctor.name}
                    loading="lazy"
                  />

                  <span className="doctor-profile-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* DOCTOR DETAILS */}
                <div className="doctor-profile-content">
                  <span className="doctor-specialization">
                    {doctor.specialization}
                  </span>

                  <h3>{doctor.name}</h3>

                  <div className="doctor-qualification">
                    <GraduationCap size={17} />
                    <span>{doctor.qualification}</span>
                  </div>

                  <div className="doctor-details-list">
                    <div className="doctor-detail-item">
                      <BriefcaseBusiness size={16} />
                      <span>
                        <strong>Experience:</strong> {doctor.experience}
                      </span>
                    </div>

                    <div className="doctor-detail-item">
                      <CalendarDays size={16} />
                      <span>
                        <strong>Availability:</strong> {doctor.availability}
                      </span>
                    </div>

                    {doctor.timing && (
                      <div className="doctor-detail-item">
                        <Clock3 size={16} />
                        <span>
                          <strong>Timing:</strong> {doctor.timing}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="doctor-biography">{doctor.biography}</p>

                  <Link to="/appointment" className="doctor-appointment-link">
                    Book an Appointment
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR CTA */}
      <section className="doctors-cta">
        <div className="container doctors-cta-content">
          <div>
            <span>WE ARE HERE TO HELP</span>

            <h2>
              Looking for the Right
              <br />
              Wellness Consultation?
            </h2>

            <p>
              Explore our services and send an appointment enquiry to learn more
              about consultation options.
            </p>
          </div>

          <Link to="/appointment" className="doctors-cta-button">
            Request an Appointment
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Doctors;
