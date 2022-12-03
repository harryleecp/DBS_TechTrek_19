import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { getToken, setUserSession } from "../utils/Common";

export default function Profile() {
  const getUserDetails = () => {
    const userId = "";
    const accountId = "";

    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/account`, {
        AccountID: accountId,
        UserID: userId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!getToken()) {
      window.location.href = "/dashboard";
    }

    getUserDetails();
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const email = event?.target?.email?.value;
    const address = event?.target?.address?.value;
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/user/update`, {
        email,
        address,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Change User Information
        </Typography>
        <Box component="form" onSubmit={handleUpdate} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            name="address"
            label="Address"
            id="address"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
