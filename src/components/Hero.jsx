import React from "react";
import "../styles/components/Hero.scss";
import SearchForm from "./SearchForm";
function Hero({ isSearch = true, cover }) {
  return (
    <div className="hero">
      <div>
        <img src={cover} alt="Foto" />
        {isSearch && <SearchForm />}
      </div>
    </div>
  );
}

export default Hero;
