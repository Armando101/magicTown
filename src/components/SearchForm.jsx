import React from "react";
import "../styles/components/SearchForm.scss";

function SearchForm(props) {
  return (
    <form className="searchbar">
      <input className="searchbar__input" type="text" placeholder="Buscar..." />
    </form>
  );
}

export default SearchForm;
