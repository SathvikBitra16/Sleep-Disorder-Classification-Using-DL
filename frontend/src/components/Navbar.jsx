import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    alert("Logged out successfully!!!");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className="relative py-4 md:py-6 bg-gray-50">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <a
                    href="/"
                    className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    <img className="w-42 h-32 mt-0 ml-0" src="/images/logo.png" alt="Logo" />
    
                  </a>
                </div>
    
                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                  <button type="button" className="text-gray-900">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
    
                {/* Desktop Navigation */}
                <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
                  <a
                    href="/"
                    className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    About Sleep Disorders
                  </a>
                  <a
                    href="/contact"
                    className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="mt-8 ml-8">
                  <button 
                    onClick={handleLogout} 
                    className="px-5 py-2 mb-8 text-base font-semibold text-gray-900 transition-all duration-200 border border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Logout
                  </button>
                </div>
                
    
                
              </div>
            </div>
      </header>
  );
};

export default Navbar;
