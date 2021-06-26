import React from "react";
import { useHistory } from "react-router";

import { useForm } from "../../../../hooks/useForm";

import swal from "@sweetalert/with-react";

import "./SearchForm.scss";

function SearchForm() {
  const [formSearchValues, handleSearchInputChange] = useForm({
    keyword: "",
  });

  const { keyword } = formSearchValues;

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyword.match("([A-Z]|[a-z])+") || keyword.length == 0 || !keyword) {
      return swal({
        title: "!Por favor ingrese una palabra clave!",
        icon: "warning",
      });
    }

    history.push(`/search/${keyword}`);
  };

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={handleSubmit}>
        <input
          name="keyword"
          className="searchbar__input"
          type="text"
          placeholder="Comienza tu búsqueda..."
          value={keyword}
          onChange={handleSearchInputChange}
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
