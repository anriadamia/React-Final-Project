import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategoryProducts, useCategoryProducts } from "../../../redux";
import { CategoryProductList } from "./CategoryProductList";
import { Paginate } from "./Paginate";
import { Sort } from "./Sort";

export const CategoryProducts = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { products} = useCategoryProducts();
  useEffect(() => {
    dispatch(
      fetchCategoryProducts(`${categoryName}?page=1&size=3&sort=name,asc`)
    );
  }, [categoryName]);
  return (
    <Box>
      <Sort />
      <CategoryProductList products={products} />
      <Paginate />
    </Box>
  );
};
