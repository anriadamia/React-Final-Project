import { CircularProgress } from "@mui/material";
import React from "react";

export const Loading = () => {
  return(
<div style={{ display:"flex", justifyContent:"center"}}>
  <CircularProgress />
  </div>)
};

export const LoadingWrapper = ({ isLoading, children }) => {
  if (isLoading) {
    return <Loading />;
  }
  return children;
};
