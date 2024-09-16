"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "../../../lib/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="bg-[#e2edf2] text-[#11385b] px-4 py-2 flex items-center justify-between">
        {/* Phone Number */}
        <div className=" flex items-center space-x-2">
          <FontAwesomeIcon icon="phone-alt" />
          <span>(123) 456-7890</span>
        </div>

        {/* Address */}
        <div className=" flex items-center space-x-2">
          <FontAwesomeIcon icon="map-marker-alt" />
          <span>123 Main St, Anytown, USA</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} className="text-xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} className="text-xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} className="text-xl" />
          </a>
        </div>
      </div>

      <nav className="bg-white shadow-md p-4">
        <div>
          <p className="text-xl font-bold text-[#11385b] hover:text-blue-500 transition-colors">
            USA ELECTORAL COMMISSION
          </p>
        </div>
        <div className="container mx-auto flex justify-between items-center mt-8 ">
          {/* Navbar Links */}
          <ul className="flex items-center space-x-4 text-gray-800 font-semibold">
            <li className="relative group">
              <Link
                href="/"
                className={`relative block px-4 py-2 transition-colors duration-300 ${
                  pathname === "/" ? "text-[#005ea2]" : "hover:text-[#005ea2]"
                }`}
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#005ea2] transition-all duration-300 ${
                    pathname === "/"
                      ? "w-full"
                      : "w-0 group-hover:w-full group-focus:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/about"
                className={`relative block px-4 py-2 transition-colors duration-300 ${
                  pathname === "/about"
                    ? "text-[#005ea2]"
                    : "hover:text-[#005ea2]"
                }`}
              >
                About Us
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#005ea2] transition-all duration-300 ${
                    pathname === "/about"
                      ? "w-full"
                      : "w-0 group-hover:w-full group-focus:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/elections"
                className={`relative block px-4 py-2 transition-colors duration-300 ${
                  pathname === "/elections"
                    ? "text-[#005ea2]"
                    : "hover:text-[#005ea2]"
                }`}
              >
                Elections
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#005ea2] transition-all duration-300 ${
                    pathname === "/elections"
                      ? "w-full"
                      : "w-0 group-hover:w-full group-focus:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/voting-info"
                className={`relative block px-4 py-2 transition-colors duration-300 ${
                  pathname === "/voting-info"
                    ? "text-[#005ea2]"
                    : "hover:text-[#005ea2]"
                }`}
              >
                Voting Info
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#005ea2] transition-all duration-300 ${
                    pathname === "/voting-info"
                      ? "w-full"
                      : "w-0 group-hover:w-full group-focus:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/candidates"
                className={`relative block px-4 py-2 transition-colors duration-300 ${
                  pathname === "/candidates"
                    ? "text-[#005ea2]"
                    : "hover:text-[#005ea2]"
                }`}
              >
                Candidates
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#005ea2] transition-all duration-300 ${
                    pathname === "/candidates"
                      ? "w-full"
                      : "w-0 group-hover:w-full group-focus:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/results"
                className={`relative block px-4 py-2 transition-colors duration-300 ${
                  pathname === "/results"
                    ? "text-[#005ea2]"
                    : "hover:text-[#005ea2]"
                }`}
              >
                Results
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#005ea2] transition-all duration-300 ${
                    pathname === "/results"
                      ? "w-full"
                      : "w-0 group-hover:w-full group-focus:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/contact"
                className={`relative block px-4 py-2 transition-colors duration-300 ${
                  pathname === "/contact"
                    ? "text-[#005ea2]"
                    : "hover:text-[#005ea2]"
                }`}
              >
                Contact Us
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#005ea2] transition-all duration-300 ${
                    pathname === "/contact"
                      ? "w-full"
                      : "w-0 group-hover:w-full group-focus:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/faq"
                className={`relative block px-4 py-2 transition-colors duration-300 ${
                  pathname === "/faq"
                    ? "text-[#005ea2]"
                    : "hover:text-[#005ea2]"
                }`}
              >
                FAQ
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#005ea2] transition-all duration-300 ${
                    pathname === "/faq"
                      ? "w-full"
                      : "w-0 group-hover:w-full group-focus:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          </ul>

          {/* Login & Register Buttons */}
          <div className="space-x-4">
            <Link href="/login">
              <button className="border border-gray-900 text-black  py-2 px-6 rounded-md font-semibold shadow-md transition-transform transform hover:scale-105">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-blue-900 hover:bg-blue-950 text-white py-3 px-6 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
