import { Avatar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInitials, isUserAdmin } from "../../application";
import { logoutUser, useUserInfo } from "../../redux";

export const Usericon = () => {
  const userData = useUserInfo();
  const [anchor, setAnchor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box>
      <IconButton
        onClick={(e) => {
          setAnchor(e.currentTarget);
        }}
      >
        <Avatar>
          {getUserInitials(userData?.firstName, userData?.lastName)}
        </Avatar>
      </IconButton>
      <Box>
        <Menu
          anchorEl={anchor}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          open={Boolean(anchor)}
          onClose={() => setAnchor(null)}
        >
          {!!userData ? (
            <MenuItem onClick={() => dispatch(logoutUser())}>
              <Button>logout</Button>
            </MenuItem>
          ) : (
            <Box>
              <MenuItem onClick={() => navigate("/login")}>
                <Button>login</Button>
              </MenuItem>
              <MenuItem onClick={() => navigate("/register")}>
                <Button>register</Button>
              </MenuItem>
            </Box>
          )}
          {isUserAdmin(userData) && (<MenuItem onClick={() => {}}>
            <Button>Add Product</Button>
            </MenuItem>)}
        </Menu>
      </Box>
    </Box>
  );
};
