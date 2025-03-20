import React, { useState } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({name}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/jobs", label: "Jobs" },
    { path: "/quiz", label: "Quiz" },
    { path: "/chatbot", label: "Chatbot" },
    { path: "/prediction", label: "Career Prediction" },
  ];

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 fixed w-full top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="CareerBuddy Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            CareerBuddy
          </span>
        </a>
        
        <IconButton
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          color="inherit"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={`block py-2 px-3 rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-700 bg-blue-50 dark:text-blue-500 dark:bg-gray-800'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {localStorage.token ? (
              <Button
                variant="contained"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate("/profiledetails")}
                sx={{ 
                  width: 40, 
                  height: 40,
                  minWidth: 'auto',
                  textTransform: 'none',
                  fontSize: '1rem'
                }}
              >
                {name ? name.charAt(0).toUpperCase() : 'PM'}
              </Button>
            ) : (
              <Button 
                variant="contained"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate("/auth")}
              >
                Sign In
              </Button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
