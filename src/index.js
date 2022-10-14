import React, { createContext, useContext, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const MyThemeContext = createContext({});

export function useMyThemeContext() {
  return useContext(MyThemeContext);
}

function MyThemeProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        {props.children}
      </MyThemeContext.Provider>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </React.StrictMode>
);
