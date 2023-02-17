import "./App.css";
import React, { useEffect } from "react";
import { RoutesComponent } from "./Routes";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/header";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchHomePageProducts } from "./redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageProducts);
  }, []);
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: 10 }}> {RoutesComponent()}</Box>
    </div>
  );
};

export default App;
