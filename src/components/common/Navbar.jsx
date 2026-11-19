import { useState } from "react";
import { NavLink } from "react-router";
import { Leaf, Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Doctors", href: "/doctors" },
    { name: "Treatments", href: "/services" },
    { name: "Gallery", href: "/gallery" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const getMobileLinkClass = ({ isActive }) =>
    isActive ? "mobile-nav-link active" : "mobile-nav-link";

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="PragnyX Ayurveda Home"
        >
          <span className="logo-icon">
            <Leaf size={25} strokeWidth={1.7} />
          </span>

          <span className="logo-text">
            <span className="logo-name">PragnyX</span>
            <span className="logo-subtitle">AYURVEDA & WELLNESS</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === "/"}
              className={getNavLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Appointment Button */}
        <NavLink
          to="/appointment"
          className={({ isActive }) =>
            isActive ? "nav-appointment appointment-active" : "nav-appointment"
          }
        >
          Book Appointment
          <ArrowUpRight size={17} />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            end={link.href === "/"}
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            {link.name}
          </NavLink>
        ))}

        <NavLink
          to="/appointment"
          className={({ isActive }) =>
            isActive
              ? "mobile-appointment appointment-active"
              : "mobile-appointment"
          }
          onClick={closeMenu}
        >
          Book Appointment
          <ArrowUpRight size={17} />
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
