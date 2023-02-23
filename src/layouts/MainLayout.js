import React from 'react';
import { Stack } from "@mui/material";
// import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import { Outlet } from 'react-router-dom';
// import AlertMsg from '../components/AlertMsg';
import HomePage from '../pages/HomePage';

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
        <HomePage />
        <MainFooter />
    </Stack>
  );
}

export default MainLayout;
