import React from "react";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import { MenuItem } from "@mui/material";

const ContactUs = () => {
  return (
    <div className="py-16">
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        }}
        onSubmit={(values) => {
          console.log("form data", values);
        }}
      >
        {({ values, handleChange }) => (
          <Form className="border border-gray-300 px-10 flex flex-col gap-5 rounded-3xl shadow-xl min-h-[70vh] min-w-[35vw] py-10">
            <div className="my-8 w-full text-left">
              <h2 className="text-5xl font-bold">Contact Us</h2>
            </div>
            <div className="flex w-full gap-2">
              <TextField
                id="Name"
                name="name"
                label="Name"
                placeholder="Your Name"
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                id="Phone"
                name="phone"
                label="Phone"
                placeholder="Your Phone Number"
                variant="outlined"
                value={values.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div className="flex flex-col w-full gap-5">
              <TextField
                id="email"
                name="email"
                label="Email"
                placeholder="Your Email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                select
                id="Service"
                name="service"
                label="Service"
                variant="outlined"
                value={values.service}
                onChange={handleChange}
                fullWidth
                required
              >
                <MenuItem value="">
                  <span className="text-gray-500">Select Services</span>
                </MenuItem>
                <MenuItem value="Legal Service">Legal Service</MenuItem>
                <MenuItem value="Astrological Solution">Astrological Solution</MenuItem>
                <MenuItem value="Real State Solution">Real State Solution</MenuItem>
              </TextField>
              <textarea
                id="message"
                name="message"
                className="border border-gray-200 p-3 rounded-lg resize-none min-h-[110px]"
                placeholder="Your Message"
                value={values.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="self-start pb-10">
              <button
                type="submit"
                className="px-8 py-3 rounded-lg text-xl font-bold bg-black text-white cursor-pointer hover:bg-blue-500 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;