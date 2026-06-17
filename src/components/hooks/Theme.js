import React from "react";

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6d4c41',
      dark: '#5d4037',
    },
    background: {
      default: '#fbf6ec',
      paper: '#fffdf8',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "'Be Vietnam Pro', system-ui, -apple-system, sans-serif",
    h5: {
      fontFamily: "'Dancing Script', cursive",
      fontWeight: 700,
      fontSize: '2rem',
    },
    h6: {
      fontFamily: "'Dancing Script', cursive",
      fontWeight: 700,
      fontSize: '1.7rem',
    },
  },
});

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">{children}</div>
    </ThemeProvider>
  );
};

export default Theme;
