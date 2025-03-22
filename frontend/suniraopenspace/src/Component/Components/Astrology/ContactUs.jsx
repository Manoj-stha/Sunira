import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const [change, setChange] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(change);
  };

  return (
    <div className="bg-gray-50 py-20 px-4 md:px-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <header className="font-semibold text-4xl md:text-5xl">Contact Us</header>
        <p className="text-lg md:text-xl w-full md:w-[51vw]">
          Connect with our expert astrologers for deep insights and guidance. Fill out the form below, and we’ll get back to you soon.
        </p>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row lg:justify-center items-center w-full lg:h-[65vh] gap-12 lg:gap-32 mt-12">
        
        {/* Contact Details */}
        <div className="flex flex-col gap-5 w-full max-w-lg">
          {/* Location */}
          <div className="flex gap-5 items-center">
            <div className="bg-orange-400 w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
              <FaLocationDot className="text-xl text-white" />
            </div>
            <div>
              <label className="text-2xl font-semibold">Location</label>
              <p className="text-lg">Itahari-4, Sunsari</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-5 items-center">
            <div className="bg-orange-400 w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
              <IoMdMail className="text-xl text-white" />
            </div>
            <div>
              <label className="text-2xl font-semibold">Email</label>
              <p className="text-lg">ankitadhi@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-5 items-center">
            <div className="bg-orange-400 w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
              <FaPhoneAlt className="text-xl text-white" />
            </div>
            <div>
              <label className="text-2xl font-semibold">Phone</label>
              <p className="text-lg flex flex-col">
                <span>+977 9824567896</span>
                <span>+977 9864135646</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="w-full max-w-[27rem] h-[28rem] shadow-xl rounded-lg p-8 flex flex-col gap-7"
          onSubmit={handleSubmit}
        >
          <header className="text-4xl font-semibold">Send Message</header>
          <TextField
            name="fullName"
            label="Full Name"
            variant="standard"
            className="w-full"
            value={change.fullName}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="standard"
            className="w-full"
            value={change.email}
            onChange={handleChange}
          />
          <TextField
            name="message"
            label="Type Your Message"
            multiline
            rows={2}
            variant="standard"
            className="w-full"
            value={change.message}
            onChange={handleChange}
          />
          <button
            className="uppercase text-white text-lg bg-blue-500 w-[7rem] py-2 rounded-md font-bold cursor-pointer hover:bg-blue-700"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
