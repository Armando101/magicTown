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

function HomePage({ userInfo, mostLikedTowns, latestReviews }) {
  return (
    <>
      <Header>
        {userInfo.logged ? (
          <>
            <Brand />
            <nav>
              <Avatar userInfo={userInfo} />
            </nav>
          </>
        ) : (
          <>
            <Brand />
            <nav>
              <Button label="Registro" />
              <Button label="Inicio de Sesión" />
            </nav>
          </>
        )}
      </Header>
      <Hero />
      <Main>
        <Discover mostLikedTowns={mostLikedTowns} />
        <Review latestReviews={latestReviews} />
      </Main>
      <Footer />
    </>
  );
}

export default HomePage;
