import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu
import logo from "../assets/Sunira-Logo-01.png";

const Navbar = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const handleClick = () => {
    nav("/");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleClick}>
            <img className="h-14 md:h-16" src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/aboutUs" className="text-gray-600 hover:text-blue-600">
              About Us
            </Link>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Team
            </a>
            <Link to="/login">
              <button className="bg-blue-500 text-white px-5 py-2 font-semibold uppercase rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 text-md">
                LogIn
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 bg-white shadow-md p-4 rounded-lg">
            <Link to="/aboutUs" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <a href="#" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Team
            </a>
            <Link to="/login">
              <button className="w-full bg-blue-500 text-white px-5 py-2 font-semibold uppercase rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 text-md">
                LogIn
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
