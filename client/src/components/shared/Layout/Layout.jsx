import React from 'react'
import './Layout.css'
import Nav from '../Nav'
import Footer from '../Footer'

const Layout = (props) => {

  return (
    <div className="layout">
      <Nav />
      <div className="main">
        Primary Content
      </div>
      <Footer />
    </div>
  )
}

export default Layout