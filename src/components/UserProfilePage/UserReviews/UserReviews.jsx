import React, { useEffect, useState } from "react";

import ProfileCard from "../../common/ProfileCard/ProfileCard";
import ReviewCard from "./ReviewCard/ReviewCard";

import getUserReviews from "../../../services/reviews/getUserReviews";

import "../../../styles/components/Favorites.scss";
import { useFetch } from "../../../hooks/useFetch";

const UserReviews = ({ uid, description }) => {
  const [userReviews, setUserReviews] = useState([{}]);

  const { data, loading } = useFetch(getUserReviews, [uid]);

  useEffect(() => {
    loading != true && setUserReviews(data);
  }, [data]);

  return (
    <section className="favorites">
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

export default UserReviews;
