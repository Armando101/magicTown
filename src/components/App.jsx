import React from "react";
import HomePage from "@pages/HomePage";
import { userInfo, mostLikedTowns, latestReviews } from "../dummyData";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailPage from "@pages/DetailPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
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
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
