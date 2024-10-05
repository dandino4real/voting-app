"use client";

import Image from "next/image";

import { useState } from "react";
import Profile from "../component/profile/profile";
import Vote from "../component/vote/vote";
import Results from "../component/results/results";
import Settings from "../component/settings/settings";

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
              onClick={() => setActiveSection("Vote")}
              className={`flex items-center  py-3 ps-10 w-full transition-colors rounded-lg ${
                activeSection === "Vote"
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
              onClick={() => setActiveSection("Results")}
              className={`flex items-center  py-3 ps-10 w-full transition-colors rounded-lg ${
                activeSection === "Results"
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
              onClick={() => setActiveSection("Settings")}
              className={`flex items-center  py-3 ps-10 w-full transition-colors rounded-lg ${
                activeSection === "Settings"
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
              // onClick={() => setActiveSection("Settings")}
              className={`flex items-center  py-3 ps-10 w-full transition-colors rounded-lg `}
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
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6">
          {activeSection === "Dashboard" && <Profile />}
          {activeSection === "Vote" && <Vote />}
          {activeSection === "Results" && <Results />}
          {activeSection === "Settings" && <Settings />}
        </div>
      </div>
    </div>
  );
}
