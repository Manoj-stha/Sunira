import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  const handleClick = (link) => {
    nav(link);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-800 text-gray-300  w-full py-10">
      {/* Top Section */}
      <div className="w-full max-w-8xl px-5 md:px-[10rem] lg:px-[18rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 ">
        {/* Company Info */}
        <div className="flex flex-col gap-2 sm:text-left text-left ">
          <header className="font-bold text-xl">Sunira Open Space</header>
          <p>We Help Find Better Solutions</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 text-left ">
          <header className="font-bold text-lg">Quick Links</header>
          <ul className="space-y-2">
            <li
              onClick={() => handleClick("/")}
              className="cursor-pointer hover:underline"
            >
              Home
            </li>
            <li
              onClick={() => handleClick("/aboutus")}
              className="cursor-pointer hover:underline"
            >
              About Us
            </li>
            <li
              onClick={() => handleClick("/services")}
              className="cursor-pointer hover:underline"
            >
              Services
            </li>
            <li
              onClick={() => handleClick("/blog")}
              className="cursor-pointer hover:underline"
            >
              Blog
            </li>
            <li
              onClick={() => handleClick("/team")}
              className="cursor-pointer hover:underline"
            >
              Team
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4 text-left ">
          <header className="font-bold text-lg">Services</header>
          <ul className="space-y-2">
            <li
              onClick={() => handleClick("/legal")}
              className="cursor-pointer hover:underline"
            >
              Legal Service
            </li>
            <li
              onClick={() => handleClick("/astrology")}
              className="cursor-pointer hover:underline"
            >
              Astrology Service
            </li>
            <li
              onClick={() => handleClick("/realestate")}
              className="cursor-pointer hover:underline"
            >
              Real Estate Service
            </li>
            <li
              onClick={() => handleClick("/mediation")}
              className="cursor-pointer hover:underline"
            >
              Mediation
            </li>
          </ul>
        </div>

        {/* useful links */}
        <div className="flex flex-col gap-4 text-left ">
          <header className="font-bold text-lg">Useful Links</header>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:underline">
              <a href="https://mediationcouncil.gov.np/" target="_blank">
                {" "}
                Mediation Council{" "}
              </a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="https://lawcommission.gov.np/" target="_blank"> Nepal Law Commission </a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="https://admincourt.gov.np/" target="_blank"> Administrative Court </a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="https://nepalbarcouncil.org.np/" target="_blank"> Nepal Bar Council </a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="https://www.moljpa.gov.np/" target="_blank"> Ministry of Law, justice and Parliament </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-left ">
          <header className="text-lg font-bold">Contact Info</header>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-start items-center gap-2">
              <FaLocationDot />
              <span>Itahari-4, Sunsari</span>
            </li>
            <li className="flex justify-start items-center gap-2">
              <IoMdMail />
              <span>consulting@gmail.com</span>
            </li>
            <li className="flex justify-start items-center gap-2">
              <FaPhoneAlt />
              <span>+977 9842326548</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription (Same Row) */}
        {/* <div className="flex flex-col gap-4 text-left ">
          <header className="text-lg font-bold">Subscribe for Newsletter</header>
          <p className="py-1">Sign up and get notified.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full sm:w-auto rounded-l-lg px-3 py-2 text-gray-300 bg-gray-900 outline-none"
            />
            <button className="bg-blue-500 px-5 py-2 rounded-r-lg hover:bg-blue-600 cursor-pointer text-white">
              Go
            </button>
          </div>
        </div> */}
      </div>

      {/* Bottom Section */}
      <div className="text-center w-full border-t border-gray-700 mt-8 pt-5">
        <p>
          &copy; {new Date().getFullYear()} Sunira Open Space. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
