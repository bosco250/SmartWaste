import React from 'react'
import Navbar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function OutletFile() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default OutletFile
