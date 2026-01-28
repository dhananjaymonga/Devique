import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
function Layout() {
  return (
    <>
    <Navbar></Navbar>
      <Outlet></Outlet> 
    <Footer></Footer>
    </>
  )
}

export default Layout