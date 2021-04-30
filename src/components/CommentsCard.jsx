import React from "react";
import Avatar from "./Avatar";
import Rating from "@material-ui/lab/Rating";
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

import "../styles/components/CommentsCard.scss";
import { userInfo } from "../dummyData";

function CommentsCard({ reviewInfo }) {
  return (
    <div className="commentscard">
      <Avatar userInfo={reviewInfo.user} />
      <div className="commentscard__body">
        <header className="commentscard__header">
          <div className="commentscard_stars">
            <h4>{userInfo.username}</h4>{" "}
            <Rating name="read-only" value={reviewInfo.rate} readOnly />
          </div>
        </header>
        <p className="commentscard__copy"> {reviewInfo.description} </p>
      </div>
    </div>
  );
}

export default CommentsCard;