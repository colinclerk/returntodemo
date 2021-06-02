import "../styles/globals.css";
import Router from "next/router";
import { ClerkProvider } from "@clerk/clerk-react";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider
      frontendApi="clerk.b1mvy.zxnpf.lcl.dev"
      navigate={(to) => Router.push(to)}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
