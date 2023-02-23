import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchSingleProduct, useProductLoading, useSingleProduct } from "../../../redux";
import { LoadingWrapper } from "../../shared/Loading";

const styles = {
  mainStyle: {
    display: "flex",
    
  },
  photoStyle: {
    borderRadius: "10px",
    width: "400px",
  },
};
export const SingleProduct = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const isProductLoading = useProductLoading();
  const singleProduct = useSingleProduct();
  useEffect(() => {
    dispatch(fetchSingleProduct({ id: state.id, category: categoryName }));
  }, [state.id]);
  return (
    <LoadingWrapper isLoading={isProductLoading }>
    <div style={styles.mainStyle}>
      <Box>
        <Typography>
          <img src={singleProduct?.image} style={styles.photoStyle} />
        </Typography>
      </Box>
      <Box margin={"40px 30px"}>
        <Typography paddingTop="10px"  fontSize={"24px"}>{singleProduct?.name}</Typography>
        <Typography paddingTop="10px"  fontSize={"24px"}>Price:{singleProduct?.price}$</Typography>
        <Typography paddingTop="10px" fontSize={"24px"}>Brand:{singleProduct?.brand}</Typography>
        <Typography paddingTop="10px" fontSize={"24px"}>About Product:{singleProduct?.description}</Typography>
      </Box>
    </div>
    </LoadingWrapper>
  );
};

export default SingleProduct;
