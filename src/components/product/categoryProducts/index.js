import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useQueryParams } from "../../../application";
import { fetchCategoryProducts, useCategoryProducts } from "../../../redux";
import { CategoryProductList } from "./CategoryProductList";
import { Paginate } from "./Paginate";
import { Sort } from "./Sort";

export const CategoryProducts = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { products } = useCategoryProducts();
  const { value:sort, changeQueryValue: changeSort } = useQueryParams("sort");
  const { value:page, changeQueryValue: changePage } = useQueryParams("page");
  useEffect(() => {
    dispatch(
      fetchCategoryProducts(`${categoryName}?page=1&size=3&sort=${sort}`)
    );
  }, [categoryName, sort]);
  return (
    <Box>
      <Sort sort={sort} changeSort={changeSort}/>
      <CategoryProductList products={products} />
      <Paginate />
    </Box>
  );
};
