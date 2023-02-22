import { Box, styled } from "@mui/material";
import React from "react";

const StyledHeader = styled(Box)(() => ({
  padding: "15px 15px",
  background: "teal",
  height:"64px",
  display:"flex",
  alignItems:"center",
}));

export const SidebarHeader = () => {
  return <StyledHeader>SomeLogo</StyledHeader>;
};
