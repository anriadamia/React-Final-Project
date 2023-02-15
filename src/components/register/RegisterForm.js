import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../application/hook/useForm";
import { authentificateUser } from "../../redux/slices/userSlice";

export const generateRegisterFormValues = () => {
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
        lastName.length > 1
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
    defaultFormValues: generateRegisterFormValues(),
  });

  const dispatch = useDispatch();

  const onRegister = (e) => {
    e.preventDefault();
    const firstName = formValues.firstName.value;
    const lastName = formValues.lastName.value;
    const email = formValues.email.value;
    const password = formValues.password.value;
    dispatch(
      authentificateUser({
        formValues: {
          firstName,
          lastName,
          email,
          password,
        },
        isLogin: false,
      })
    );
  };
  return (
    <FormControl fullWidth>
      <TextField
        variant="outlined"
        name="firstName"
        label="First Name"
        value={formValues.firstName.value}
        onChange={onInputChange}
        error={!!formValues.firstName.error}
        helperText={formValues.firstName.error}
      />
      <TextField
        variant="outlined"
        name="lastName"
        label="Last Name"
        value={formValues.lastName.value}
        onChange={onInputChange}
        error={!!formValues.lastName.error}
        helperText={formValues.lastName.error}
      />
      <TextField
        variant="outlined"
        name="email"
        label="Email Address"
        value={formValues.email.value}
        onChange={onInputChange}
        error={!!formValues.email.error}
        helperText={formValues.email.error}
      />
      <TextField
        variant="outlined"
        name="password"
        label="Password"
        value={formValues.password.value}
        onChange={onInputChange}
        error={!!formValues.password.error}
        helperText={formValues.password.error}
      />
      <Button onClick={onRegister}>Register</Button>
    </FormControl>
  );
};
