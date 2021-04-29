import React from "react";
import { Route, Switch, withRouter } from "react-router";

import Header from "../layout/Header";
import Brand from "../components/Brand";
import Navbar from "../components/Navbar";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

function AuthenticatedRouter({ userInfo, mostLikedTowns, latestReviews }) {
  return (
    <>
      <Header>
        <Brand />
        <Navbar />
      </Header>

      <Switch>
        <Route
          exact
          path="/home"
          render={() => (
            <HomePage
              userInfo={userInfo}
              mostLikedTowns={mostLikedTowns}
              latestReviews={latestReviews}
            />
          )}
        />

        <Route exact path="/detail/:id" render={() => withRouter(DetailPage)} />

        <Route exact path="/profile" />
        <Route exact path="/profile/reviews" />
        <Route exact path="/profile/favorites" />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default AuthenticatedRouter;
