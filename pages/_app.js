import Head from "next/head";
import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
