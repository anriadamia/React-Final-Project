import {
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isUserAdmin } from "../../application";
import { setSelectedProduct, useUserInfo } from "../../redux";

const StyledCardContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 2px",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const ProductCard = ({
  name,
  _id,
  image,
  price,
  description,
  category,
  brand,
  averageRating,
}) => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const onEdit = () => {
    dispatch(
      setSelectedProduct({
        name,
        _id,
        image,
        price,
        description,
        category,
        brand,
        averageRating,
      })
    );
    navigate(`/products/edit/${name}`);
  };

  return (
    <Grid item>
      <Card>
        <Link to={`/singleproductpage`} style={{ textDecoration: "none" }}>
          <img
            src={image}
            alt={`${category}-${name}`}
            width="100%"
            height="200px"
            style={{ objectFit: "cover" }}
          />
          <StyledCardContent>
            <Typography>{name}</Typography>
            <Typography>{price}$ </Typography>
          </StyledCardContent>
        </Link>
        <CardActions>
          <Rating value={averageRating} />
          <StyledBox>
            <Button>Add to card</Button>
            {isUserAdmin(userInfo) && <Button onClick={onEdit}>Edit</Button>}
          </StyledBox>
        </CardActions>
      </Card>
    </Grid>
  );
};
