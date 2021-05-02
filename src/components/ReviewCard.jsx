import React from "react";
import Avatar from "./Avatar";
import Rating from "@material-ui/lab/Rating";

import "../styles/components/ReviewCard.scss";

function ReviewCard({ reviewInfo }) {
  const author = { ...reviewInfo.user };
  const creation_date = new Date(reviewInfo.creation_date).toDateString();

  return (
    <div className="reviewcard">
      <Avatar userAvatar={author.avatar} />
      <div className="reviewcard__body">
        <header className="reviewcard__header">
          <div className="reviewcard_stars">
            <h4>{author.username}</h4>
            <Rating name="read-only" value={reviewInfo.rate || 0} readOnly />
            <span>{creation_date}</span>
          </div>
        </header>
        <q className="reviewcard__copy"> {reviewInfo.description} </q>
        <div className="author">{/* <cite>- {author.username}</cite> */}</div>
      </div>
    </div>
  );
}

export default ReviewCard;
