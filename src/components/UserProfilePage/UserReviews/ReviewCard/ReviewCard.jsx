import React from "react";
import Avatar from "../../../common/Avatar/Avatar";
import Rating from "@material-ui/lab/Rating";

import "../../../../styles/components/ReviewCard.scss";

function ReviewCard({ user, creation_date, rate, description }) {
  const author = { ...user };

  return (
    <div className="reviewcard">
      {author.avatar && <Avatar userAvatar={author.avatar} />}
      <div className="reviewcard__body">
        <header className="reviewcard__header">
          <div className="reviewcard_stars">
            <h4>{author.username}</h4>
            <Rating name="read-only" value={rate || 0} readOnly />
            <span>{creation_date}</span>
          </div>
        </header>
        <q className="reviewcard__copy"> {description} </q>
      </div>
    </div>
  );
}

export default ReviewCard;
