import React from "react";
import { Route, Switch, withRouter } from "react-router";

import Header from "../components/common/Header/Header";
import Brand from "../components/common/Header/Brand/Brand";
import Navbar from "../components/common/Header/Navbar/Navbar";
import LoginForm from "../components/AuthPage/LoginForm/LoginForm";
import RegisterForm from "../components/AuthPage/RegisterForm/RegisterForm";

import AuthPage from "../components/AuthPage/AuthPage";
import HomePage from "../components/HomePage/HomePage";
import DetailPage from "../components/DetailPage/DetailPage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import ResultPage from "../components/ResultPage/ResultPage";

function NoAuthenticatedRouter() {
  return (
    <>
      <Header />

      <Switch>
        <Route
          exact
          path="/login"
          render={() => (
            <AuthPage>
              <LoginForm />
            </AuthPage>
          )}
        />
        <Route
          exact
          path="/register"
          render={() => (
            <AuthPage>
              <RegisterForm />
            </AuthPage>
          )}
        />

        <Route exact path="/home" render={() => <HomePage />} />

        <Route exact path="/detail/:id" render={withRouter(DetailPage)} />
        <Route path="/search/:keyword" component={ResultPage} />

        <Route exact path="/" render={() => <HomePage />} />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default NoAuthenticatedRouter;
