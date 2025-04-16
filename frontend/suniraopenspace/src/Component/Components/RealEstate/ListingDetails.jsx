import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import listingData from "./TopList";
import { ImPriceTags } from "react-icons/im";
import { MdPhoneAndroid } from "react-icons/md";
import { TbToolsKitchen3 } from "react-icons/tb";
import { FaCouch } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { IoCompassOutline } from "react-icons/io5";
import { FaBed, FaCar } from "react-icons/fa6";
// import facebook from "../../../assets/Real estate/facebook.png"
// import instagram from "../../../assets/Real estate/instagram.png"
// import twitter from "../../../assets/Real estate/twitter.png"

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = listingData.find((item) => item.id === Number(id));

  if (!listing) {
    return (
      <h2 className="text-center text-2xl font-bold text-red-500">
        Listing Not Found
      </h2>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-bold"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-4 text-gray-800">{listing.title}</h1>
      <img
        src={listing.img}
        alt={listing.title}
        className="w-full h- object-cover rounded-lg shadow-lg mb-4"
      />

      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* price and contacts */}
        <div className="flex justify-between border-b border-gray-300 p-5">
          {/* price */}
          <div>
            <p className="flex items-center gap-3 mt-2 text-orange-500 text-2xl font-semibold">
              <ImPriceTags />
              {listing.price}
            </p>
            <p className="text-lg font-semibold">{listing.price_text} Only</p>
          </div>
          {/* date and contacts */}
          <div className="text-right">
            <p>
              <span className="italic">Posted on -</span>
              {listing.date}
            </p>
            <p className="text-xl font-semibold flex items-center gap-2">
              <MdPhoneAndroid className="text-blue-800" />
              {listing.contact}
            </p>
          </div>
        </div>
        {/* features */}
        <div className="py-5">
          <h2 className="text-2xl font-semibold px-5">Features</h2>

          <div className="flex gap-5 w-[40vw] my-4">
            {features.map((data) => (
              <div className="flex flex-col gap-1 items-center  p-3 w-full">
                <p className="text-xl text-gray-600 hover:text-blue-600">
                  {<data.icon />}
                </p>
                <p className="text-sm">{data.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* facilities */}
        <div className="px-5">
          <h2 className="text-2xl font-semibold">Facilities:</h2>
          <p className="text-[1rem] my-2">{listing.facility}</p>
        </div>

        {/* property detail */}
        <div className="px-5 py-2">
          <h2 className="text-2xl font-semibold py-2">Property Details:</h2>
          <p className="text-[1rem]">{listing.desc}</p>
        </div>

        {/* property overview */}
        <div className="px-5 my-2">
          <h2 className="text-2xl font-semibold">✅Property Overview:</h2>
          <ul className="list-disc px-14  my-4">
            <li>
              <span className="font-semibold ">Location: </span>{" "}
              {listing.location}
            </li>
            <li>
              <span className="font-semibold ">Land Area:</span> {listing.land}
            </li>
            <li>
              <span className="font-semibold ">Price:</span>{" "}
              {listing.price_text}
            </li>
            <li>
              <span className="font-semibold ">Facing:</span>{" "}
              {listing.direction}
            </li>
            <li>
              <span className="font-semibold ">Bedrooms:</span> {listing.bed}
            </li>
            <li>
              <span className="font-semibold ">Bathrooms:</span>{" "}
              {listing.bathroom}
            </li>
            <li>
              <span className="font-semibold ">Kitchen:</span> {listing.kitchen}
            </li>
            <li>
              <span className="font-semibold ">Living Room:</span>{" "}
              {listing.livingroom}
            </li>
            <li>
              <span className="font-semibold ">Pooja Room:</span>{" "}
              {listing.poojaroom}
            </li>
            <li>
              <span className="font-semibold ">Parking:</span> {listing.car}
            </li>
          </ul>
        </div>
       <div className="px-5 my-8">
        <p>We focus on providing the best quality houses that meet modern standards and client expectations. Our properties are built with high-quality materials, ensuring durability and comfort. We carefully select locations to offer convenience, security, and a great living environment. Customer satisfaction is our priority, and we strive to make every home a perfect place to live.</p>
       </div>
       {/* contact us */}
       <div>
        <div>
          <h4>📞For more details, contact us via Whatsapp:</h4>
          <p>📲9800000000 | 9800000000</p>
        </div>
        <div>
          <h4>📍Sunira Real Estate Solutiion Pvt. Ltd.</h4>
          <p>🌐Website: www.Suniraopenspace.com.np</p>
          <p>📩Email: info.Sunira@gmail.com</p>
        </div>
        <div>
          <h2>Follow us for more property updates:</h2>
          <p>Facebook: Sunira open space</p>
          <p>Instagram: Sunira open space</p>
          <p>Twitter: Sunira open space</p>
        </div>

       </div>
      </div>
    </div>
  );
};
const features = [
  {
    icon: FaBed,
    title: "Bedrooms",
  },
  {
    icon: TbToolsKitchen3,
    title: "Kitchen",
  },
  {
    icon: FaCouch,
    title: "Living Room ",
  },
  {
    icon: FaBath,
    title: "Bathrooms",
  },
  {
    icon: FaCar,
    title: "Car Parking",
  },
  {
    icon: IoCompassOutline,
    title: "Faced",
  },
];

export default ListingDetails;
