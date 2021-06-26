import React from "react";

import DashboardDrawer from "./DashboardDrawer/DashboardDrawer";

// import LocationCityIcon from "@material-ui/icons/LocationCity";
// import RateReviewIcon from "@material-ui/icons/RateReview";

import "./AdminDashboard.scss";

function AdminDashboard({ children }) {
  return (
    <>
      <DashboardDrawer>{children}</DashboardDrawer>
    </>
  );
}

export default AdminDashboard;
