import React from 'react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
  <nav className="py-2 text-white flex justify-between bg-[#051726] min-w-full px-12 md:px-28 sticky top-0 z-50">
    <a href="#">
      <img src={logo} className="h-12 pt-3 cursor-pointer" alt='Ved Asole' />
    </a>
    <ul className="py-4 flex space-x-11 justify-end font-medium text-lg">
      <li className="cursor-pointer hover:text-[#81FFD9] hidden md:flex">
        <a href="#">Home</a>
      </li>
      <li className="cursor-pointer hover:text-[#81FFD9] hidden lg:flex">
        <a href="#projects">Projects</a>
      </li>
      <li className="cursor-pointer hover:text-[#81FFD9]">Resume</li>
      <li className="cursor-pointer hover:text-[#81FFD9] hidden lg:flex">Search</li>
    </ul>
  </nav>

  )
}

export default Navbar