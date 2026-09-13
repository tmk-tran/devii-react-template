import { useState } from "react";

import { Box, Divider, Link, Stack, Typography } from "@mui/material";

import { configError } from "./config";
import { getAccessToken } from "./api/tokenStorage";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";

import deviiLogo from "./assets/devii-logo500.png";

import AvailableQueries from "./components/AvailableQueries";

function App() {
  const [hasAuthData, setHasAuthData] = useState(
    Boolean(getAccessToken()), // Initialize from existing token
  );

  if (configError) {
    return (
      <Box component="main">
        <Typography variant="h4" component="h1">
          Devii React Template
        </Typography>

        <Typography color="error">{configError}</Typography>
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        textAlign: "center",
        p: 4,
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Logo/title row */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
          mb: 5,
        }}
      >
        <Stack
          sx={{
            p: "0.5rem 0.75rem",
            borderRadius: 2,
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? "#060A2D" : "transparent",
          }}
        >
          <Box
            component="img"
            src={deviiLogo}
            alt="Devii"
            sx={{
              width: 180,
            }}
          />
        </Stack>

        <Typography variant="h4" component="h1">
          React Template
        </Typography>
      </Stack>

      {!hasAuthData ? (
        <LoginForm
          onLoginSuccess={() => setHasAuthData(true)} // Show authenticated UI after login
        />
      ) : (
        <Stack direction="column" spacing={3}>
          <Typography sx={{ color: "green", fontSize: 18 }}>
            Success! Your Devii API access token is stored in localStorage
          </Typography>

          <Link
            href="https://docs.devii.io/docs/category/connect-to-your-data"
            target="_blank"
            rel="noopener noreferrer"
            color="info"
          >
            Connect to your data
          </Link>

          <LogoutButton onLogout={() => setHasAuthData(false)} />

          <Divider sx={{ bgcolor: "gray" }} />

          <AvailableQueries />
        </Stack>
      )}
    </Box>
  );
}

export default App;
