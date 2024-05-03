"use client";
import React, { useState } from "react";
import Image from "next/image";

enum NavRoutes {
  Home = "/",
  Contacts = "/contacts",
}

export default function Nav() {
  const [activeNav, setActiveNav] = useState<NavRoutes>(NavRoutes.Home);
  const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(true);

  const handleNavClick = (route: NavRoutes) => {
    setActiveNav(route);
    setIsNavCollapsed(true);
  };

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3">
      <a className="navbar-brand" href={NavRoutes.Home}>
        <Image
          src="/images/vercel.svg"
          alt="Home"
          height={125} 
          width={125}
          className="d-inline-block align-top"
          priority
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavToggle}
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`}
        id="navbarNav"
      >
        <div className="d-flex justify-content-between w-100">
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                activeNav === NavRoutes.Contacts ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href={NavRoutes.Contacts}
                onClick={() => handleNavClick(NavRoutes.Contacts)}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
