import styled from "@emotion/styled";
import { AppBar, Badge, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Usericon } from "./Usericon";
import { BsCart2 } from "react-icons/bs";
import { useCart } from "../../redux";
import { CartDrawer } from "./CartDrawer";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const StyledAppBar = styled(AppBar)(() => ({
  background: "#fff",
  width: "calc(100%-255px)",
  padding: "0 37px 0 30px",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
}));

const StyledBadge = styled(Badge)(() => ({
  "&.MuiBadge-badge": {
    width: "20px",
    height: "21px",
    color: "#fff",
    background: "#F33451",
    top: "2px",
    right: "-3px",
  },
}));

export const Header = () => {
  const cartItems = useCart();
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const cartItemsQuantity = cartItems?.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  return (
    <Box>
      <StyledAppBar>
        <StyledToolBar>
          <Link to="/">
            <AiOutlineHome size={"35"} color={"#000000	"}></AiOutlineHome>
          </Link>
          <SearchBar />
          <Usericon />
          <Button onClick={() => setIsCartDrawerOpen(true)}>
            <StyledBadge badgeContent={cartItemsQuantity}>
              <BsCart2 size={30} />
            </StyledBadge>
          </Button>
          <CartDrawer
            cartItems={cartItems}
            isCartDrawerOpen={isCartDrawerOpen}
            setIsCartDrawerOpen={setIsCartDrawerOpen}
          />
        </StyledToolBar>
      </StyledAppBar>
    </Box>
  );
};
