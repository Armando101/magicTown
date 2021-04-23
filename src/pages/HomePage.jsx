import React, { useState } from "react";
import Avatar from "../components/Avatar";
import Brand from "../components/Brand";
import Button from "../components/Button";
import Discover from "../components/Discover";
import Hero from "../components/Hero";
import Header from "../layout/Header";
import Main from "../layout/Main";

import Review from "../components/Review";
import Footer from "../components/Footer";
import Popper from "../components/Popper";

function HomePage({ userInfo, mostLikedTowns, latestReviews }) {
  const cover =
    "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg";
  return (
    <>
      <Header>
        {!userInfo.logged ? (
          <>
            <Brand />
            <nav>
              <Button label="Inicio" type="home" />
              <Popper>
                <>
                  <Button label="Mis favoritos" />
                  <Button label="Mis reseñas" />
                  <Button label="Cuenta" />
                  <Button label="Cerrar Sesión" />
                </>
              </Popper>
              <Avatar userInfo={userInfo} />
            </nav>
          </>
        ) : (
          <>
            <Brand />
            <nav>
              <Button label="Inicio" type="home" />
              <Button label="Registro" type="header" />
              <Button label="Iniciar Sesión" type="header" />
            </nav>
          </>
        )}
      </Header>
      <Hero cover={cover} />
      <Main>
        <Discover mostLikedTowns={mostLikedTowns} />
        <Review latestReviews={latestReviews} />
      </Main>
      <Footer />
    </>
  );
}

export default HomePage;
