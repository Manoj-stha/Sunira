import React from "react";

// Team Data
const advisoryTeam = [
  {
    name: "Anjana Sangraula Dhakal",
    location: "Biratnagar",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "Justice is not just about laws; it's about fairness, compassion, and standing up for what is right.",
  },
  {
    name: "Saraswati Shah",
    location: "Kathmandu",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    quote:
      "Legal expertise is the bridge between conflict and resolution—built on trust, wisdom, and diligence.",
  },

  {
    name: "Bikram Khatri",
    location: "Kathmandu",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote:
      "The pursuit of justice requires not just knowledge of the law but the courage to uphold it.",
  },
  {
    name: "Ashwini Bhattarai ",
    location: "Inaruwa",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      
    quote:
      "Every case is a story that deserves to be heard and defended with integrity and dedication.",
  },
  {
    name: "Shalikram Dhakal ",
    location: "Inaruwa",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      
    quote:
      "True legal advocacy is about empowering people with knowledge, fairness, and unwavering support.",
  },{
    name: "Hem Raj Dhakal",
    location: "Kathmandu",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      
    quote:
      "Justice is the foundation of a strong society—built on perseverance, ethics, and legal excellence.",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="py-16 px-[16rem] ">
      {/* Section Header */}
      <div className="text-center mb-12 ">
        <h2 className="text-4xl font-bold text-blue-700">
          Meet <span className="text-orange-500">Our Team</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
          Our team is committed to ensuring justice with professionalism and integrity.
        </p>
      </div>

      {/* Advisory Team Section */}
      <div className="mb-10 ">
        <h3 className="text-3xl font-semibold text-gray-800 text-center">
          Adviser Team
        </h3>

        {/* Team Grid */}
        <div className="flex flex-wrap w-full gap-10 p-10 justify-center ">
          {advisoryTeam.map((member, index) => (
            <div
              key={index}
              className="group  w-[16rem] h-[19rem] gap-2 rounded-md   text-start transition-transform duration-200 flex flex-col  cursor-default "
            >
              <div className="w-full h-[14rem]  group-hover:border-white ">
                <div className="w-full h-[14rem] rounded-md overflow-hidden ">
                <img
                  src={member.image}
                  className="w-full h-full object-cover rounded-md  transition-transform duration-300 hover:scale-110"
                  />
                  </div>
              </div>
              <div className="mt-2 flex flex-col  text-center">

              <h4 className="text-lg font-semibold text-gray-900 ">
                {member.name}
              </h4>
              <p className="text-gray-600 ">{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
