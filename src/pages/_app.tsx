import "@/styles/globals.css";
import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import DasboardLayout from "../components/DasboardLayout";

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  var isLayoutNeeded = false;
  if (appProps.router.pathname.startsWith(`/dashboard`)) {
    isLayoutNeeded = true;
  }

  const LayoutComponent = isLayoutNeeded ? DasboardLayout : React.Fragment;

  return (
    <>
      
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
  
    </>
  );
}
