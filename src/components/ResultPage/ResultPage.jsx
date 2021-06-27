import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Hero from "../common/Hero/Hero";
import Main from "../../layout/Main";
import TownCard from "../common/TownCard/TownCard";
import Footer from "../common/Footer/Footer";

import FailureImage from "../../../public/assets/SearchFailure.svg";

import { CircularProgress } from "@material-ui/core";

import getTownByKeyword from "../../services/towns/getTownsByKeyword";

import "./ResultPage.scss";

function ResultPage() {
  const [resultState, setResultState] = useState({
    data: [],
    isLoading: false,
    errorFound: false,
  });

  const { keyword } = useParams();

  useEffect(() => {
    setResultState({ ...resultState, isLoading: true });
    setTimeout(async () => {
      try {
        const towns = await getTownByKeyword(keyword);
        setResultState({ data: towns, isLoading: false, errorFound: false });
      } catch (error) {
        setResultState({ ...resultState, isLoading: false, errorFound: true });
      }
    }, 1300);
  }, [keyword]);

  return (
    <>
      <Hero />
      <Main>
        {resultState.isLoading ? (
          <CircularProgress size={160} color={"inherit"} />
        ) : (
          <div className="results-cards">
            {!resultState.errorFound ? (
              resultState.data.map((town, index) => {
                return <TownCard {...town} key={index} />;
              })
            ) : (
              <div className="failure">
                <h3 className="failure__title">¡Oh no!</h3>
                <p className="failure__copy">
                  Parece que el lugar que buscas no esta en el mapa
                </p>
                <span className="failure__drop">Intenta de nuevo</span>
                <img src={FailureImage} />
              </div>
            )}
          </div>
        )}
      </Main>
      <Footer />
    </>
  );
}

export default ResultPage;
