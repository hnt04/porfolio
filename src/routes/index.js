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
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="account" element={<AccountPage />} />
        <Route path="me" element={<Profile />} />
        <Route path="users/:userId" element={<MemberProfile />} />
        <Route path="member" element={<MemberList />} />
        <Route path="commendation" element={<CommendationBoardPage />} />
        <Route path="tasks" element={<TaskAllList />} />
        <Route path="tasks/me" element={<TasksPage />} />
        <Route path="users" element={
            <AuthRequiredHR>
              <UserMainPage />
            </AuthRequiredHR>
          }></Route> */}
      </Route>

    </Routes>
  );
}

export default Router;
