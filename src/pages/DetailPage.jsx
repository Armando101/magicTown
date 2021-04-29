import React, { useEffect, useState } from "react";

import About from "@components/About";
import Gallery from "@components/Gallery";
import Hero from "@components/Hero";
import Comments from "../components/Comments";

import getTownById from "../services/getTownById.JS";
import { useParams } from "react-router";
import ReviewCard from "../components/ReviewCard";

const DetailPage = () => {
  const [town, setTown] = useState({});
  const [reviews, setReviews] = useState({});

  const { id } = useParams();

  const photos = { ...town.photos };

  useEffect(async () => {
    const response = await getTownById(id);
    setTown(response.town);
    setReviews(response.reviews);
  }, []);
  return (
    <>
      <Hero isSearch={false} cover={photos[0]} />
      <About {...town} />
      <Gallery photos={photos} />
      <div>
        <h3 className="section-title">Reseñas de otros viajeros</h3>
        {Object.values(reviews).map((review, index) => {
          return <ReviewCard key={index} reviewInfo={review} />;
        })}
      </div>
      <Comments name={town.name} />
    </>
  );
};

export default DetailPage;
