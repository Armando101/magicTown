import React from "react";
import Button from "@components/Button";

const InputReview = () => {
  return (
    <div>
      <p>Califica tu experiencia:</p>
      <textarea
        name="comment"
        cols="30"
        rows="10"
        placeholder="Escribe aquí tu experiencia..."
      ></textarea>
      <Button label={"Publicar mi experiencia"} />
    </div>
  );
};

export default InputReview;
