import React from "react";
import family from "../../assets/Services/family.png";
import office from "../../assets/Services/office.png";
import estate from "../../assets/Services/estate.png";
import criminal from "../../assets/Services/criminal.png";
import community from "../../assets/Services/community.png";
import certificate from "../../assets/Services/certificate.png";

const WhatWeProvide = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-16 py-10">
        {/* Service Item */}
        {[
          {
            image: family,
            title: "Family Mediation",
            description:
              "Resolving marital disputes, divorce settlements, child custody agreements, and inheritance conflicts.",
          },
          {
            image: office,
            title: "Workplace & Corporate Mediation",
            description:
              "Addressing employee conflicts, contract disputes, and workplace grievances.",
          },
          {
            image: estate,
            title: "Property & Real Estate Disputes",
            description:
              "Helping individuals and businesses settle land, property, and lease disagreements.",
          },
          {
            image: criminal,
            title: "Criminal Mediation",
            description:
              "Facilitating negotiations in cases where reconciliation is legally viable.",
          },
          {
            image: community,
            title: "Community Dispute Resolution",
            description:
              "Encouraging harmony through structured mediation for neighborhood or social conflicts.",
          },
          {
            image: certificate,
            title: "Training & Certification",
            description:
              "Developing skilled mediators through professional training programs.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <img src={service.image} alt={service.title} className="w-20" />
            <h1 className="font-semibold text-xl text-center">{service.title}</h1>
            <p className="text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeProvide;
