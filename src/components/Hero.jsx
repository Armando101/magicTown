import React from "react";
import "../styles/components/Hero.scss";
import SearchForm from "./SearchForm";
function Hero(props) {
  return (
    <div className="hero">
      <SearchForm />
    </div>
  );
}

export default Hero;
