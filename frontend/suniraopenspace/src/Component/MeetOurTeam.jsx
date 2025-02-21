import React from "react";

// Team Data
const advisoryTeam = [
  {
    name: "Bilam Gyawali",
    role: "Senior Advisor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "Meditation is the art of listening to the silence within, where wisdom speaks louder than words.",
  },
  {
    name: "Rita Bhandari",
    role: "Mediation Associate",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    quote:
      "Through meditation, we rewire our brains, forging pathways of calm amidst the chaos of modern life.",
  },

  {
    name: "Sangita Pokhrel",
    role: "Associate",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote:
      "To meditate is to return home—to the present, to the breath, to the self untangled from illusion.",
  },
  {
    name: "Umesh Thapa ",
    role: "Psychologist, Sociologist, Politician",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      
    quote:
      "Meditation is the blank canvas where the soul paints its purest colors, free from the noise of the world.",
  },
  
];

const MeetOurTeam = () => {
  return (
    <div className="py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700">
          Meet <span className="text-orange-500">Our Team</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
          Our team consists of experienced professionals dedicated to resolving
          conflicts through structured mediation processes.
        </p>
      </div>

      {/* Advisory Team Section */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800 text-center">
          Advisory Team
        </h3>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-16 p-10">
          {advisoryTeam.map((member, index) => (
            <div
              key={index}
              className="group bg-white w-[20rem] h-[24rem] gap-2 shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105 flex flex-col items-center pt-8 border-2 border-gray-300 hover:bg-blue-400 "
            >
              <div className="w-[8rem] h-[8rem] rounded-full border-blue-300 border-4 group-hover:border-white">
                <img
                  src={member.image}
                  className="w-[120px] h-[120px] object-cover rounded-full"
                />
              </div>
              <div className="mt-3 ">

              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-white">
                {member.name}
              </h4>
              <p className="text-gray-600 group-hover:text-white">{member.role}</p>
              <p className="text-gray-500 p-3 italic pt-5 group-hover:text-white">"{member.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
