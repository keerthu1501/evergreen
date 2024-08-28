import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navList, logo } from "../data/Data";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    setNavbarCollapse(false); // Hide the hamburger menu after selecting a link
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setNavbarBg("bg-dark");
      } else {
        setNavbarBg("transparent");
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarVisible(false); // Hide navbar on scroll down
      } else {
        setNavbarVisible(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setNavbarBg("bg-dark"); // Set solid color for other pages
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, lastScrollY]);

  return (
    <div
      className={`container-fluid fixed-top px-0 ${navbarBg} ${navbarVisible ? "show-navbar" : "hide-navbar"}`}
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      <div className="row gx-0">
        <div className="col-lg-3 d-none d-lg-block">
          <Link
            to="/"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            onClick={handleLinkClick}
          >
            <img
              src={logo}
              alt="Glamph Logo"
              style={{ height: "60px", objectFit: "contain" }} // Adjust height as needed
              className="m-0"
            />
          </Link>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg navbar-dark p-3 p-lg-0">
            <Link
              to="/"
              className="navbar-brand d-block d-lg-none"
              onClick={handleLinkClick}
            >
              <img
                src={logo}
                alt="Glamph Logo"
                style={{ height: "70px", objectFit: "contain" }}
                className="m-0"
              />
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              onClick={() => setNavbarCollapse(!navbarCollapse)}
              aria-label="Toggle navigation"
              style={{ fontSize: "1.5rem", padding: "10px" }} // Increase size for better UX
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={
                navbarCollapse
                  ? "navbar-collapse justify-content-around navbarCollapse show"
                  : "collapse navbar-collapse justify-content-around"
              }
              style={{ transition: "height 0.3s ease" }} // Smooth transition for collapsing
            >
              <div className="navbar-nav mr-auto py-0">
                {navList && navList.map((item, index) => (
                  <div key={index} className={`nav-item ${item.subItems ? "dropdown" : ""}`}>
                    {item.subItems ? (
                      <div
                        className="nav-item dropdown"
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          role="button"
                          aria-expanded={activeDropdown === item.id}
                        >
                          {item.text}
                        </Link>
                        <div
                          className={`dropdown-menu rounded-0 m-0 ${
                            activeDropdown === item.id ? "show" : ""
                          }`}
                          style={{ transition: "opacity 0.3s ease" }} // Smooth dropdown appearance
                        >
                          {item.subItems.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              to={sub.path}
                              className="dropdown-item"
                              onClick={handleLinkClick}
                            >
                              {sub.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="nav-item nav-link"
                        onClick={handleLinkClick}
                      >
                        {item.text}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <SocialIcons />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
