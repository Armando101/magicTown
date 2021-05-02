import React from "react";
import { Route, Switch, withRouter } from "react-router";

import Header from "../layout/Header";
import Brand from "../components/Brand";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import ResultPage from "../pages/ResultPage";
import FavoritePage from "../pages/FavoritePage";
import NotFoundPage from "../pages/NotFoundPage";
import UserProfilePage from "../pages/UserProfilePage";

function AuthenticatedRouter({ userInfo }) {
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
          render={() => <HomePage userInfo={userInfo} />}
        />

        <Route exact path="/detail/:id" render={withRouter(DetailPage)} />

        <Route exact path="/profile" component={UserProfilePage} />
        <Route exact path="/profile/favorites" component={FavoritePage} />

        <Route path="/search/:keyword" component={ResultPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default AuthenticatedRouter;
