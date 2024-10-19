import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

import Button from './design/Button';
import { FaRegEdit } from "react-icons/fa";
import { HiDocumentSearch } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Importing hamburger menu icons
import SearchDialog from './SearchDialog'; // Importing the SearchDialog component
import Notifications from './Notifications'; // Import Notifications component

function NavigationBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to control the dialog visibility
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false); // State for notifications
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

  // Hardcoded notifications for demonstration
  const notifications = [
    'Your post has been approved.',
    'New comments on your post.',
    'A new event has been created.',
    'Someone mentioned you in a comment.',
  ];

  const unreadNotificationsCount = notifications.length; // You can calculate unread notifications here

  // Function to toggle the search dialog
  const toggleSearchDialog = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Function to toggle notifications
  const toggleNotifications = (e) => {
    e.preventDefault(); // Prevent default behavior of the anchor tag
    setIsNotificationsVisible(!isNotificationsVisible);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Hardcoded search history
  const searchHistory = [
    'News about the community',
    'Upcoming events',
    'Latest bulletin updates',
    'How to join the community',
    'Volunteer opportunities',
  ];

  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm bg-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo and menu for mobile */}
        <div className="flex items-center">
          <a href="/" className="text-3xl text-red-800 font-bold">Bulletin</a>
        </div>
        <span className='text-2xl font-extralight text-gray-500 hidden lg:block ms-4'>|</span>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <AiOutlineMenu className="text-3xl" />
            )}
          </button>
        </div>

        {/* Full menu for larger screens */}
        <ul className={`lg:flex lg:items-center lg:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:w-auto lg:flex`}>
          <li><Link to="/news" className="px-4 py-2 rounded-md">News</Link></li>
          <li>
            <button
              onClick={toggleSearchDialog}
              className="px-4 py-2 rounded-md flex items-center space-x-2"
            >
              <HiDocumentSearch className="text-2xl" />
              <span>Search</span>
            </button>
          </li>
          <li><Link to="/community" className="px-4 py-2 rounded-md">About</Link></li>
          <li><Link to="/subscribe" className="px-4 py-2 rounded-md">Community</Link></li>
        </ul>

        {/* Right-side items */}
        <div className="hidden lg:flex items-center ml-auto space-x-4">
          <Link to="/write" className="flex items-center space-x-2 px-2 py-2 rounded-md">
            <FaRegEdit className="text-2xl" />
            <span>Write</span>
          </Link>
          <a href="https://twitter.com/your_twitter_handle" target="_blank" className="px-2 py-2 rounded-md">
            <i className="fa fa-twitter"></i>
          </a>

          {/* Notifications Button with Badge */}
          <Button className="relative" onClick={toggleNotifications}>
            Notifications
            {unreadNotificationsCount > 0 && (
              <span className="absolute -top-5 -left-8 bg-red-500 text-white text-xs font-bold rounded-md w-5 h-5 flex items-center justify-center">
                {unreadNotificationsCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Notifications Panel */}
      {isNotificationsVisible && <Notifications notifications={notifications} />}

      {/* Search Dialog Modal */}
      <SearchDialog
        isOpen={isSearchOpen}
        toggleSearchDialog={toggleSearchDialog}
        searchHistory={searchHistory}
      />
    </nav>
  );
}

export default NavigationBar;
