import React from 'react';
import { logout } from '../firebase';

const Navbar = ({ page, setPage, user }) => {
  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed");
    }
  };

  console.log("Navbar loaded", setPage);
  // Removed scroll logic - now direct page changes

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200/50 sticky top-0 z-50">
      {/* Logo */}

      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage("home")}>
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-sm">
          ▶
        </div>
        <h1 className="text-xl font-bold text-gray-900">ClipGen AI</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li 
          className="cursor-pointer hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          onClick={() => setPage("home")}
        >
          Home
        </li>
        <li 
          className="cursor-pointer hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          onClick={() => setPage("features")}
        >
          Features
        </li>
        <li 
          className="cursor-pointer hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          onClick={() => setPage("how")}
        >
          How It Works
        </li>
        <li 
          className="cursor-pointer hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          onClick={() => setPage("subscription")}
        >
          Subscription
        </li>
        <li 
          className="cursor-pointer hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          onClick={() => setPage('privacy')}
        >
          Privacy Policy
        </li>
        <li 
          className="cursor-pointer hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          onClick={() => setPage('terms')}
        >
          Terms & Conditions
        </li>
        <li 
          className="cursor-pointer hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          onClick={() => setPage('contact')}
        >
          Contact
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
{user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {user.email?.slice(0,15)}...
            </span>
            <button 
              onClick={handleLogout}
              className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg font-medium transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <button 
              className="text-sm text-gray-700 hover:text-blue-500 font-medium px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setPage("login")}
            >
              Login
            </button>
            <button 
              onClick={() => setPage("signup")}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition-all shadow-md hover:shadow-lg text-sm font-medium"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

