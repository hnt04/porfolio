import * as React from "react";
import { Routes, Route } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <HomePage />
        }
      >
      </Route>

    </Routes>
  );
}

export default Router;
