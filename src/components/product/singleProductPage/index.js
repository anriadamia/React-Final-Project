import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchSingleProduct, useSingleProduct } from "../../../redux";

export const SingleProduct = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const singleProduct=useSingleProduct();
  useEffect(() => {
    dispatch(fetchSingleProduct({ id: state.id, category: categoryName }));
  }, [state.id]);
  return(
    <Box>
        <Typography>Product Name:{singleProduct?.name}</Typography>
        <Typography>Brand:{singleProduct?.brand}</Typography>
        <Typography>About Product:{singleProduct?.description}</Typography>
        <Typography>
            <img src={singleProduct?.image} width="400px"/>
        </Typography> 
    </Box>
  )
};

export default SingleProduct;
 