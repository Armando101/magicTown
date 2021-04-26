import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Header from "../layout/Header";
import Brand from "../components/Brand";
import Navbar from "../components/Navbar";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

function DashboardRouter({ userInfo, mostLikedTowns, latestReviews }) {
  return (
    <>
      <Header>
        <Brand />
        <Navbar userInfo={userInfo} />
      </Header>

      <Switch>
        <Route
          exact
          path="/home"
          component={() => (
            <HomePage
              userInfo={userInfo}
              mostLikedTowns={mostLikedTowns}
              latestReviews={latestReviews}
            />
          )}
        />

        <Route
          exact
          path="/details/:townId"
          component={() => (
            <DetailsPage
              userInfo={userInfo}
              mostLikedTowns={mostLikedTowns}
              latestReviews={latestReviews}
            />
          )}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default DashboardRouter;
