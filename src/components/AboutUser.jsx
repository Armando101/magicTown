import React, { useEffect, useState } from "react";
import "@styles/components/favorites.scss";
import ProfileCard from "./ProfileCard";
import getUserFavorites from "../services/getUserReviews";
import ReviewCard from "./ReviewCard";

const AboutUser = ({ id, description }) => {
  const [reviews, setReviews] = useState([{}]);

  useEffect(async () => {
    await getUserFavorites(id).then((response) => {
      console.log(response);
      setReviews(response);
    });
  }, []);

  return (
    <section className="favorites">
      <h3 className="favorites__title">Sobre mí</h3>
      <p className="favorites__about">{description}</p>
      <div className="favorites__content">
        <div className="reviews">
          <h2>Tus experiencias más recientes</h2>
          {!reviews ? (
            <p>Aún no has escrito alguna reseña!</p>
          ) : (
            reviews.map((review, index) => {
              const town = { ...review.town };
              return (
                <div className="review-wrapper" key={index}>
                  <h3>{town.name}</h3>
                  <ReviewCard reviewInfo={review} />
                </div>
              );
            })
          )}
        </div>
        <ProfileCard />
      </div>
    </section>
  );
};

export default AboutUser;
