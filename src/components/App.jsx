import React from "react";
import { userInfo, mostLikedTowns, latestReviews } from "../dummyData";
import AppRouter from "../routers/AppRouter";

function App() {
  return (
    <AppRouter
      userInfo={userInfo}
      mostLikedTowns={mostLikedTowns}
      latestReviews={latestReviews}
    />
  );
}

export default App;
