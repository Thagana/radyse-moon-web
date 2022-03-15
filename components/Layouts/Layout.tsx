import React from 'react'
import Navbar from '../Navbar';
import Meta from '../Meta';

export default function Layout({ children }) {
  return (
    <>
        <Meta />
        <body>
          <Navbar />
          <div>
            {children}
          </div>
        </body>
    </>
  )
}
