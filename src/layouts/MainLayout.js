import React from 'react';
import { Stack } from "@mui/material";
// import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import { Outlet } from 'react-router-dom';
// import AlertMsg from '../components/AlertMsg';
import HomePage from './HomePage';

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
        {/* <MainHeader /> */}
        {/* <AlertMsg /> */}
        <HomePage />
        {/* <Outlet /> */}
        {/* <Box sx={{ flexGrow: 1 }} /> */}
        <MainFooter />
    </Stack>
  );
}

export default MainLayout;
