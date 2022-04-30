import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer pt-4 my-md-5 pt-md-5 px-5">
        <div className="row">
        <div className="col-12 col-md">
            <Image className="mb-2" src="https://avatars.githubusercontent.com/u/68122202?s=400&u=4abc9827a8ca8b9c19b06b9c5c7643c87da51e10&v=4" alt="Northern Breeze" width="100" height="100" />
            <small className="d-block mb-3 text-muted">2022 &copy;Northern breeze </small>
        </div>
        <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
            <li><Link href="">Push Notification Updates</Link></li>
            <li><Link href="">Email Inbox News update</Link></li>
            <li><Link href="">SMS Notification</Link></li>
            <li><Link href="">Change News Language</Link></li>
            <li><Link href="">And Many More</Link></li>
            </ul>
        </div>
        <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
            <li><Link href="/privacy-policies">Privacy & Policies</Link></li>
            <li><Link href="/terms-conditions">Term & Conditions</Link></li>
            </ul>
        </div>
        </div>
  </footer>
  )
}
