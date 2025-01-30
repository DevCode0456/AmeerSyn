import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="px-3 py-4 flex  items-center justify-center   gap-4 shadow-lg flex-nowrap md: md:px-8">
      <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start md:flex-nowrap">
        <a
          href="tel:+447440095528"
          className="flex items-center gap-2 text-primary md:border-r-2 border-gray-300 md:pr-4 group"
        >
          <MdOutlinePhoneIphone
            size={24}
            className="text-primary transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-semibold hidden md:inline">
            (+44) 7440 095528
          </span>
        </a>

        <a
          href="tel:+923047914358"
          className="flex items-center gap-2 text-primary md:border-r-2 border-gray-300 md:pr-4 group"
        >
          <FaPhoneAlt
            size={24}
            className="text-primary transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-semibold hidden md:inline">
            (+92) 304-7914358
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:info@wongateway.com"
          className="flex items-center gap-2 md:border-r-2 border-gray-300 text-primary md:pr-4 group"
        >
          <FaEnvelope
            size={24}
            className="text-primary transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-semibold hidden md:inline">
            info@wongateway.com
          </span>
        </a>
      </div>

      <div className="flex gap-4 text-primary">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF
            size={24}
            className="cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-blue-600"
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size={24}
            className="cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-blue-500"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={24}
            className="cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-pink-500"
          />
        </a>
      </div>
    </div>
  );
}
