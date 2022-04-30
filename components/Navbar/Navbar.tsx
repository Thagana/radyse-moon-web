import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid'>
        <Link href='/'>
          <div className='logo-container'>
            <Image
              className='logo-image'
              src='https://avatars.githubusercontent.com/u/68122202?s=400&u=4abc9827a8ca8b9c19b06b9c5c7643c87da51e10&v=4'
              alt='Ultimate News Image'
              width={100}
              height={100}
            />
          </div>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-between'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link href='/'>
                <a className='nav-link' aria-current='page'>
                  Home
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/pricing'>
                <a className='nav-link' aria-current='page'>
                  Pricing
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/contact'>
                <a className='nav-link'>Contact Us</a>
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav d-flex align-items-center'>
            <li className='nav-item mx-3'>
              <Link href='https://app.theultimatenews.xyz'>Login</Link>
            </li>
            <li className='nav-item'>
              <Button
                type='button'
                onClick={() => {
                  window.location.href = "https://app.theultimatenews.xyz";
                }}
                design='primary'
              >
                Register
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
