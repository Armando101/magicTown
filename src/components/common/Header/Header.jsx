import React, { useState, useEffect } from "react";

import Brand from "./Brand/Brand";
import Navbar from "./Navbar/Navbar";

import { useLocation } from "react-router";

import "./Header.scss";

function Header() {
  const [isScrolled, setScrolled] = useState(false);
  const mustFix = useLocation().pathname.match(/\/(login|register|profile|dashboard)/g);

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
      <Brand />
      <Navbar />
    </header>
  );
}

export default Header;
