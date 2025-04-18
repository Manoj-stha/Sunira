import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import faq from "../../assets/faq.svg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const Faqs = [
    {
      title: "What types of cases can be resolved through mediation?",
      description:
        "Mediation is suitable for family disputes, property conflicts, workplace disagreements, contractual issues, and even some criminal cases where reconciliation is possible.",
    },
    {
      title: "How long does mediation take?",
      description:
        "The process varies depending on the complexity of the case, but most mediations are resolved in weeks or even days, compared to months or years in court.",
    },
    {
      title: "Is mediation legally binding?",
      description:
        "Yes, once both parties reach an agreement, it can be made legally enforceable through proper documentation and registration.",
    },
    {
      title: "How confidential is mediation?",
      description:
        "Mediation is completely confidential, and nothing discussed can be used in court unless both parties agree.",
    },
  ];

  return (
    <div className="min-h-[70vh] flex flex-wrap items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 gap-10 py-10">
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
