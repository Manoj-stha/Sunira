import Lottie from "lottie-react";
import family from "../../assets/Services/family.png";
import office from "../../assets/Services/office.png";
import estate from "../../assets/Services/estate.png";
import criminal from "../../assets/Services/criminal.png";
import community from "../../assets/Services/community.png";
import certificate from "../../assets/Services/certificate.png";

const whatweprovide = () => {
  return (
    <div className="bg-gray-50 pt-16 pb-10">
      <div className="flex flex-col items-center gap-5 p-2">
        <header className="text-5xl font-bold">Our Services</header>
        <p className="text-lg text-gray-600">
          We provide a wide range of mediation and legal reconciliation
          services, covering family, civil, criminal, and corporate disputes.
        </p>
      </div>
      <div className="flex flex-wrap gap-[10rem] justify-center px-[15rem] py-16">
        <div className="w-[20rem] flex flex-col items-center gap-4 ">
          <img src={family} className="w-[8rem] " />
          <h1 className="font-semibold text-xl">Family Mediation</h1>
          <p className="text-center text-lg">
            Resolving marital disputes, divorce settlements, child custody
            agreements, and inheritance conflicts.
          </p>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-4 ">
          <img src={office} className="w-[8rem] " />
          <h1 className="font-semibold text-xl">
            Workplace & Corporate Mediation{" "}
          </h1>
          <p className="text-center text-lg">
            Addressing employee conflicts, contract disputes, and workplace
            grievances.
          </p>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-4 ">
          <img src={estate} className="w-[8rem] " />
          <h1 className="font-semibold text-xl">
            Property & Real Estate Disputes
          </h1>
          <p className="text-center text-lg">
            Helping individuals and businesses settle land, property, and lease
            disagreements.
          </p>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-4 ">
          <img src={criminal} className="w-[8rem] " />
          <h1 className="font-semibold text-xl">Criminal Mediation</h1>
          <p className="text-center text-lg">
            Facilitating negotiations in cases where reconciliation is legally
            viable.
          </p>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-4 ">
          <img src={community} className="w-[8rem] " />
          <h1 className="font-semibold text-xl">
            Community Dispute Resolution
          </h1>
          <p className="text-center text-lg">
            Encouraging harmony through structured mediation for neighborhood or
            social conflicts.
          </p>
        </div>
        <div className="w-[20rem] flex flex-col items-center gap-4 ">
          <img src={certificate} className="w-[8rem] " />
          <h1 className="font-semibold text-xl">Training & Certification </h1>
          <p className="text-center text-lg">
            Developing skilled mediators through professional training programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default whatweprovide;
