import React from "react";
import Script from "next/script";
import Navbar from "../Navbar";
import Meta from "../Meta";
import Footer from "../Sections/Footer";
import CookieConsent from "../CookieConsent";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <section className='section'>{children}</section>
      <Footer />
      <CookieConsent />
    </>
  );
}
