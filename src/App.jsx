import { Routes, Route } from "react-router";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Hero from "./components/home/Hero";
import AboutPreview from "./components/home/AboutPreview";
import WhyChooseUs from "./components/home/WhyChooseUs";
import FeaturedTreatments from "./components/home/FeaturedTreatments";
import FeaturedDoctors from "./components/home/FeaturedDoctors";
import Facilities from "./components/home/Facilities";
import Testimonials from "./components/home/Testimonials";
import AppointmentCTA from "./components/home/AppointmentCTA";

import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Gallery from "./pages/Gallery";
import Appointment from "./pages/Appointment";

function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <FeaturedTreatments />
      <FeaturedDoctors />
      <Facilities />
      <Testimonials />
      <AppointmentCTA />

      <main className="container section">
        <h1 className="section-title">Welcome to PragnyX Ayurveda</h1>

        <p className="section-description">
          A journey towards natural wellness.
        </p>

        <button className="primary-btn">Explore Our Treatments</button>
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
