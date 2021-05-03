import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "../styles/layout/Header.scss";

function Header({ children }) {
  const [isScrolled, setScrolled] = useState(false);
  const mustFix = useLocation().pathname.match(/\/(login|register|profile)/g);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${isScrolled ? "header--scrolled" : ""} ${
        mustFix ? "header--fixed" : ""
      }`}
    >
      {children}
    </header>
  );
}

export default Header;
