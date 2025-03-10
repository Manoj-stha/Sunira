import React from "react";
import theft from "../../../assets/Legal service/theft.png"
import civil from "../../../assets/Legal service/civil case.png"
import family from "../../../assets/Legal service/family law.png"
import corporate from "../../../assets/Legal service/corporate law.png"
import advocacy from "../../../assets/Legal service/Legal Consultation & Advocacy.png"
const LegalService = () => {
  return (
    <div className="bg-gray-50 pt-16 pb-10">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-5 p-4 text-center">
        <header className="text-3xl md:text-5xl font-bold">Our Services</header>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl">
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
            title: "Family Mediation",
            description:
              "Resolving marital disputes, divorce settlements, child custody agreements, and inheritance conflicts.",
          },
          {
            image: civil,
            title: "Workplace & Corporate Mediation",
            description:
              "Addressing employee conflicts, contract disputes, and workplace grievances.",
          },
          {
            image: family,
            title: "Property & Real Estate Disputes",
            description:
              "Helping individuals and businesses settle land, property, and lease disagreements.",
          },
          {
            image: corporate,
            title: "Criminal Mediation",
            description:
              "Facilitating negotiations in cases where reconciliation is legally viable.",
          },
          {
            image: advocacy,
            title: "Community Dispute Resolution",
            description:
              "Encouraging harmony through structured mediation for neighborhood or social conflicts.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-[25rem] h-[28rem] flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <img src={service.image} alt={service.title} className="w-[30rem] rounded-lg" />
            <h1 className="font-semibold text-xl text-center">{service.title}</h1>
            <p className="text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalService;
