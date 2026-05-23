import React from 'react'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <div id="navbar" className="relative flex w-full text-xl items-center justify-center">
      {/* <div id="startcontent" className="">
        <img src={logo} alt="Logo" className="" />
      </div> */}
      <div id="midcontent" className="flex items-center">
        <ul className="flex gap-8 text-white">
          <li  id="about-us" className="">About us</li>
          {/* <li className="">Services</li> */}
          <li className="">Coaches</li>
          {/* <li className="">Events</li> */}
          <li className="">Contact Us</li>
        </ul>
      </div>
      {/* <div id="endcontent">
        <button className="">
          Book now
        </button>
      </div> */}
    </div>
    </>
  )
}

export default Navbar