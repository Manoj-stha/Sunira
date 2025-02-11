import Chooose from "../assets/chooseus.jpg";

const Chooseus = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex flex-col space-y-4 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-600">
            Why Choose Us?
          </h2>
          <h3 className="text-xl">
            How Sunira Can Help You Grow Your Business
          </h3>
          <p className="text-gray-600">
            That is an interesting question and we answer it all the time. We
            want to be trusted as your advocate when you engage in our services,
            and this is a perfect example of something we do differently.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Increased Personal Efficiency</h4>
            <h4 className="font-semibold">
              Big Ideas Arise from Boutique Firms
            </h4>
          </div>
        </div>
        <div className="flex lg:w-1/2 justify-center">
          <img src={Chooose} alt="chooseus" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
