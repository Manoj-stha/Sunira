import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
  const [selected, setSelected] = useState("Property Type");
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    category1: [
      "House For Sale",
      "Land For Sale",
      "Apartment For Sale",
      "Bussiness & Shop For Sale",
    ],
    category2: [
      "House For Rent",
      "Land For Rent",
      "Apartment For Sale",
      "Office Space",
    ],
  };

  return (
    <div className="flex flex-col md:flex-row mt-10 md:mt-10 mb-5 gap-5 md:gap-10 justify-center items-center px-4 space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row shadow-xl w-full md:w-auto gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row rounded-lg justify-center items-center w-full md:w-auto gap-4 md:gap-0">
          {/* Dropdown */}
          <div className="relative w-full md:w-52 border border-gray-400">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-gray-600 px-4 py-2 rounded-md text-left flex justify-between items-center"
            >
              {selected}
              <span className="ml-2">
                <IoIosArrowDown />
              </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="absolute w-full md:w-64 bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10 transition-all duration-200">
                {/* Category 1 */}
                <li className="px-4 py-2 text-gray-700 font-semibold bg-gray-200">
                  For Sale
                </li>
                {options.category1.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200"
                  >
                    {option}
                  </li>
                ))}

                {/* Category 2 */}
                <li className="px-4 py-2 text-gray-700 font-semibold bg-gray-200">
                  For Rent
                </li>
                {options.category2.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Input */}
          <div className="flex w-full md:w-auto border border-gray-400 h-[2.6rem]">
            <input
              placeholder="Type any Keyword"
              className="outline-none w-full md:w-[30vw] px-2 h-[2.6rem]"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex h-[2.6rem]">
          <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-xl px-6 md:px-10 h-full py-2 text-white font-semibold rounded-r-md w-full md:w-auto">
            Search
          </button>
        </div>
      </div>

      {/* Categories Dropdown */}
      <div className="relative w-full md:w-auto px-2">
        <select
          name="type"
          id="type"
          className="appearance-none bg-white border border-gray-300 text-gray-700 px-4 py-2 pr-8 h-full outline-none rounded-md shadow-md focus:ring-1 w-full md:w-auto"
        >
          <option value={""} disabled>
            Order By
          </option>
          <option value={"Newest first"}>Newest First</option>
          <option value={"Oldest first"}>Oldest First</option>
          <option value={"Price high to low"}>Price high to low</option>
          <option value={"Price low to high"}>Price low to high</option>
        </select>

        {/* Dropdown Icon */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Search;
