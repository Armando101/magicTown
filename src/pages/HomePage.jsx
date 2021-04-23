import React from "react";

import Brand from "../components/Brand";
import Discover from "../components/Discover";
import Hero from "../components/Hero";
import Header from "../layout/Header";
import Main from "../layout/Main";

import Review from "../components/Review";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function HomePage({ userInfo, mostLikedTowns, latestReviews }) {
  return (
    <>
      <Header>
        <Brand />
        <Navbar userInfo={userInfo} />
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
