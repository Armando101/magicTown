import React from "react";
import "@styles/components/favorites.scss";
import ProfileCard from "./ProfileCard";

const AboutUser = () => {
  return (
    <section className="favorites">
      <h3 className="favorites__title">Sobre mí</h3>
      <p className="favorites__about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit,
        reiciendis, fugiat inventore maiores facere quibusdam dolorum
        voluptatibus numquam eligendi nulla adipisci harum voluptates sed
        accusamus modi quam tempore saepe!
      </p>
      <div className="favorites__content">
        <h2>Tus experiencias más recientes</h2>
        <ProfileCard />
      </div>
    </section>
  );
};

export default AboutUser;
