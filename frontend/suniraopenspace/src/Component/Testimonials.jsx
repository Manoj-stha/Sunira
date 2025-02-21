import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      feedback:
        "Absolutely phenomenal! Their expertise and professionalism exceeded our expectations.",
    },
    {
      name: "Michael Chen",
      role: "Founder, DesignCo",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      feedback:
        "Their team transformed our vision into reality with outstanding attention to detail.",
    },
    {
      name: "Emily Davis",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      feedback:
        "Exceptional service! They truly understand client needs and deliver with excellence.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Client Info */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover p-[1px]"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-700 italic">{testimonial.feedback}</p>

              {/* Star Ratings */}
              <div className="flex text-yellow-500 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="h-5 w-5" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
