// import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="mb-15 flex item-center justify-between py-6">
        <div className="my-8 flex flex-shrink-0 item-center">
            <img className='w-10'src={logo} alt="logo" />
        </div>
        <div className="my-8 flex item-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaSquareXTwitter/>
        </div>
    </nav>
  )
}

export default Navbar
