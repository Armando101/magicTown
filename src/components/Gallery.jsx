import React from "react";
import "@styles/components/Galery.scss";

const Gallery = ({ photos }) => {
  return (
    <section className="galery">
      <h3 className="section-title">Galería de fotos</h3>
      <div className="galery__carrousel">
        {Object.values(photos).map((image, index) => (
          <img key={index} className="galery__img" src={image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
