import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#00A79D",
      },
      secondary: {
        main: "#005296",
      },
      info: {
        main: "#0066bb",
      },
      ...(mode === "dark"
        ? {
            background: {
              default: "#060A2D",
              paper: "#17294D",
            },
            text: {
              primary: "#F4F5FD",
              secondary: "#A4A4C2",
            },
          }
        : {
            background: {
              default: "#FFFFFF",
              paper: "#F7F8FC",
            },
            text: {
              primary: "#213547",
              secondary: "#5F6472",
            },
          }),
    },
    shape: {
      borderRadius: 6,
    },
    typography: {
      fontFamily: [
        "Nunito", // primary custom font
        "system-ui", // modern system font fallback
        "-apple-system", // Safari/iOS fallback
        '"Segoe UI"', // Windows fallback
        "Roboto", // Android fallback
        '"Helvetica Neue"', // older macOS fallback
        "Arial", // broad fallback
        "sans-serif", // generic fallback
      ].join(","),
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
          },
        },
      },
    },
  });
