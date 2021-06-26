import React from "react";

import "./Hero.scss";

import SearchForm from "./SearchForm/SearchForm";

const defaultCover = "https://i.ibb.co/1Mfq5qF/patzcuaro-michoacan.jpg";

function Hero({ isSearch = true, cover = defaultCover }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: [
          "linear-gradient(to bottom, rgba(34, 34, 34, 0), #111)",
          `url(${cover})`,
        ],
      }}
    >
      <div>{isSearch && <SearchForm />}</div>
    </div>
  );
}

export default Hero;
