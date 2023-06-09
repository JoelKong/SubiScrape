import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          SubiScrape - Simplifying website information into short summaries |
          Website Summary AI | Free and efficient
        </title>
        <meta
          name="description"
          content="The best website summary AI. Simply input a link and the AI will summarise the content for you. 100% free and efficient!"
        />
        <meta
          name="og:title"
          content="SubiScrape - Simplifying website information into short summaries | Website Summary AI | Free and efficient"
        />
        <meta
          property="og:description"
          content="The best website summary AI. Simply input a link and the AI will summarise the content for you. 100% free and efficient!"
        />
        <meta property="og:url" content="https://www.subiscrape.com/" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="UPJHz6_aiE3YlBWNBUEGqpaUbeuYE0tWXCde-_zmM0o"
        />
        <link rel="icon" href="/favicon.ico"></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        ></link>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
