import whatsapp from "../assets/1.png";

export function Whatsapp() {
    //this for floating chat with us whats app
  return (
    <a
      href="https://wa.me/+9779852057242?text=contact us"
      className="fixed bottom-2 right-2 p-1 z-50"
    >
      <img
        src={whatsapp}
        alt="WhatsApp"
        className="w-15 h-15 relative rounded-full  hover:opacity-80 transition-transform duration-300"
      />
    </a>
  );
}
