import { useState } from "react";

import { configError } from "./config";
import { getAccessToken } from "./api/tokenStorage";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";

import deviiLogo from "./assets/devii-logo500.png";

import "./App.css";
import AvailableQueries from "./components/AvailableQueries";

function App() {
  const [hasAuthData, setHasAuthData] = useState(
    Boolean(getAccessToken()), // Initialize from existing token
  );

  if (configError) {
    return (
      <main className="app">
        <h1>Devii React Template</h1>

        <p className="error-message">{configError}</p>
      </main>
    );
  }

  return (
    <main className="app">
      <div className="app-title-row">
        <div className="app-logo-container">
          <img src={deviiLogo} alt="Devii" className="app-logo" />
        </div>

        <h1>React Template</h1>
      </div>

      {!hasAuthData ? (
        <LoginForm
          onLoginSuccess={() => setHasAuthData(true)} // Show authenticated UI after login
        />
      ) : (
        <div className="form-container">
          <p className="success-message">
            Success! Your Devii API access token is stored in localStorage
          </p>
          <a
            className="devii-docs-link"
            href="https://docs.devii.io/docs/category/connect-to-your-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect to your data
          </a>

          <LogoutButton onLogout={() => setHasAuthData(false)} />

          <hr className="divider" />

          <AvailableQueries />
        </div>
      )}
    </main>
  );
}

export default App;
