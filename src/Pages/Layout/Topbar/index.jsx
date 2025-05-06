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
    <div className="p-4 shadow-md bg-black  w-full">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-4 text-white">
          <a
            href="tel:+447440095528"
            className="flex items-center gap-2 group hover:text-Heading"
          >
            <MdOutlinePhoneIphone
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline text-sm font-semibold ">
              (+44) 7440 095528
            </span>
          </a>

          <a
            href="tel:+923047914358"
            className="flex items-center gap-2  hover:text-Heading"
          >
            <FaPhoneAlt
              size={18}
              className="transition-transform duration-300 group group-hover:scale-110"
            />
            <span className="hidden sm:inline text-sm font-semibold ">
              (+92) 304-7914358
            </span>
          </a>

          <a
            href="mailto:info@wongateway.com"
            className="flex items-center gap-2 group hover:text-Heading"
          >
            <FaMapMarked
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline text-sm font-semibold ">
              Morden, London UK
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:ameersync.com@gmail.com"
            className="flex items-center gap-2 group hover:text-Heading"
          >
            <FaEnvelope
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline text-sm font-semibold hover:text-Heading">
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
