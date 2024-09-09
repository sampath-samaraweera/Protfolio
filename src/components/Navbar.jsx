import { useState } from 'react';
import logo from "../assets/S.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 bg-black w-full z-50 shadow-md flex items-center 
    justify-between px-4 py-4 pt-8 md:px-8 lg:px-24">
      <div className="flex items-center">
        <img className="w-10" src={logo} alt="logo" 
          onClick={() => {
            scrollToSection("home");
          }}
        />
      </div>
      <div className="flex items-center md:hidden">
        <button
          className="text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <div className={`fixed gap-6 inset-0 bg-black bg-opacity-80 z-40 flex flex-col items-center 
        justify-center space-y-4 md:space-y-0 md:flex-row md:items-center md:bg-transparent 
        md:relative md:inset-auto md:flex md:justify-between ${isOpen ? 'block' : 'hidden'}`}>
        <span
          className="text-white text-xl cursor-pointer hover:text-blue-500"
          onClick={() => {
            setIsOpen(false);
            scrollToSection("home");
          }}
        >
          Home
        </span>
        <span
          className="text-white text-xl cursor-pointer hover:text-blue-500"
          onClick={() => {
            setIsOpen(false);
            scrollToSection("about");
          }}
        >
          About
        </span>
        <span
          className="text-white text-xl cursor-pointer hover:text-blue-500"
          onClick={() => {
            setIsOpen(false);
            scrollToSection("projects");
          }}
        >
          Projects
        </span>
        <span
          className="text-white text-xl cursor-pointer hover:text-blue-500"
          onClick={() => {
            setIsOpen(false);
            scrollToSection("achievements");
          }}
        >
          Achievements
        </span>
        <span
          className="text-white text-xl cursor-pointer hover:text-blue-500"
          onClick={() => {
            setIsOpen(false);
            scrollToSection("contact");
          }}
        >
          Contact
        </span>
        {/* <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaSquareXTwitter/> */}
      </div>
    </nav>
  );
};

export default Navbar;
