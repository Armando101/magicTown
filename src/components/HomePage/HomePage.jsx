import React from "react";

import Discover from "./Discover/Discover";
import Hero from "../common/Hero/Hero";
import Main from "../../layout/Main";

import Reviews from "./Reviews/Reviews";
import Footer from "../common/Footer/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Main>
        <Discover />
        <Reviews />
      </Main>
      <Footer />
    </>
  );
}

export default HomePage;
