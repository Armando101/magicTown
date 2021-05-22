import React, { useEffect, useState } from "react";

import ProfileCard from "./ProfileCard";
import ReviewCard from "./ReviewCard";

import getUserReviews from "../services/reviews/getUserReviews";

import "../styles/components/favorites.scss";

const AboutUser = ({ uid, description }) => {
  const [userReviews, setUserReviews] = useState([{}]);

  useEffect(() => {
    getUserReviews(uid).then((reviews) => {
      setUserReviews(reviews);
    });
  }, []);

  return (
    <section className="favorites">
      <h3 className="favorites__title">Sobre mí</h3>
      <p className="favorites__about">{description}</p>
      <div className="favorites__content">
        <div className="reviews">
          <h2>Tus experiencias más recientes</h2>
          {!userReviews ? (
            <p>Aún no has escrito alguna reseña!</p>
          ) : (
            userReviews.map((review, index) => {
              const town = { ...review.town };
              return (
                <div className="review-wrapper" key={index}>
                  <h3>{town.name}</h3>
                  <ReviewCard {...review} />
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
