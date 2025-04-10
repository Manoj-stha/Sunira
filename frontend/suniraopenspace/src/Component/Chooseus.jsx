import ChooseImg from "../assets/chooseus.jpg";

const ChooseUs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-12 ">
        <div className="lg:w-1/2 ">
          <div className=" ">
            <h2 className="text-[60px] font-bold text-blue-500">
              Why Choose Us?
            </h2>
            <h3 className="text-[33px] pb-2 font-semibold text-gray-800 leading-relaxed">
              How <span className="text-blue-600">Sunira</span> Can Help You
              Grow Your Business
            </h3>
            <p className="text-gray-600 pb-2 text-lg leading-relaxed">
              We aim to be your trusted advocate by delivering unparalleled
              services. Our unique approach sets us apart in ensuring your
              success.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 ">
                <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
                <h4 className="text-lg font-medium text-gray-700">
                  Increased Personal Efficiency
                </h4>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
                <h4 className="text-lg font-medium text-gray-700">
                  Big Ideas Arise from Boutique Firms
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center border-8 border-white shadow-xl rounded-xl transform transition-transform duration-300 hover:scale-105">
          <img
            src={ChooseImg}
            alt="Why Choose Us"
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
