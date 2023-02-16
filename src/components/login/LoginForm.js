import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../application/hook/useForm";
import { authentificateUser } from "../../redux/slices/userSlice";

const generateRegisterFormValues = () => {
  return {
    email: {
      value: "",
      required: true,
      error: null,
      validateInput: (email) =>
        email.includes("gmail.com") ? "" : "email isn't valid",
    },
    password: {
      value: "",
      required: true,
      error: null,
      validateInput: (password) =>
        password.length > 6 ? "" : "password should have at least 6 characters",
    },
  };
};

export const LoginForm = () => {
  const { formValues: loginFormValues, onInputChange } = useForm({
    defaultFormValues: generateRegisterFormValues(),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    const email = loginFormValues.email.value;
    const password = loginFormValues.password.value;
    dispatch(
      authentificateUser({
        isLogin: true,
        formValues: {
          email,
          password,
        },
      })
    )
      .unwrap()
      .then(() => navigate("/"));
  };
  return (
    <FormControl fullWidth>
      <TextField
        name="email"
        label="email"
        value={loginFormValues.email.value}
        onChange={onInputChange}
        error={!!loginFormValues.email.error}
        helperText={loginFormValues.email.error}
      />
      <TextField
        name="password"
        type="password"
        label="password"
        value={loginFormValues.password.value}
        onChange={onInputChange}
        error={!!loginFormValues.password.error}
        helperText={loginFormValues.password.error}
      />
      <Button onClick={onLogin}>Login</Button>
    </FormControl>
  );
};
