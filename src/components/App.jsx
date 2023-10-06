import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Home from "../pages/Home";
const Catalog = React.lazy(() => import("../pages/Catalog"));
const Favorites = React.lazy(() => import("../pages/Favorites"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};

export default App;