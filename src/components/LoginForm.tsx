import { useState, type SyntheticEvent } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { loginToDevii } from "../api/auth";
import { setAccessToken } from "../api/tokenStorage";
import { deviiConfig } from "../config";

interface LoginFormProps {
  onLoginSuccess: () => void; // Notify parent after successful authentication
}

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
  // Devii expects the value 'login', 'password', and 'tenantid' as keys in the request body
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (
    e: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    setError(null);
    setLoading(true);

    try {
      // Send POST request to the API with the login credentials
      const data = await loginToDevii({
        login,
        password,
        tenantid: deviiConfig.tenantId,
      }); // Authenticate with Devii

      if (!data.access_token) {
        setError("Invalid username or password."); // Handle missing token
        return;
      }

      // Store the access token (e.g., in localStorage for persistent access)
      setAccessToken(data.access_token);
      onLoginSuccess(); // Notify App of successful login
    } catch {
      // Handle invalid credentials
      setError("Unable to log in. Please try again."); // Handle request failure      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleLogin}>
        {error && <Typography color="error">{error}</Typography>}
        {loading && <Typography>Signing in...</Typography>}
        {!loading && (
          <>
            <Typography>
              Sign in to your Devii account to start querying your GraphQL API.
            </Typography>

            <Stack spacing={3} sx={{ mt: 6 }}>
              <TextField
                label="Username"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />

              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </>
  );
};

export default LoginForm;
