import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Hero from "../components/Hero";
import Main from "../layout/Main";
import TownCard from "../components/TownCard";
import Footer from "../components/Footer";

import getTownByKeyword from "../services/towns/getTownsByKeyword";

import "../styles/pages/ResultPage.scss";

function ResultPage() {
  const [towns, setTowns] = useState([{}]);

  const { keyword } = useParams();

  useEffect(() => {
    getTownByKeyword(keyword).then((towns) => {
      setTowns(towns);
    });
  }, [keyword]);

  return (
    <>
      <Hero />
      <Main>
        <div className="results-cards">
          {towns.map((town, index) => {
            return <TownCard {...town} key={index} />;
          })}
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default ResultPage;
