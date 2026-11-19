import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  UserRound,
  Phone,
  Mail,
  Leaf,
  CheckCircle2,
} from "lucide-react";

import doctors from "../data/doctors";
import services from "../data/services";

import "./Appointment.css";

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function Appointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    doctor: "",
    treatment: "",
    appointmentDate: "",
    appointmentTime: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setIsSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitted(true);
  }

  function handleReset() {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      doctor: "",
      treatment: "",
      appointmentDate: "",
      appointmentTime: "",
      message: "",
    });

    setIsSubmitted(false);
  }

  return (
    <main className="appointment-page">
      {/* Appointment Hero */}
      <section className="appointment-hero">
        <div className="appointment-hero-overlay"></div>

        <div className="appointment-hero-content">
          <span className="appointment-eyebrow">
            <Leaf size={17} />
            Begin Your Wellness Journey
          </span>

          <h1>
            Book Your
            <span> Appointment</span>
          </h1>

          <p>
            Take the first step towards a balanced lifestyle. Request an
            appointment with our Ayurveda team.
          </p>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="appointment-section">
        <div className="container appointment-container">
          <div className="appointment-intro">
            <span className="appointment-section-label">
              <CalendarDays size={17} />
              Appointment Request
            </span>

            <h2>
              Let's Plan Your
              <span> Visit</span>
            </h2>

            <p>
              Please share your details and preferred appointment information.
              Our team can review your request.
            </p>
          </div>

          <div className="appointment-layout">
            {/* Form */}
            <div className="appointment-form-card">
              {isSubmitted ? (
                <div className="appointment-success" role="status">
                  <div className="appointment-success-icon">
                    <CheckCircle2 size={42} />
                  </div>

                  <h2>Request Submitted!</h2>

                  <p>
                    Thank you, {formData.fullName}. Your appointment request has
                    been completed in this demo. No booking has been sent or
                    stored.
                  </p>

                  <div className="appointment-success-details">
                    <p>
                      <strong>Doctor:</strong> {formData.doctor}
                    </p>

                    <p>
                      <strong>Treatment:</strong> {formData.treatment}
                    </p>

                    <p>
                      <strong>Date:</strong> {formData.appointmentDate}
                    </p>

                    <p>
                      <strong>Time:</strong> {formData.appointmentTime}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="appointment-submit-btn"
                    onClick={handleReset}
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form className="appointment-form" onSubmit={handleSubmit}>
                  <div className="appointment-form-heading">
                    <h3>Patient Information</h3>
                    <p>Fields marked with * are required.</p>
                  </div>

                  {/* Patient Details */}
                  <div className="appointment-form-grid">
                    <div className="appointment-field">
                      <label htmlFor="fullName">
                        <UserRound size={16} />
                        Full Name *
                      </label>

                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                        minLength={2}
                      />
                    </div>

                    <div className="appointment-field">
                      <label htmlFor="email">
                        <Mail size={16} />
                        Email Address *
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="appointment-field">
                      <label htmlFor="phone">
                        <Phone size={16} />
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        pattern="[0-9+() -]{7,15}"
                        title="Enter a valid phone number"
                        required
                      />
                    </div>

                    {/* Doctor Selection */}
                    <div className="appointment-field">
                      <label htmlFor="doctor">Select Doctor *</label>

                      <select
                        id="doctor"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a doctor</option>

                        {doctors.map((doctor) => (
                          <option key={doctor.id} value={doctor.name}>
                            {doctor.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Treatment Selection */}
                    <div className="appointment-field">
                      <label htmlFor="treatment">Select Treatment *</label>

                      <select
                        id="treatment"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a treatment</option>

                        {services.map((service) => (
                          <option key={service.id} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date */}
                    <div className="appointment-field">
                      <label htmlFor="appointmentDate">
                        <CalendarDays size={16} />
                        Preferred Date *
                      </label>

                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        min={getTodayDate()}
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Time */}
                    <div className="appointment-field">
                      <label htmlFor="appointmentTime">
                        <Clock3 size={16} />
                        Preferred Time *
                      </label>

                      <select
                        id="appointmentTime"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="appointment-field appointment-message-field">
                    <label htmlFor="message">Additional Message</label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Write your message or any additional information..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="appointment-form-bottom">
                    <p>Please review your details before submitting.</p>

                    <button type="submit" className="appointment-submit-btn">
                      Request Appointment
                      <CalendarDays size={18} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Side Information */}
            <aside className="appointment-sidebar">
              <div className="appointment-sidebar-card">
                <div className="appointment-sidebar-icon">
                  <CalendarDays size={25} />
                </div>

                <h3>Plan Your Visit</h3>

                <p>
                  Choose your preferred date, time and healthcare professional
                  when requesting an appointment.
                </p>
              </div>

              <div className="appointment-sidebar-card">
                <div className="appointment-sidebar-icon">
                  <UserRound size={25} />
                </div>

                <h3>Personalized Attention</h3>

                <p>
                  Share your preferences so the team can understand the purpose
                  of your visit.
                </p>
              </div>

              <div className="appointment-sidebar-note">
                <Leaf size={21} />

                <div>
                  <h4>A Note About Your Request</h4>

                  <p>
                    This is a frontend demonstration. Submitting this form does
                    not confirm a real appointment.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Appointment;
