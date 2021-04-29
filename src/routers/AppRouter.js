import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import AuthenticatedRouter from "./AuthenticatedRouter";
import NoAuthenticatedRouter from "./NoAuthenticatedRouter";

function AppRouter({ mostLikedTowns, latestReviews }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <Router>
      <>
        <div className="content-wrapper">
          <Switch>
            {user ? (
              <AuthenticatedRouter
                userInfo={user}
                mostLikedTowns={mostLikedTowns}
                latestReviews={latestReviews}
              />
            ) : (
              <NoAuthenticatedRouter
                userInfo={user}
                mostLikedTowns={mostLikedTowns}
                latestReviews={latestReviews}
              />
            )}
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default AppRouter;
