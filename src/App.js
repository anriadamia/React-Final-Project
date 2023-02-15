import "./App.css";
import React from "react";
import { RoutesComponent } from "./Routes";
import {Routes, Route, Link} from "react-router-dom";

const App = () => {
  return <div>{RoutesComponent()}</div>;
};

export default App;
