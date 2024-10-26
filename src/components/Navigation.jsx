import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './design/Button';
import { FaRegEdit } from "react-icons/fa";
import { HiDocumentSearch } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SearchDialog from './SearchDialog';
import Notifications from './Notifications';

function NavigationBar() {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const notifications = [
    'Your post has been approved.',
    'New comments on your post.',
    'A new event has been created.',
    'Someone mentioned you in a comment.',
  ];

  const unreadNotificationsCount = notifications.length;

  const searchHistory = [
    'News about the community',
    'Upcoming events',
    'Latest bulletin updates',
    'How to join the community',
    'Volunteer opportunities',
  ];

  const toggleSearchDialog = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleNotifications = (e) => {
    e.preventDefault();
    setIsNotificationsVisible(!isNotificationsVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 p-4 transition-colors duration-300
        ${isScrolled ? 'bg-white bg-opacity-100 pb-4' : 'bg-white'}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-3xl text-red-800 font-bold">Bulletin</a>
        </div>
        <span className="text-2xl font-extralight text-gray-500 hidden lg:block ms-4">|</span>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <AiOutlineMenu className="text-3xl" />
            )}
          </button>
        </div>

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

        {/* Divider for larger screens on the '/' route and only when not scrolled
        {location.pathname === '/' && !isScrolled && (
          <div className="hidden lg:block w-full h-28 rounded-t-xl mx-5 bg-black"></div>
        )} */}

        <div className="hidden lg:flex items-center ml-auto space-x-4">
          <Link to="/write" className="flex items-center space-x-2 px-2 py-2 rounded-md">
            <FaRegEdit className="text-2xl" />
            <span>Write</span>
          </Link>
          <a href="https://twitter.com/your_twitter_handle" target="_blank" className="px-2 py-2 rounded-md">
            <i className="fa fa-twitter"></i>
          </a>

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

      {isNotificationsVisible && <Notifications notifications={notifications} />}

      <SearchDialog
        isOpen={isSearchOpen}
        toggleSearchDialog={toggleSearchDialog}
        searchHistory={searchHistory}
      />
    </nav>
  );
}

export default NavigationBar;
