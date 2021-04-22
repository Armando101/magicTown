import React, { useState, useEffect } from "react";
import "../styles/layout/Header.scss";

function Header({ children }) {
  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 90) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header className={isScrolled ? "header header--scrolled" : "header"}>
      {children}
    </header>
  );
}

export default Header;
