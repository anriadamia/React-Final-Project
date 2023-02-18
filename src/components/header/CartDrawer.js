import { Box, Drawer, styled, Typography } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(() => ({
  width: 400,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding:"5px 10px",
}));

export const CartDrawer = ({
  isCartDrawerOpen,
  setIsCartDrawerOpen,
  cartItems,
}) => {
  return (
    <Drawer
      open={isCartDrawerOpen}
      onClose={() => setIsCartDrawerOpen(false)}
      anchor="bottom"
    >
      {cartItems.map((item) => {
        const { product, quantity } = item;
        const { price, name, _id, image } = product;
        return (
          <StyledBox key={_id}>
            <img src={image} width="50px" height="50px" style={{objectFit:"cover"}}/>
            <Typography>{name}</Typography>
            <Typography>{quantity}</Typography>
            <Typography>total:${price * quantity}</Typography>
          </StyledBox>
        );
      })}
    </Drawer>
  );
};
