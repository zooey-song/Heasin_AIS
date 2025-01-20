import React from "react";

const SideMenu = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <button
        className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded z-50"
        onClick={toggleMenu}
      >
        {isOpen ? "✖" : "☰"}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <ul className="mt-16 space-y-4 p-4">
          <li className="border-b border-gray-700 pb-2">
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li className="border-b border-gray-700 pb-2">
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li className="border-b border-gray-700 pb-2">
            <a href="#" className="hover:underline">
              Services
            </a>
          </li>
          <li className="border-b border-gray-700 pb-2">
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
