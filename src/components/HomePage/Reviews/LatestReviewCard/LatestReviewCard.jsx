import React from "react";
import Avatar from "../../../common/Avatar/Avatar";
import Rating from "@material-ui/lab/Rating";

import "../../../../styles/components/ReviewCard.scss";

function LatestReviewCard({ reviewInfo }) {
  const author = { ...reviewInfo.user };
  const townInfo = { ...reviewInfo.town };

  return (
    <div className="reviewcard">
      <Avatar userInfo={author.avatar} />
      <div className="reviewcard__body">
        <header className="reviewcard__header">
          <div className="reviewcard_stars">
            <h4>
              {townInfo.name},{townInfo.state}
            </h4>
            <Rating name="read-only" value={reviewInfo.rate || 0} readOnly />
          </div>
        </header>
        <q className="reviewcard__copy"> {reviewInfo.description} </q>
        <div className="author">
          <cite>- {author.username}</cite>
        </div>
      </div>
    </div>
  );
}

export default LatestReviewCard;
