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
      title: "What is astrology and how can it help me?",
      description:
        "Astrology is the study of the positions and movements of celestial bodies and their influence on human affairs. It can provide insights into your personality, relationships, career, and life path, helping you understand yourself and your surroundings better.",
    },
    {
      title: "How accurate are astrological readings?",
      description:
        "The accuracy of astrological readings depends on the experience of the astrologer and the details provided (such as birth date, time, and location). While astrology can offer valuable guidance, it is important to approach it with an open mind and understand that it is a tool for insight rather than a guarantee of specific outcomes.",
    },
    {
      title: "What types of astrology services do you offer?",
      description:
        "We offer a variety of astrology services, including personalized birth chart readings, relationship compatibility analysis, career guidance, and horoscope predictions. We also offer consultations for spiritual growth and remedy suggestions based on astrological insights.",
    },
    {
      title: "How do I prepare for my astrology consultation?",
      description:
        "To make the most of your astrology consultation, provide your astrologer with accurate details such as your birth date, time, and location. Being open about your questions or concerns will help the astrologer give more relevant advice tailored to your needs.",
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
