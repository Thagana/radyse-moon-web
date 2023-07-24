import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
          <div className="mr-auto mb-2">
            <Image
              src="/assets/radyse-moon.png"
              alt="Radyse Moon logo"
              height="100px"
              width="100%"
            />
            <Link href="/">
              <h4 className="header">Radyse Moon</h4>
            </Link>
          </div>
          <div>
            <ul className="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
              <li className="mr-4">
                <Link href="/about">About</Link>
              </li>
              <li className="mr-4">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-5" style={{ borderTop: "1px solid #dee2e6" }}></div>
      <div className="container">
        <div className="is-flex-tablet is-justify-content-between is-align-items-center">
          <p>All rights reserved © Radyse Moon 2023</p>
          <div className="py-2 is-hidden-tablet"></div>
          <div className="ml-auto"></div>
        </div>
      </div>
    </footer>
  );
}
