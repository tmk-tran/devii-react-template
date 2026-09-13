import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "./api/apolloClient.ts";

import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from "./theme/theme.ts";
import { CssBaseline, useMediaQuery } from "@mui/material";

import "@fontsource/nunito";
import "@fontsource/nunito/600.css";
import App from "./App.tsx";

const Root = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = getTheme(prefersDarkMode ? "dark" : "light");

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
