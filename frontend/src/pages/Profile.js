import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { getToken, getUser } from "../utils/Common";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const getUserDetails = () => {
    const UserID = getUser();
    const userId = "";
    const accountId = "";

    axios
      .post(
        `http://${process.env.REACT_APP_BACKEND_API}/user`,
        [
          {
            UserID,
          },
        ],
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then(function (response) {
        setEmail(response?.data?.[0]?.Email);
        setAddress(response?.data?.[0]?.Address);
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
    setEmail("test@email.com");
    setAddress("blk 100 singapore");
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const user = getUser();
    axios
      .post(
        `http://${process.env.REACT_APP_BACKEND_API}/user/update`,
        [
          {
            user,
            email,
            address,
          },
        ],
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
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
            value={email}
            onChange={handleEmailChange}
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            name="address"
            label="Address"
            id="address"
            value={address}
            onChange={handleAddressChange}
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
