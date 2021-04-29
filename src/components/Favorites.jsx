import React from "react";
import FavoritesCards from "./FavoritesCards";
import "@styles/components/favorites.scss";

const cards = [
  {
    id: 0,
    img:
      "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
    name: "Milta",
    stars: 4,
    state: "Oaxaca",
  },
  {
    id: 1,
    img:
      "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
    name: "Milta",
    stars: 4,
    state: "Oaxaca",
  },
  {
    id: 2,
    img:
      "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
    name: "Milta",
    stars: 4,
    state: "Oaxaca",
  },
  {
    id: 3,
    img:
      "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
    name: "Milta",
    stars: 4,
    state: "Oaxaca",
  },
  {
    id: 4,
    img:
      "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
    name: "Milta",
    stars: 4,
    state: "Oaxaca",
  },
];

const Favorites = () => {
  return (
    <section className="favorites">
      <h3>Mis favoritos</h3>
      <FavoritesCards cards={cards} />
    </section>
  );
};

export default Favorites;
