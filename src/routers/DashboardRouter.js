import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Header from "../layout/Header";
import Brand from "../components/Brand";
import Navbar from "../components/Navbar";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";

function DashboardRouter({ userInfo, mostLikedTowns, latestReviews }) {
  return (
    <>
      <Header>
        <Brand />
        <Navbar userInfo={userInfo} />
      </Header>

      <Switch>
        {/* <Route
          exact
          path="/details/:townId"
          component={() => (
            <DetailsPage
              userInfo={userInfo}
              mostLikedTowns={mostLikedTowns}
              latestReviews={latestReviews}
            />
          )}
        /> */}
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
          path="/detail/:id"
          exact
          render={(props) => <DetailPage {...props} />}
        />
        <Route component={() => <h2>Not Found</h2>} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default DashboardRouter;