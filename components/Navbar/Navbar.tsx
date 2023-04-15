import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(false);

  const loginLink = process.env.LOGIN_LINK || 'http://localhost:3001'
  const downloadLink = process.env.DOWNLOAD_LINK || 'http://localhost:3001'
  
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  return (
    <nav className='navbar navbar-expand-lg navbar-light' role='navigation'>
      <div className='container-fluid'>
        <Link href='/'>
          <div className='logo-container'>
            <Image
              className='logo-image'
              src='/assets/radyse-moon.png'
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
          onClick={handleNavCollapse}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`${
            !isNavCollapsed ? "collapse" : ""
          } navbar-collapse justify-content-between`}
          id='navbarNav'
        >
          <ul className='navbar-nav'>

          </ul>
          <ul className='navbar-nav d-flex align-items-center'>
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
            <li className='nav-item mx-3'>
              <Link href={loginLink}>Login</Link>
            </li>
            <li className='nav-item'>
              <Button
                type='button'
                onClick={() => {
                  window.location.href = "https://play.google.com/store/apps/details?id=com.leumasco.ultimatenews";
                }}
                design='primary'
              >
                Download App
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
