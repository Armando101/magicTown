import React from "react";
import "./Gallery.scss";

const Gallery = ({ photos }) => {
  return (
    <section className="gallery">
      <h3 className="section-title">Galería de fotos</h3>
      <div className="gallery__carrousel">
        {Object.values(photos).map((image, index) => (
          <img key={index} className="gallery__img" src={image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
