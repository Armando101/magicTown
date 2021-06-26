import React from "react";
import Avatar from "../../../common/Avatar/Avatar";
import Rating from "@material-ui/lab/Rating";

import "./CommentsCard.scss";

function CommentsCard({ reviewInfo }) {
  const author = { ...reviewInfo.user };
  return (
    <div className="commentscard">
      <Avatar userInfo={author.avatar} />
      <div className="commentscard__body">
        <header className="commentscard__header">
          <div className="commentscard_stars">
            <h4>{author.username}</h4>{" "}
            <Rating name="read-only" value={reviewInfo.rate || 0} readOnly />
          </div>
        </header>
        <p className="commentscard__copy"> {reviewInfo.description} </p>
      </div>
    </div>
  );
}

export default CommentsCard;
