import React from "react";
import Avatar from "./Avatar";

import "../styles/components/ReviewCard.scss";

function ReviewCard({ reviewInfo }) {
  return (
    <div className="reviewcard">
      <Avatar userInfo={reviewInfo.user} />
      <div className="reviewcard__body">
        <header className="reviewcard__header">
          <h4>
            {reviewInfo.townName} - <span>★</span> {reviewInfo.rate}
          </h4>
        </header>
        <p className="reviewcard__copy">{reviewInfo.description}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
