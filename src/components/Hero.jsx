import React from "react";
import "../styles/components/Hero.scss";
import SearchForm from "./SearchForm";
function Hero({ isSearch = true }) {
  return <div className="hero">{isSearch && <SearchForm />}</div>;
}

export default Hero;
