import React from 'react'
import Navbar from '../Navbar';
import Meta from '../Meta';
import Footer from '../Sections/Footer';

export default function Layout({ children }) {
  return (
    <>
        <Meta />
        <body>
          <Navbar />
          <div>
            {children}
          </div>
          <Footer />
        </body>
    </>
  )
}
