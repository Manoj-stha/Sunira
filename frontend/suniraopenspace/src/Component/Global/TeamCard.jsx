import React from "react";

const TeamCard = ({ name, image, role }) => {
  return (
    <div className=" p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center ">
      {/* Team Member Image */}
      <img
        src={image}
        alt={name}
        className="w-16 h-24 mx-auto rounded-full border-2 border-blue-500 object-cover"
      />

      {/* Team Member Info */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  );
};

export default TeamCard;
