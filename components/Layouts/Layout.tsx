import React from "react";
import Navbar from "../Navbar";
import Meta from "../Meta";
import Footer from "../Sections/Footer";
import CookieConsent from "../CookieConsent";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
        <>{children}</>
      <Footer />
      <CookieConsent />
    </>
  );
}
