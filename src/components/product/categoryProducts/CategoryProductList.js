import { Grid } from "@mui/material";
import React from "react";
import { useProductLoading } from "../../../redux";
import { GridComponent, LoadingWrapper } from "../../shared";
import { ProductCard } from "../ProductCard";

export const CategoryProductList = ({ products }) => {
  const isSideBarProductLoading=useProductLoading();
  return (
    <LoadingWrapper isLoading={isSideBarProductLoading}>
    <GridComponent>
      {products?.map((product) => {
        return (
          <React.Fragment key={product._id}>
            <ProductCard {...product} product={product} />
          </React.Fragment>
        );
      })}
    </GridComponent>
    </LoadingWrapper>
  );
};
