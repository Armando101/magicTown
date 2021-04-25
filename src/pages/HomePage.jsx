import React from "react";

import Discover from "../components/Discover";
import Hero from "../components/Hero";
import Main from "../layout/Main";

import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function HomePage({ userInfo, mostLikedTowns, latestReviews }) {
  const cover =
    "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg";
  return (
    <>
      <Hero />
      <Main>
        <Discover mostLikedTowns={mostLikedTowns} />
        <Reviews userInfo={userInfo} latestReviews={latestReviews} />
      </Main>
      <Footer />
    </>
  );
}

export default HomePage;
