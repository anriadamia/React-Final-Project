import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import { useForm } from "../../../application/hook/useForm";

const generateAddProductFormValues = (selectedProduct) => {
  return {
    name: {
      value: selectedProduct?.name || "",
      required: true,
      error: "",
      validateInput: (name) =>
        name.length > 1 ? null : "name should have at least 2 characters",
    },
    description: {
      value: selectedProduct?.description || "",
      required: true,
      eerror: "",
      validateInput: (description) =>
        description.length > 1
          ? null
          : "description should have at least 2 character",
    },
    category: {
      value: selectedProduct?.category || "",
      required: true,
      error: "",
      validateInput: (category) =>
        category.length > 1
          ? null
          : "category should have at least 2 character",
    },
    brand: {
      value: selectedProduct?.brand || "",
      required: true,
      error: "",
      validateInput: (brand) =>
        brand.length > 1 ? null : "brand should have at least 2 character",
    },

    price: {
      value: selectedProduct?.price || 0,
      required: true,
      error: "",
      validateInput: (price) =>
        price > 0 ? null : "price should be positive number",
    },
  };
};

export const ProductForm = () => {
  const { formValues: productFormValues, onInputChange } = useForm({
    defaultFormValues: generateAddProductFormValues(),
  });

  const onSaveProduct = () => {};
  return (
    <FormControl fullWidth>
      <TextField
        name="name"
        value={productFormValues.name.value}
        onChange={onInputChange}
        error={!!productFormValues.name.error}
        helperText={productFormValues.name.error}
        label="name"
      />
      <TextField
        name="description"
        value={productFormValues.description.value}
        onChange={onInputChange}
        error={!!productFormValues.description.error}
        helperText={productFormValues.description.error}
        label="description"
      />
      <TextField
        name="category"
        value={productFormValues.category.value}
        onChange={onInputChange}
        error={!!productFormValues.category.error}
        helperText={productFormValues.category.error}
        label="category"
      />
      <TextField
        name="brand"
        value={productFormValues.brand.value}
        onChange={onInputChange}
        error={!!productFormValues.brand.error}
        helperText={productFormValues.brand.error}
        label="brand"
      />
      <TextField
        name="price"
        value={productFormValues.price.value}
        onChange={onInputChange}
        error={!!productFormValues.price.error}
        helperText={productFormValues.price.error}
        label="price"
      />
      <Button onClick={onSaveProduct}>save</Button>
    </FormControl>
  );
};
