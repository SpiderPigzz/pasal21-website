//Entry point for the webpack and deals with the routes
import React from "react";
import ReactDOM from "react-dom/client";
import WebRoute from "./utils/router";
import { ThemeProvider, responsiveFontSizes, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "index.css";

import { SnackbarProvider } from "notistack";
import MyriadPro from "assets/MYRIADPRO-REGULAR.woff";
import MyriadProBold from "assets/MYRIADPRO-BOLD.woff";

//context: https://github.com/vasturiano/react-force-graph/issues/409

let theme = createTheme({
  typography: {
    fontFamily: ['"Myriad Pro"', "Helvetica Neue", "Roboto"].join(","),
  },
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "rgb(85, 77, 225)",
    },
    secondary: {
      main: "#000000",
    },
    navyblue: {
      main: "#3477e3",
    },
    whitecolor: {
      main: "#FFFFFF",
    },
    orangecolor: {
      main: "#ffbd59",
    },

    // secondary: {
    //   main: "rgb(255, 105, 127)",
    // },
    // normal: {
    //   main: "#2596be",
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Myriad Pro';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Myriad Pro'), local('Myriad Pro-Regular'), url(${MyriadPro}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'Myriad Pro Bold';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Myriad Pro'), local('Myriad Pro-Bold'), url(${MyriadProBold}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

      `,
    },
    MuiButtonBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: "2rem",
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SnackbarProvider>
      <WebRoute />
    </SnackbarProvider>
  </ThemeProvider>
);
