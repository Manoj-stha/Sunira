import React from "react";
import TextField from "@mui/material/TextField";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="flex flex-col items-center gap-4">
        <header className="font-semibold text-5xl">Contact Us</header>
        <p className="text-xl w-[51vw] text-center">
          Connect with our expert astrologers for deep insights and guidance.
          Fill out the form below, and we’ll get back to you soon.
        </p>
      </div>

      <div className="flex justify-between items-center w-full h-[65vh] px-[30rem] ">
        {/* container for the get in touch */}
        <div className="flex flex-col gap-5 ">
          {/* location */}
          <div className="flex gap-5">
            <div className="bg-orange-400 w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
              <FaLocationDot className=" text-xl text-white" />
            </div>
            <div className="flex flex-col">
              <label className="text-2xl font-semibold">Location</label>
              <label className="text-lg">Itahari-4, Sunsari</label>
            </div>
          </div>
          {/* email */}
          <div className="flex gap-5">
            <div className="bg-orange-400 w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
              <IoMdMail className="text-xl text-white" />
            </div>
            <div className="flex flex-col">
              <label className="text-2xl font-semibold">Email</label>
              <label className="text-lg">ankitadhi@gmail.com</label>
            </div>
          </div>

          {/* phone  */}
          <div className="flex gap-5">
            <div className="bg-orange-400 w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
              <FaPhoneAlt className="text-xl text-white" />
            </div>
            <div>
              <label className="text-2xl font-semibold">Phone</label>
              <lable className="flex flex-col text-lg">
                <span>+977 9824567896</span>
                <span>+977 9864135646</span>
              </lable>
            </div>
          </div>
        </div>
        <form className="w-[27rem] h-[28rem] shadow-xl rounded-lg gap-7 ">
          <header className="text-4xl font-semibold w-[20rem]">
            Send Message
          </header>
          <div className="flex flex-col gap-5">
            <TextField
              id="standard-basic"
              label="Full Name"
              variant="standard"
              className="w-[20rem]"
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              className="w-[20rem]"
            />
            <TextField
              id="standard-multiline-static"
              label="Type Your Message"
              multiline
              rows={2}
              variant="standard"
              className="w-[20rem]"
            />
            <button className="uppercase text-white text-lg bg-blue-500 w-[7rem] py-2 rounded-md my-5 font-bold cursor-pointer hover:bg-blue-700">
              {" "}
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
