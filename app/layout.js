"use client";
import "./globals.css";
import Script from "next/script";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import theme from "../components/wrapper/ThemeDark";
import HeaderBar from "../components/wrapper/HeaderBar";
import Footer from "../components/wrapper/Footer";

import { WalletContextProvider } from "../components/context/walletContext";

export default function RootLayout({ children }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JJH4SZFVJ8" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-JJH4SZFVJ8');
        `}
        </Script>
        <div className="container">
          <WalletContextProvider>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <HeaderBar />
                <main style={{ flex: "1 0 auto" }}>{children}</main>
                <footer className="footer">
                  <Footer />
                </footer>
                <IconButton
                  onClick={scrollToTop}
                  sx={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                  }}
                >
                  <ArrowCircleUpIcon fontSize="large" color="primary" />
                </IconButton>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </WalletContextProvider>
        </div>
      </body>
    </html>
  );
}
