import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="">
      <div className="relative flex flex-col mx-[15rem] pb-[5rem] ">
        <header className="text-2xl font-semibold px-5 pb-3">
          Frequently Asked Questions (FAQs)
        </header>
        <div className="flex flex-col gap-5 p-2 flex-grow">
          {Faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group bg-white w-[40rem] flex flex-col rounded-lg cursor-pointer shadow-md transition-transform duration-300 hover:scale-100 hover:shadow-lg border-2 border-gray-200 hover:border-gray-300"
              onClick={() => toggleFaq(index)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="font-medium">{faq.title}</h3>
                <IoIosArrowDropdownCircle
                  className={`text-2xl text-gray-500 transform transition-transform duration-300 ${
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
                    className="px-5 pb-4 text-gray-600"
                  >
                    {faq.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
