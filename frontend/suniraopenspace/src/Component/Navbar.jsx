import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Sunira-Logo-01.png";

const Navbar = () => {

  const nav=useNavigate();
  const handleClick = ()=>{
    nav('/')
  }
  return (
    <header className="bg-white shadow-sm  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex  items-center space-x-2 cursor-pointer" onClick={handleClick}>
            <img className="h-16" src={logo} alt="logo" />
          </div>
          <div className="hidden md:flex items-center space-x-6">
          <a href="/aboutUs" className="text-gray-600 hover:text-blue-600">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Team
            </a>
            <div className="flex items-center justify-between space-x-9">
            <Link to="/login">
              <button className="bg-blue-500 text-white px-8 py-3 font-bold uppercase rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer">
                LogIn
              </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
