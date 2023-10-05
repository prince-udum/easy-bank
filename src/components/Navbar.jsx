import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/icon-hamburger.svg";
import CloseIcon from "../assets/icon-close.svg";
import { navLinks } from "../data";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    document.body.style.overflow = "unset";
  };
  return (
    <header className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="#" className="logo-container">
            <img src={Logo} alt="Easy Bank" />
          </a>
          {isMobileNavOpen ? (
            <button className="close-menu" onClick={closeMobileNav}>
              <img src={CloseIcon} alt="close menu" />
            </button>
          ) : (
            <button className="open-menu" onClick={openMobileNav}>
              <img src={Menu} alt="mobile menu" />
            </button>
          )}
        </div>

        <nav
          className={isMobileNavOpen ? "nav-links show-nav-links" : "nav-links"}
        >
          <ul>
            {navLinks.map((link) => {
              const { href, id, text } = link;
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button className="btn nav-btn">request invite</button>
      </div>
    </header>
  );
};

export default Navbar;
