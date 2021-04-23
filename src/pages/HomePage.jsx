import React from "react";

import Discover from "../components/Discover";
import Hero from "../components/Hero";
import Main from "../layout/Main";

import Review from "../components/Review";
import Footer from "../components/Footer";

function HomePage({ userInfo, mostLikedTowns, latestReviews }) {
  return (
    <>
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
