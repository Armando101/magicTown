import React from "react";
import FavoritesCards from "./FavoritesCards";
import "@styles/components/favorites.scss";
import ProfileCard from "./ProfileCard";

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
      <h3 className="favorites__title">Mis favoritos</h3>
      <div className="favorites__content">
        <FavoritesCards cards={cards} />
        <ProfileCard />
      </div>
    </section>
  );
};

export default Favorites;
