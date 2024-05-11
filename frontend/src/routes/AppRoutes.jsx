// all routing parts are here

// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConstant } from "./AppRoutesConstants";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routesConstant.homepage.path} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
