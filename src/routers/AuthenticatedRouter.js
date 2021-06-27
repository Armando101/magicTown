import React from "react";
import { Route, Switch, withRouter } from "react-router";

import Header from "../components/common/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import DetailPage from "../components/DetailPage/DetailPage";
import ResultPage from "../components/ResultPage/ResultPage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import UserProfilePage from "../components/UserProfilePage/UserProfilePage";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import UsersTable from "../components/AdminDashboard/UsersView/UserTable/UsersTable";
import TownsTable from "../components/AdminDashboard/TownsView/TownTable/TownTable";
import ReviewsTable from "../components/AdminDashboard/ReviewsView/ReviewTable/ReviewTable";

function AuthenticatedRouter({ userInfo }) {
  return (
    <>
      <Switch>
        {userInfo.role != "Admin" ? (
          <>
            <Header />
            <Route
              exact
              path="/home"
              render={() => <HomePage userInfo={userInfo} />}
            />
            <Route exact path="/detail/:id" render={withRouter(DetailPage)} />
            <Route path="/profile" component={UserProfilePage} />
            <Route exact path="/search/:keyword" component={ResultPage} />
            <Route
              exact
              path="/"
              render={() => <HomePage userInfo={userInfo} />}
            />
          </>
        ) : (
          <>
            <Route
              exact
              path="/admin/dashboard"
              render={() => (
                <AdminDashboard>
                  <UsersTable />
                </AdminDashboard>
              )}
            />
            <Route
              exact
              path="/admin/dashboard/users"
              render={() => (
                <AdminDashboard>
                  <UsersTable />
                </AdminDashboard>
              )}
            />
            <Route
              exact
              path="/admin/dashboard/towns"
              render={() => (
                <AdminDashboard>
                  <TownsTable />
                </AdminDashboard>
              )}
            />
            <Route
              exact
              path="/admin/dashboard/reviews"
              render={() => (
                <AdminDashboard>
                  <ReviewsTable />
                </AdminDashboard>
              )}
            />
          </>
        )}
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default AuthenticatedRouter;
