import React from "react";
import { Route, Switch, withRouter } from "react-router";

import Header from "../layout/Header";
import Brand from "../components/Brand";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";

function NoAuthenticatedRouter({ userInfo, mostLikedTowns, latestReviews }) {
  return (
    <>
      <Header>
        <Brand />
        <Navbar userInfo={null} />
      </Header>

      <Switch>
        <Route
          exact
          path="/login"
          render={() => (
            <LoginPage>
              <LoginForm />
            </LoginPage>
          )}
        />
        <Route
          exact
          path="/register"
          render={() => (
            <LoginPage>
              <RegisterForm />
            </LoginPage>
          )}
        />

        <Route
          exact
          path="/home"
          render={() => (
            <HomePage
              mostLikedTowns={mostLikedTowns}
              latestReviews={latestReviews}
            />
          )}
        />

        <Route exact path="/detail/:id" render={withRouter(DetailPage)} />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default NoAuthenticatedRouter;
