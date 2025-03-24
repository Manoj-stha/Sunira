import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SocialMediaBox = () => {
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com", color: "#1877F2" },
    { name: "Twitter (X)", icon: <FaXTwitter />, url: "https://twitter.com", color: "#2e2e2e" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com", color: "#E4405F" },
    { name: "Telegram", icon: <FaTelegramPlane />, url: "https://www.telegram.org", color: "#0088CC" },
    { name: "WhatsApp", icon: <BsWhatsapp />, url: "https://www.whatsapp.com", color: "#25D366" },
  ];

  return (
    <div className="fixed bottom-45 left-[1px] bg-gray-900 p-2 rounded-lg shadow-lg flex flex-col gap-3 z-10">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 rounded-md text-white transition-transform transform hover:scale-110"
          style={{ backgroundColor: social.color }}
          data-tooltip-id={`tooltip-${index}`}
          data-tooltip-content={social.name}
        >
          {social.icon}
        </a>
      ))}

      {/* Tooltips for each social media link */}
      {socialLinks.map((_, index) => (
        <Tooltip key={index} id={`tooltip-${index}`} />
      ))}
    </div>
  );
};

export default SocialMediaBox;
