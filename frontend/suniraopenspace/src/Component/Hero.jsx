import hero from "../assets/raju-03.png";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-[#0061FF] to-[#60efff] text-black py-20  flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-72 px-6">
        <div className="w-96 h-96 bg-orange-400 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
          <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        </div>

        <div className="text-white text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            We Help Find <br /> Better Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Empowering businesses with smart and effective solutions.
          </p>

          <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-800 rounded-xl shadow-lg cursor-pointer hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div> 
      </div>
    </div>
  );
}
