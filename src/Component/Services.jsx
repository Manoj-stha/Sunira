import { GoLaw } from "react-icons/go";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaPeace } from "react-icons/fa";
import { TbZodiacLibra } from "react-icons/tb";

const Services = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-center items-center mb-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-8 py-6 rounded-2xl shadow-xl flex items-center justify-center">
          <h2 className="text-4xl font-extrabold tracking-wide">Our</h2>
          <span className="text-amber-300 text-4xl font-extrabold ml-2">
            Services
          </span>
        </div>
      </div>

      {/* Service Cards Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
          >
            <service.icon className={`h-20 w-20 ${service.color} mb-4`} />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Service Data
const servicesData = [
  {
    title: "Legal Solution",
    description:
      "Get expert legal advice and solutions tailored to your needs.",
    icon: GoLaw,
    color: "text-blue-500",
  },
  {
    title: "Astrology Consultation",
    description:
      "Discover insights into your future with expert astrology readings.",
    icon: TbZodiacLibra,
    color: "text-amber-500",
  },
  {
    title: "Real Estate Solutions",
    description:
      "Find, buy, or sell properties with professional real estate services.",
    icon: MdOutlineRealEstateAgent,
    color: "text-green-500",
  },
  {
    title: "Mediation",
    description:
      "Resolve disputes amicably with professional mediation services.",
    icon: FaPeace,
    color: "text-pink-500",
  },
];

export default Services;
