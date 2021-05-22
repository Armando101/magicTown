import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import About from "@components/About";
import Gallery from "@components/Gallery";
import Hero from "@components/Hero";
import Comments from "@components/Comments";
import Footer from "@components/Footer.jsx";
import { Modal } from "@material-ui/core";

import getTownById from "../services/towns/getTownById.js";
import getTownReviews from "../services/reviews/getTownReviews.js";

import "../styles/components/Modal.scss";

const DetailPage = () => {
  const [details, setDetails] = useState({});
  const [reviews, setReviews] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  const { state } = useLocation();

  const photos = { ...details.photos };

  useEffect(() => {
    let isMounted = true;
    getTownById(state.id)
      .then((town) => {
        isMounted && setDetails(town);
      })
      .then(() => {
        getTownReviews(state.id).then((reviews) => {
          setReviews(reviews);
        });
      });

    return () => (isMounted = false);
  }, []);

  const handleOpen = (e) => {
    setModalOpen(true);
  };

  const handleClose = (e) => {
    setModalOpen(false);
  };

  return (
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
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal modal--form">
          <h2 id="simple-modal-title">
            !Por favor, llene correctamente los campos!
          </h2>
        </div>
      </Modal>
    </>
  );
};

export default DetailPage;
