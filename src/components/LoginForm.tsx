import { useState, type SyntheticEvent } from "react";

import { loginToDevii } from "../api/auth";
import { setAccessToken } from "../api/tokenStorage";
import { deviiConfig } from "../config";

import "./LoginForm.css";

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
      <form onSubmit={handleLogin}>
        {error && <p className="error-message">{error}</p>}
        {loading && <p>Signing in...</p>}
        {!loading && (
          <>
            <p>
              Sign in to your Devii account to start querying your GraphQL API.
            </p>
            <div className="form-container">
              <label htmlFor="login">Username</label>
              <input
                id="login"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default LoginForm;
