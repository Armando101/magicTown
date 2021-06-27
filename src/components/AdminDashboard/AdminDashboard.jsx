import React from "react";

import DashboardDrawer from "./DashboardDrawer/DashboardDrawer";

import "./AdminDashboard.scss";

function AdminDashboard({ children }) {
  return (
    <>
      <DashboardDrawer>{children}</DashboardDrawer>
    </>
  );
}

export default AdminDashboard;
