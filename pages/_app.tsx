import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "next-themes";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
