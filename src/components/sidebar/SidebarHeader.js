import { Box, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import pic from "./Image/Logo.webp";

const StyledHeader = styled(Box)(() => ({
  padding: "15px 15px",
  height: "64px",
  display: "flex",
  alignItems: "center",
}));

export const SidebarHeader = () => {
  return (
    <StyledHeader marginTop="10px">
      <Link to="/">
        <img src={pic}   style={{ objectFit: "contain", borderRadius:"10px", height:"100px", width:"100%" }}   />
      </Link>
    </StyledHeader>
  );
};
