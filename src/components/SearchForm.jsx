import React from "react";
import "../styles/components/SearchForm.scss";

function SearchForm(props) {
  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <input
          className="searchbar__input"
          type="text"
          placeholder="Comienza tu búsqueda..."
        />
        <button className="searchbar__submit" type="submit">
          <img src="https://img.icons8.com/ios/50/000000/search--v1.png" />
        </button>
      </form>
      <h1>
        Descubre México a través de sus <br /> <span> Pueblos Mágicos </span>
      </h1>
    </div>
  );
}

export default SearchForm;
