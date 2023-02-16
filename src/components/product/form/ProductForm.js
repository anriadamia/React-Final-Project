import React from "react";

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
      error: "",
      validateInput: (description) =>
        description.length > 1
          ? null
          : "description should have at least 2 characters",
    },
    category: {
      value: selectedProduct?.category || "",
      required: true,
      error: "",
      validateInput: (category) =>
        category.length > 1
          ? null
          : "category shoould have at least 2 characters",
    },
    brand: {
      value: selectedProduct?.brand || "",
      required: true,
      error: "",
      validateInput: (price) =>
        price > 0 ? null : "price should be positive number",
    },
  };
};

export const ProductForm = () => {
  return <div>ProductForm</div>;
};

