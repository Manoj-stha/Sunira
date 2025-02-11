import { GoLaw } from "react-icons/go";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaPeace } from "react-icons/fa";
import { TbZodiacLibra } from "react-icons/tb";

const Services = () => {
  return (
    <div className="py-16 px-6 ">
      <div className="flex justify-center items-center mb-12">
        <div className="bg-blue-800 text-white h-24 w-1/2 flex items-center justify-center p-6 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold">Our</h2>
          <span className="text-amber-300 text-4xl ml-2">Services</span>
        </div>
      </div>

      {/* Service Cards Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16">
        {/* Legal Solution */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6">
          <div className="text-center">
            <GoLaw className="h-24 w-24 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Legal Solution
            </h3>
          </div>
        </div>

        {/* Astrology Consultation */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6">
          <div className="text-center">
            <TbZodiacLibra className="h-24 w-24 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Astrology Consultation
            </h3>
          </div>
        </div>

        {/* Real Estate Solutions */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6">
          <div className="text-center">
            <MdOutlineRealEstateAgent className="h-24 w-24 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Real Estate Solutions
            </h3>
          </div>
        </div>

        {/* Mediation */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6">
          <div className="text-center">
            <FaPeace className="h-24 w-24 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Mediation
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
