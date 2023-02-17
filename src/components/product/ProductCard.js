import { Card, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <Grid item>
      <Card>
        <Link to={`/singleproductpage`}>
          <img
            src={image}
            alt={`${category}-${name}`}
            width="100%"
            height="200px"
            style={{ objectFit: "cover" }}
          />
          <h1>{name}</h1>
        </Link>
      </Card>
    </Grid>
  );
};
