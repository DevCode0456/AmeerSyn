import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarked,
} from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="px-4 py-3 shadow-md bg-white w-full">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-4 text-primary">
          <a
            href="tel:+447440095528"
            className="flex items-center gap-2 group"
          >
            <MdOutlinePhoneIphone
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline text-sm font-semibold group-hover:text-black">
              (+44) 7440 095528
            </span>
          </a>

          <a
            href="tel:+923047914358"
            className="flex items-center gap-2 group"
          >
            <FaPhoneAlt
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline text-sm font-semibold group-hover:text-black">
              (+92) 304-7914358
            </span>
          </a>

          <a
            href="mailto:info@wongateway.com"
            className="flex items-center gap-2 group"
          >
            <FaMapMarked
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline text-sm font-semibold group-hover:text-black">
              Morden, London UK
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:ameersync.com@gmail.com"
            className="flex items-center gap-2 group"
          >
            <FaEnvelope
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline text-sm font-semibold group-hover:text-black">
              ameersync.com@gmail.com
            </span>
          </a>
        </div>

        <div className=" md:hidden lg:flex flex gap-3 text-primary justify-center items-center ">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-transform hover:scale-125"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform hover:scale-125"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform hover:scale-125"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
