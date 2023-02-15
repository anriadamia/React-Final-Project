import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useForm } from "../../application/hook/useForm";

const generateRegisterFormValues = () => {
  return {
    firstName: {
      value: "",
      required: true,
      error: "",
      validateInput: (name) =>
        name.length > 3 ? null : "name should have at least 3 characters",
    },
    lastName: {
      value: "",
      required: true, 
      error: "",
      validateInput: (lastName) =>
        lastName.length > 3
          ? null
          : "last name should have at least 1 characters",
    },
    email: {
      value: "",
      required: true,
      error: "",
      validateInput: (email) =>
        email.includes("gmail.com") ? null : "email isn't valid",
    },
    password: {
      value: "",
      required: true,
      error: "",
      validateInput: (password) =>
        password.length > 6
          ? null
          : "password should have at least 6 characters",
    },
  };
};

export const RegisterForm = () => {
  const { formValues, onInputChange } = useForm({
    defaultFormValues:generateRegisterFormValues(),
  });
  return (
    <FormControl fullWidth>
      <TextField
        name="firstName"
        label="First Name"
        value={formValues.firstName.value}
        onChange={onInputChange}
        error={!!formValues.firstName.error}
        helperText={formValues.firstName.error}
      />
    </FormControl>
  );
};
