import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Hero from "../common/Hero/Hero";
import Comments from "./Comments/Comments";
import Footer from "../common/Footer/Footer";
import { CircularProgress } from "@material-ui/core";

import getTownById from "../../services/towns/getTownById.js";
import getTownReviews from "../../services/reviews/getTownReviews.js";

import { useFetch } from "../../hooks/useFetch";
import swal from "@sweetalert/with-react";

const DetailPage = () => {
  const [details, setDetails] = useState({});
  const [reviews, setReviews] = useState({});

  const { state } = useLocation();

  const photos = { ...details.photos };

  try {
    const { data: townData, loading: townLoading } = useFetch(getTownById, [
      state.id,
    ]);

    const { data: reviewsData, loading: reviewsLoading } = useFetch(
      getTownReviews,
      [state.id]
    );

    useEffect(() => {
      !townLoading && setDetails(townData);
    }, [townData]);

    useEffect(() => {
      !reviewsLoading && setReviews(reviewsData);
    }, [reviewsData]);
  } catch (error) {
    console.log(error.message);
  }

  const handleOpen = (e) => {
    return swal({
      title: "¡Por Favor, llene los campos correctamente!",
      icon: "warning",
    });
  };

  return (
    <>
      {details != null ? (
        <>
          <Hero isSearch={false} cover={photos[0]} />
          <About {...details} />
          <Gallery photos={photos} />
          <Comments
            townName={details.name}
            townId={details.id}
            reviewsState={{ reviews, setReviews }}
            openModal={handleOpen}
          />
          <Footer />
        </>
      ) : (
        <CircularProgress size={160} color={"inherit"} />
      )}
    </>
  );
};

export default DetailPage;
