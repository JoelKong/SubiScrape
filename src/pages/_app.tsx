import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";

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
          ScrapeGPT - Simplifying website information into short summaries |
          Website Summary AI | Free and efficient
        </title>
        <meta
          name="description"
          content="The best website summary AI. Simply input a link and the AI will summarise the content for you. 100% free and efficient!"
        />
        <meta
          name="og:title"
          content="ScrapeGPT - Simplifying website information into short summaries | Website Summary AI | Free and efficient"
        />
        <meta
          property="og:description"
          content="The best website summary AI. Simply input a link and the AI will summarise the content for you. 100% free and efficient!"
        />
        <meta property="og:url" content="https://www.scrapegpt.net/" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      </ThemeProvider>
    </>
  );
}
