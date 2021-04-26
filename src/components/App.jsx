import React, { useState } from "react";
import { UserContext } from "../context/UserContext.js";
import { userInfo, mostLikedTowns, latestReviews } from "../dummyData";
import AppRouter from "../routers/AppRouter";

function App() {
  const [user, setUser] = useState(UserContext);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter
        userInfo={userInfo}
        mostLikedTowns={mostLikedTowns}
        latestReviews={latestReviews}
      />
    </UserContext.Provider>
  );
}

export default App;
