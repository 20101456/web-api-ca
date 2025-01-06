import React, { useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ThemeContext = React.createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = (props) => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#673ab7",
          },
          secondary: {
            main: "#ff4081",
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;