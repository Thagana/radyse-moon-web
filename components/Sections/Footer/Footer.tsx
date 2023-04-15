import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer pt-4 my-md-5 pt-md-5 px-5">
      <div className="row">
        <div className="col-12 col-md">
          <Image
            className="mb-2"
            src="/assets/radyse-moon.png"
            alt="Northern Breeze"
            width="150"
            height="150"
          />
          <h5 className="d-block mb-3 text-black">
            2022 &copy; Radyse Moon{" "}
          </h5>
        </div>
        <div className="col-12 col-md">
          <h5 className="text-black">Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link href="">Push Notification Updates</Link>
            </li>
            <li>
              <Link href="">Email Inbox News update</Link>
            </li>
            <li>
              <Link href="">SMS Notification</Link>
            </li>
            <li>
              <Link href="">Change News Language</Link>
            </li>
            <li>
              <Link href="">And Many More</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md">
          <h5 className="text-black">Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link href="/privacy-policies">Privacy & Policies</Link>
            </li>
            <li>
              <Link href="/terms-conditions">Term & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
