import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import DashboardRouter from "./DashboardRouter";
import LoginPage from "../pages/LoginPage";

function AppRouter({ userInfo, mostLikedTowns, latestReviews }) {
  return (
    <Router>
      <>
        <div className="content-wrapper">
          <Switch>
            <Route exact path="/login" component={() => <LoginPage />} />
            <Route
              path="/"
              component={() => (
                <DashboardRouter
                  userInfo={userInfo}
                  mostLikedTowns={mostLikedTowns}
                  latestReviews={latestReviews}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default AppRouter;
