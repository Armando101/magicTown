import React from "react";
import "@styles/components/Galery.scss";

const Galeria = () => {
  const images = [
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 0,
    },
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 1,
    },
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 2,
    },
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 3,
    },
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 4,
    },
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 5,
    },
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 6,
    },
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 7,
    },
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 8,
    },
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 9,
    },
    {
      img:
        "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
      name: "taxo",
      id: 10,
    },
  ];
  return (
    <section className="galery">
      <h3>Galería de fotos</h3>
      <div className="galery__carrousel">
        {images.map((image) => (
          <img
            key={image.id}
            className="galery__img"
            src={image.img}
            alt={image.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Galeria;
