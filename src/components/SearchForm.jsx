import React, { useState } from "react";
import { useHistory } from "react-router";

import { useForm } from "../hooks/useForm";

import { Modal } from "@material-ui/core";

import "../styles/components/SearchForm.scss";

function SearchForm() {
  const [formSearchValues, handleSearchInputChange] = useForm({
    keyword: "",
  });

  const { keyword } = formSearchValues;

  const [isModalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyword.match("([A-Z]|[a-z])+") || keyword.length == 0 || !keyword) {
      handleOpen();
    }

    history.push(`/search/${keyword}`);
  };

  const handleOpen = (e) => {
    setModalOpen(true);
  };

  const handleClose = (e) => {
    setModalOpen(false);
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
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal modal--form">
          <h2 id="simple-modal-title">!Por favor ingrese la palabra clave!</h2>
        </div>
      </Modal>
    </div>
  );
}

export default SearchForm;
