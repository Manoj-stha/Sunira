import { IoMdMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SemiFooter = () => {
  return (
    <div>
      <section id="contact" className="py-30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center pl-28">
              <h2 className="text-4xl font-bold mb-8 uppercase pt-2">
                Get in Touch
              </h2>
              <div className="space-y-4 text-xl">
                <div className="flex items-center">
                  <IoMdMailOpen className="h-6 w-6 text-blue-500 mr-4" />
                  <span>Advisoltaxconsulting@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="h-5 w-5 text-blue-500 mr-4" />
                  <span>98989898</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="h-6 w-6 text-blue-500 mr-4" />
                  <span>Itahari-4, Sunsari</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8 ">
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <FaInstagram className="h-7 w-7" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <FaFacebook className="h-7 w-7" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <FaXTwitter className="h-7 w-7" />
                </a>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14207.203206843582!2d87.2741677343554!3d26.659648135485275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef74683e689bab%3A0xb6b9a4a8eb7a003!2sItahari%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SemiFooter;
