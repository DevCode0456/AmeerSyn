import React, { memo, useState, useEffect } from 'react';
import {
  FaBars,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';
import Images from '../../Helper/ImagesConstant';

const ThemeToggle = () => {
  const themes = ['theme-light', 'theme-dark', 'theme-blue', 'theme-green'];
  const [currentTheme, setCurrentTheme] = useState(0);

  useEffect(() => {
    document.documentElement.className = themes[currentTheme];
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-secondary transition duration-300"
    >
      Switch Theme
    </button>
  );
};

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      href: 'mailto:your-email@example.com',
      icon: <FaEnvelope size={24} />,
    },
    {
      href: 'tel:+1234567890',
      icon: <FaPhoneAlt size={24} />,
    },
    {
      href: 'https://facebook.com',
      icon: <FaFacebook size={24} />,
    },
    {
      href: 'https://wa.me/1234567890',
      icon: <FaWhatsapp size={24} />,
    },
    {
      href: 'https://linkedin.com',
      icon: <FaLinkedin size={24} />,
    },
  ];

  return (
    <section className="bg-white">
      <header className="body-font bg-light shadow-md relative">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <a
            href="#"
            className="flex title-font font-medium items-center mb-4 md:mb-0"
          >
            <img
              alt="Logo"
              width="50px"
              height="50px"
              src={Images.LOGO_IMG} // Replace LOGO_IMG with the correct logo source.
              className="rounded-full"
            />
            <span className="ml-3 text-xl font-semibold text-gray-800">
              AmeerSync
            </span>
          </a>

          {/* Icons Row */}
     

          {/* Hamburger Icon */}
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center text-gray-800 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Mobile Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
            role="presentation"
          ></div>
        )}
      </header>
    </section>
  );
};

export default memo(Topbar);
