import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(217, 19%, 24%)",
      light: "hsl(217, 19%, 38%)",
      dark: "hsl(218, 23%, 16%)",
    },
    secondary: {
      main: "hsl(150, 100%, 66%)",
    },
    text: {
      primary: "hsl(193, 38%, 86%)",
    },
  },
  typography: {
    fontFamily: "Manrope, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
