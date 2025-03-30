import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import faq from "../../../assets/faq.svg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const Faqs = [
    {
      title: "What services do you offer in real estate?",
      description:
        "We provide a wide range of real estate services, including buying, selling, renting, property management, and real estate investment consultation. Whether you're looking for a new home, selling a property, or need expert advice, we are here to help.",
    },
    {
      title: "How do I determine the right price for my property?",
      description:
        "Our team conducts a comprehensive market analysis considering location, property condition, recent sales in the area, and current market trends. We ensure that your property is competitively priced to attract buyers while maximizing your return.",
    },
    {
      title: "Do you assist with home loans and financing?",
      description:
        "Yes! We work with trusted mortgage lenders and financial institutions to help you find the best loan options. Our team can guide you through the financing process, from pre-approval to finalizing your mortgage.",
    },
    {
      title: "How long does it take to buy or sell a home?",
      description:
        "The timeline varies depending on market conditions, property demand, and legal processes. On average, selling a home can take a few weeks to a few months, while buying a home depends on finding the right property and securing financing. We work efficiently to speed up the process while ensuring a smooth transaction.",
    },
  ];

  return (
    <div className="min-h-[70vh] flex flex-wrap items-center justify-center px-6 md:px-12 lg:px-32 xl:px-40 gap-10 py-10">
      {/* FAQ Section */}
      <div className="flex flex-col w-full max-w-2xl">
        <header className="text-xl sm:text-2xl md:text-3xl font-semibold text-center lg:text-left mb-6">
          Frequently Asked Questions (FAQs)
        </header>

        <div className="flex flex-col gap-5">
          {Faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group bg-white flex flex-col rounded-lg cursor-pointer shadow-md transition-transform duration-300 hover:scale-105 border-2 border-gray-200 hover:border-gray-300"
              onClick={() => toggleFaq(index)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center justify-between px-4 sm:px-5 py-4">
                <h3 className="font-medium text-md sm:text-lg">{faq.title}</h3>
                <IoIosArrowDropdownCircle
                  className={`text-xl sm:text-2xl text-gray-500 transform transition-transform duration-300 ${
                    activeIndex === index
                      ? "rotate-180 text-gray-900"
                      : "group-hover:text-gray-900"
                  }`}
                />
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 sm:px-5 pb-4 text-gray-600 text-sm md:text-base"
                  >
                    {faq.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-auto">
        <img
          src={faq}
          alt="FAQ Illustration"
          className="w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Faq;
