import React from "react";
import theft from "../../../assets/Legal service/theft.png"
import civil from "../../../assets/Legal service/civil case.png"
import family from "../../../assets/Legal service/family law.png"
import corporate from "../../../assets/Legal service/corporate law.png"
import advocacy from "../../../assets/Legal service/Legal Consultation & Advocacy.png"
const LegalService = () => {
  return (
    <div className="bg-gray-50 px-[8rem] pt-16 pb-22">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-5 mb-5 p-4 text-center">
        <header className="text-3xl md:text-5xl font-bold text-gray-700">Our Services</header>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl">
          We provide a wide range of mediation and legal reconciliation
          services, covering family, civil, criminal, and corporate disputes.
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex flex-wrap gap-5 px-[10rem] items-center justify-center">
        {/* Service Item */}
        {[
          {
            image: theft,
            title: "Criminal Cases",
            description:
              "Strong legal defense for fraud, theft, assault, and other offenses, ensuring your rights are protected.",
          },
          {
            image: civil,
            title: "Civil Cases",
            description:
              " Resolving property disputes, contract breaches, and agreements through negotiation or litigation.",
          },
          {
            image: family,
            title: "Family Law",
            description:
              "Legal support for divorce, child custody, alimony, and inheritance with a fair and compassionate approach.",
          },
      
          {
            image: advocacy,
            title: "Legal Consultation & Advocacy",
            description:
              "Expert representation in Supreme, High, and District Courts for all legal concerns.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-[18rem] h-[23rem] flex flex-col items-start gap-5 p-4  rounded-lg  transition duration-300 "
          >
            <div className="max-w-[35rem]  overflow-hidden rounded-lg ">
            <img src={service.image} alt={service.title} className="w-[20rem] rounded-lg transition-transform duration-300 hover:scale-110" />
            </div>
            <h1 className="font-semibold text-2xl px-1 ">{service.title}</h1>
            <p className=" text-gray-600 px-1">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalService;
