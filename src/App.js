import "./App.css";
import React from "react";
import { RoutesComponent } from "./Routes";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/header";
import { Box } from "@mui/material";

const App = () => {
  return (
    <div>
      <Header />
      <Box sx={{marginTop:10}}> {RoutesComponent()}</Box>
    </div>
  );
};

export default App;
