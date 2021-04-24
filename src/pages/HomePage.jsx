import React from "react";

import Discover from "../components/Discover";
import Hero from "../components/Hero";
import Main from "../layout/Main";

import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function HomePage({ userInfo, mostLikedTowns, latestReviews }) {
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
