"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { IBM_Plex_Sans, Sarabun, Expletus_Sans } from "next/font/google";

const font = Sarabun({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#99f6e4",
    },
    secondary: {
      main: "#7dd3fc",
    },
    info: {
      main: "#67e8f9",
    },
    error: {
      main: "#db2777",
    },
    warning: {
      main: "#d946ef",
    },
  },
  typography: {
    fontFamily: font.style.fontFamily,    
    h4: {
      background: "linear-gradient(to left, #5eead4, #67e8f9, #7dd3fc, #0ea5e9)",
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 700,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#121212",
          border: "2px solid transparent",
          borderImage: "linear-gradient(to right, #5eead4, #67e8f9, #7dd3fc, #0ea5e9 ) 1",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            px: 1,
            py: 0.25,
            borderRadius: 1,
          }),
        label: {
          padding: 'initial',
          fontSize: '1rem',
        },
        icon: ({ theme }) =>
          theme.unstable_sx({
            mr: 0.5,
            ml: '-2px',
          }),
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
