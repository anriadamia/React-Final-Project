import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../application";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product, isUpdating, id }, { rejectWithValue, dispatch }) => {
    try {
      const endpoint = isUpdating ? `/products/${id}` : "/products";
      const method = isUpdating ? "put" : "post";
      const { data } = await axiosInstance[method](endpoint, { product });
      dispatch(fetchHomePageProducts());
      return data;
    } catch (error) {
      return rejectWithValue("error during saving product");
    }
  }
);

export const fetchHomePageProducts = createAsyncThunk(
  "product/fetchHomePageProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/products");
      return data;
    } catch (error) {
      return rejectWithValue("error during fetching products");
    }
  }
);

export const fetchCategoryProducts = createAsyncThunk(
  "product/fetchCategoryProducts",
  async (url,{rejectWithValue}) => {
    try {
      const { data } = await axiosInstance.get(`/products/categories/${url}`);
      return data;
    } catch (error) {
      return rejectWithValue("error during fetching category products")
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    homePageProducts: [],
    error: null,
    selectedProduct: null,
    categories: [],
    categoryProducts:{},
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveProduct.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(saveProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchHomePageProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomePageProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageProducts = action.payload.products;
      state.categories = action.payload.categories;
      state.error = null;
    });
    builder.addCase(fetchHomePageProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchCategoryProducts.pending,(state)=>{
      state.loading=true;
    });
    builder.addCase(fetchCategoryProducts.fulfilled,(state,action)=>{
      state.loading=false;
      state.categoryProducts=action.payload;

    });
    builder.addCase(fetchCategoryProducts.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.payload ;
    });
  },
});

export const productReducer = productSlice.reducer;
export const { setSelectedProduct } = productSlice.actions;
