import { GoLaw } from "react-icons/go";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaPeace } from "react-icons/fa";
import { TbZodiacLibra } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const nav=useNavigate()
  const handleServices = (service)=>{
    switch(service){
      case "Mediation": nav('/mediation');
      window.scrollTo(0, 0);
      break;
      case "Legal": nav('/legal');
      window.scrollTo(0, 0);
      break;
      case "Astrology": nav('/astrology');
      window.scrollTo(0, 0);
      break;
      case "estate": nav('/realestate');
      window.scrollTo(0, 0);
      break;
    }
  }
  return (
    <div className="py-20 px-6 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-8 pb-10">
        <div className=" text-blue-500 px-6 py-2 flex items-center justify-center ">
          <h2 className="text-3xl font-bold tracking-wide">Our</h2>
          <span className="text-orange-400 text-3xl font-bold ml-2">
            Services
          </span>
        </div>
        <div>
          <h1 className="text-5xl font-bold font-">Get Our Best Services For Your
          Business Growth</h1>
        </div>
      </div>

      {/* Service Cards Layout */}
      <div className="flex flex-wrap justify-center gap-10 p-5">
        {servicesData.map((service, index) => (
          <div
          onClick={()=>handleServices(service.page)}
            key={index}
            className="bg-white shadow-md rounded-xl p-5 w-[25rem] h-[15rem] pt-11 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center text-center cursor-pointer border-2 border-gray-200"
          >
            <service.icon className={`h-14 w-14 ${service.color} mb-3`} />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-snug">
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
      "Expert legal advice tailored to your needs.",
    icon: GoLaw,
    color: "text-blue-500",
    page:"Legal",
  },
  {
    title: "Astrology Consultation",
    description:
      "Insights into your future with expert astrology.",
    icon: TbZodiacLibra,
    color: "text-amber-500",
    page:"Astrology",
  },
  {
    title: "Real Estate Solutions",
    description:
      "Find and buy the properties professionally.",
    icon: MdOutlineRealEstateAgent,
    color: "text-green-500",
    page: "Estate",
  },
  {
    title: "Mediation",
    description:
      "Resolve disputes amicably with professional help.",
    icon: FaPeace,
    color: "text-pink-500",
    page:"Mediation",
  },
];

export default Services;
