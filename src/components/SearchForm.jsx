import React from "react";
import "../styles/components/SearchForm.scss";

function SearchForm(props) {
  return (
    <form className="searchbar">
      <input className="searchbar__input" type="text" placeholder="Buscar..." />
      <h1>
        Descubre México a través de sus <br /> Pueblos Mágicos
      </h1>
    </form>
  );
}

export default SearchForm;
