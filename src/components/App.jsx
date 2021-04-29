import React, { useState } from "react";
import { UserContext } from "../context/UserContext.js";
import { mostLikedTowns, latestReviews } from "../dummyData";
import AppRouter from "../routers/AppRouter";

function App() {
  const [user, setUser] = useState(UserContext._currentValue);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter
        mostLikedTowns={mostLikedTowns}
        latestReviews={latestReviews}
      />
    </UserContext.Provider>
  );
}

export default App;
