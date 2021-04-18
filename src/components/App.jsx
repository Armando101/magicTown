import React from "react";
import HomePage from "../pages/HomePage";
import { userInfo, mostLikedTowns, latestReviews } from "../dummyData";

function App() {
  return (
    <>
      <HomePage
        userInfo={userInfo}
        mostLikedTowns={mostLikedTowns}
        latestReviews={latestReviews}
      />
    </>
  );
}

export default App;
