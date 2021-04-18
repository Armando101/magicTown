import React from "react";
import "../styles/layout/Header.scss";

function Header({ children }) {
  return <header className="header">{children}</header>;
}

export default Header;
