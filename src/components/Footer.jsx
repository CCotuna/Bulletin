import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-300 py-12 mt-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Buletin Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold text-red-600 mb-4">Bulletin</h3>
            <p className="text-gray-400 mb-4">
              Craft narratives that ignite inspiration, knowledge, and entertainment.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links (Modified to 2 rows, 3 columns) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Business</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Startup</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Employee</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Success</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Technology</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Innovate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Gadget</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Innovative Cities</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Travel</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Destinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Food & Drink</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Stay</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Sports</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Football</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Tennis</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Golf</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Entertainment</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Movies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Artist</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Television</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">As Equals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Call to Earth</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out">Freedom Project</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* News Ticker Animation */}
        <div className="mt-8">
          <div className="bg-white text-black py-2 px-4 rounded-lg">
            <h4 className="text-xl font-bold mb-2">Latest News</h4>
            <div className="overflow-hidden">
              <p className="whitespace-nowrap animate-marquee">
                Breaking News: New tech innovations for 2024... | Business news: Market update for Q4... | Sports: Local team wins championship...
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-500">
          <p>Copyright © 2024 Buletin.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
