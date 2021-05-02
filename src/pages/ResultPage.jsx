import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Hero from "../components/Hero";
import Main from "../layout/Main";
import TownCard from "../components/TownCard";

import getTownsByKeyword from "../services/getTownsByKeyword";

import "../styles/pages/ResultPage.scss";
import Footer from "../components/Footer";

function ResultPage() {
  const [towns, setTowns] = useState([{}]);

  const { keyword } = useParams();

  useEffect(async () => {
    await getTownsByKeyword(keyword).then((response) => {
      setTowns(response);
    });
  }, [keyword]);

  return (
    <>
      <Hero />
      <Main>
        <div className="results-cards">
          {towns.map((town, index) => {
            return <TownCard townInfo={town} key={index} />;
          })}
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default ResultPage;
