import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Header from "../layout/Header";
import Brand from "../components/Brand";
import Navbar from "../components/Navbar";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";

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
          path="/details/:townId"
          component={() => (
            <DetailsPage
              userInfo={userInfo}
              mostLikedTowns={mostLikedTowns}
              latestReviews={latestReviews}
            />
          )}
        />
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

        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default DashboardRouter;
