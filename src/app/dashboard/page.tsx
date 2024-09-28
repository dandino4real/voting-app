"use client";

import Image from "next/image";
// import Home from "@/components/admin/home";
// import AdminLoanDashboard from "@/components/admin/loan";
// import ReportsSection from "@/components/admin/reports";
// import SettingsSection from "@/components/admin/settings";
// import UsersSection from "@/components/admin/user";
import { useState } from "react";
import Profile from "../component/profile/profile";



export default function UserDashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  // const [dropdownOpen, setDropdownOpen] = useState(false);



  return (
    <div className="min-h-screen flex bg-[#FAFAFA]">
      <div className="w-64  bg-basecolour text-white fixed top-0 left-0 h-full">
        <div className="p-6">
          <h1 className="text-3xl font-bold">Logo</h1>
        </div>
        <ul className="mt-6 ps-4">
          <li className="mb-4 ">
            <button
              onClick={() => setActiveSection("Dashboard")}
              className={`flex items-center  py-3 ps-10 w-full transition-colors  ${
                activeSection === "Dashboard"
                  ? "bg-[#FAFAFA] text-basecolour rounded-s-full"
                  : " hover:opacity-75 "
              }`}
            >
              <Image
                src={"/profile.svg"}
                alt="female voters"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
                className="mr-2"
              />
              Profile
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setActiveSection("Users")}
              className={`flex items-center  py-3 ps-10 w-full transition-colors rounded-lg ${
                activeSection === "Users"
                ? "bg-[#FAFAFA] text-basecolour rounded-s-full"
                  : " hover:opacity-75 "
              }`}
            >
              <Image
                src={"/vote_dashboard.svg"}
                alt="vote icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
                className="mr-2"
              />
              Vote
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setActiveSection("Loans")}
              className={`flex items-center  py-3 ps-10 w-full transition-colors rounded-lg ${
                activeSection === "Loans"
                ? "bg-[#FAFAFA] text-basecolour rounded-s-full"
                  : " hover:opacity-75 "
              }`}
            >
              <Image
                src={"/stats.svg"}
                alt="female voters"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
                className="mr-2"
              />
              Results stats
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setActiveSection("Reports")}
              className={`flex items-center  py-3 ps-10 w-full transition-colors rounded-lg ${
                activeSection === "Reports"
                ? "bg-[#FAFAFA] text-basecolour rounded-s-full"
                  : " hover:opacity-75 "
              }`}
            >
              {" "}
              <Image
                src={"/settings.svg"}
                alt="female voters"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
                className="mr-2"
              />
              settings
            </button>
          </li>
          <li className=" mt-48">
            <button
              onClick={() => setActiveSection("Settings")}
              className={`flex items-center  py-3 ps-10 w-full transition-colors rounded-lg ${
                activeSection === "Settings"
                ? "bg-[#FAFAFA] text-basecolour rounded-s-full"
                  : " hover:opacity-75 "
              }`}
            >
              <Image
                src={"/signout.svg"}
                alt="female voters"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
                className="mr-2"
              />
              Log Out
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col overflow-hidden overflow-x-hidden">
        {/* Header */}
        {/* <header className="bg-white shadow-md p-4 flex items-center justify-between relative">
          <div className="flex items-center space-x-4">
            <p className="text-3xl font-semibold text-gray-800">
              Welcome Back, <span className="text-blue-600">John</span>!
            </p>
          </div>
          <div className="flex items-center space-x-6 relative">
            <div className="relative">
         
              {dropdownOpen && (
                <div className="absolute z-50 right-0 mt-2 w-48 bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg">
                  <button
                    onClick={() => alert("Profile clicked")}
                    className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM12 15v5m-5-5h10"
                      />
                    </svg>
                    Profile
                  </button>
                  <button
                    onClick={() => alert("Logout clicked")}
                    className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H3"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header> */}

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6">
          {activeSection === "Dashboard" && <Profile />}
          {/* {activeSection === "Loans" && <AdminLoanDashboard />}
          {activeSection === "Users" && <UsersSection />}
          {activeSection === "Reports" && <ReportsSection />}
          {activeSection === "Settings" && <SettingsSection />} */}
        </div>
      </div>
    </div>
  );
}
