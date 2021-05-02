import React from "react";

import Discover from "../components/Discover";
import Hero from "../components/Hero";
import Main from "../layout/Main";

import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

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
