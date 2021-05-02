import React, { useEffect, useState } from "react";

import About from "@components/About";
import Gallery from "@components/Gallery";
import Hero from "@components/Hero";
import ReviewCard from "@components/ReviewCard";
import Comments from "@components/Comments";

import getTownById from "../services/getTownById.js";
import { useParams } from "react-router";

import { Modal } from "@material-ui/core";

import "../styles/components/Modal.scss";
import Footer from "../components/Footer.jsx";

const DetailPage = () => {
  const [town, setTown] = useState({});
  const [reviews, setReviews] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  const { id } = useParams();

  const photos = { ...town.photos };

  useEffect(async () => {
    await getTownById(id).then((response) => {
      setTown(response.town);
      setReviews(response.reviews);
    });
  }, [setReviews]);

  const handleOpen = (e) => {
    setModalOpen(true);
  };

  const handleClose = (e) => {
    setModalOpen(false);
  };

  return (
    <>
      <Hero isSearch={false} cover={photos[0]} />
      <About {...town} />
      <Gallery photos={photos} />
      <div>
        <h3 className="section-title">Reseñas de otros viajeros</h3>
        {reviews.length == 0 ? (
          <p>Aún nadie ha escrito alguna reseña, se el primero!</p>
        ) : (
          Object.values(reviews).map((review, index) => {
            return <ReviewCard key={index} reviewInfo={review} />;
          })
        )}
      </div>
      <Comments
        townName={town.name}
        townId={town.id}
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
