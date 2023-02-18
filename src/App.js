import "./App.css";
import React, { useEffect } from "react";
import { RoutesComponent } from "./Routes";
import { Header } from "./components/header";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchHomePageProducts, useUserInfo } from "./redux";
import { fetchCart } from "./redux/slices/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const userInfo = useUserInfo();
  useEffect(() => {
    dispatch(fetchHomePageProducts());
  }, []);
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchCart(userInfo._id));
    }
  });
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: 10 }}> {RoutesComponent()}</Box>
    </div>
  );
};

export default App;
