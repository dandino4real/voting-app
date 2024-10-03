import { useEffect, useState } from "react";
import CandidateTable from "../candidate-table/table";
import Image from "next/image";
import ElectionTable from "../election-table/table";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Vote() {
  const [isFirstLineActive, setIsFirstLineActive] = useState(true);
  const [selectedElection, setSelectedElection] = useState("");
  const [showElection, setShowElection] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal visibility
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

  // Initial time for the countdown (23 hours, 16 minutes, 48 seconds)
  const initialTime = {
    hours: 23,
    minutes: 16,
    seconds: 48,
  };

  const [time, setTime] = useState(initialTime);

  // Function to handle countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        // Handle seconds countdown
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }

        // Handle minute countdown
        if (seconds === 0 && minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        }

        // Handle hour countdown
        if (minutes === 0 && hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        }

        // Stop countdown at zero
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
        }

        return prevTime;
      });
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  // Calculate percentage for circular progress
  const getHoursPercentage = () => (time.hours / 24) * 100;
  const getMinutesPercentage = () => (time.minutes / 60) * 100;
  const getSecondsPercentage = () => (time.seconds / 60) * 100;


  const toggleLineWidth = () => {
    setIsFirstLineActive(!isFirstLineActive);
  };

  const handleElection = () => {
    setShowElection(true);
  };

  const handleElectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedElection(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 px-2">
      {/* Stepper Section - Responsive Layout */}
      <div
        onClick={toggleLineWidth}
        className="cursor-pointer flex flex-row md:flex-col gap-3 md:gap-0"
      >
        <div className="flex items-center gap-3">
          <div
            className={`h-2 md:h-16 ${
              isFirstLineActive
                ? "w-16 md:w-2 bg-green-500"
                : "w-16 md:w-1 bg-gray-300"
            } transition-all duration-300 rounded-t-lg`}
          ></div>
          <p
            className={`text-sm ${
              isFirstLineActive ? "text-green-500" : "text-gray-400"
            } transition-colors duration-300`}
          >
            Cast Vote
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`h-2 md:h-16 ${
              isFirstLineActive
                ? "w-16 md:w-1 bg-gray-300"
                : "w-16 md:w-2 bg-green-500"
            } transition-all duration-300 rounded-b-lg`}
          ></div>
          <p
            className={`text-sm ${
              isFirstLineActive ? "text-gray-400" : "text-green-500"
            } transition-colors duration-300`}
          >
            Voting History
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-lg text-gray-700 w-full">
        <div></div>

        {isFirstLineActive ? (
          <div className="px-4 md:px-10 w-[85%]">
            <div className="p-5 bg-white rounded-lg shadow">
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full h-40 w-40 object-cover"
                  src="/us-flag.jpeg"
                  alt="candidate"
                   width={500}
                  height={500}
                  sizes="100vw"
                  style={{ objectPosition: "center" }}
                  priority
                />
                {selectedElection && (
                <div className="flex items-center gap-4 text-base mt-6">
                <p className="font-semibold">Time left :</p>
                <div className="flex items-center gap-4 font-semibold">
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={getHoursPercentage()}
                      text={`${time.hours} hrs`}
                      styles={buildStyles({
                        textColor: "#000",
                        pathColor: "#4caf50", // Customize progress color
                        trailColor: "#ddd",
                      })}
                    />
                  </div>
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={getMinutesPercentage()}
                      text={`${time.minutes} mins`}
                      styles={buildStyles({
                        textColor: "#000",
                        pathColor: "#ff9800", // Customize progress color
                        trailColor: "#ddd",
                      })}
                    />
                  </div>
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={getSecondsPercentage()}
                      text={`${time.seconds} secs`}
                      styles={buildStyles({
                        textColor: "#000",
                        pathColor: "#f44336", // Customize progress color
                        trailColor: "#ddd",
                      })}
                    />
                  </div>
                </div>
              </div>
          
                )}
              </div>

              {!showElection && (
                <div className="w-full mx-auto mt-8">
                  <select
                    onChange={handleElectionChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-basecolour focus:border-basecolour block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Select Election Category</option>
                    <option value="PS">2024 U.S presidential election</option>
                    <option value="GS">2024 U.S governorship election</option>
                    <option value="LC">2024 U.S local council election</option>
                  </select>

                  {selectedElection && (
                    <div className="mt-6 flex flex-col md:flex-row md:justify-between gap-5">
                      <div className="flex flex-col">
                        <label
                          htmlFor="start-date"
                          className="text-[#666666] text-sm mb-2"
                        >
                          Start date
                        </label>
                        <input
                          id="start-date"
                          type="text"
                          className="px-3 py-2 border border-[#A6C5DD] rounded-lg focus:outline-none w-full text-sm"
                          value={"22nd September 2024"}
                          disabled
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="end-date"
                          className="text-[#666666] text-sm mb-2"
                        >
                          End date
                        </label>
                        <input
                          id="end-date"
                          type="text"
                          className="px-3 py-2 border border-[#A6C5DD] rounded-lg focus:outline-none w-full text-sm"
                          value={"23rd September 2024"}
                          disabled
                        />
                      </div>
                    </div>
                  )}
                  {selectedElection && (
                    <span
                      className="bg-basecolour text-center text-white py-2 px-4 rounded-lg w-full font-semibold mt-6 mb-4 block"
                      onClick={handleElection}
                    >
                      Continue
                    </span>
                  )}
                </div>
              )}

              {showElection && (
                <div className=" mt-10">
                  <ElectionTable />
                  <button
                    type="submit"
                    onClick={toggleModal} 
                    className="bg-basecolour text-white py-2 px-4 rounded-lg w-full font-semibold mt-6 mb-4"
                  >
                  Cast vote
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="px-4 md:px-10">
            <CandidateTable />
          </div>
        )}
      </div>
{/* Modal */}
<div
        id="popup-modal"
        tabIndex={-1}
        className={`${
          isModalOpen ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Close button */}
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={toggleModal} // Close modal on click
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to proceed? you can&apos;t change your selection after confirmation 
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                onClick={toggleModal}
              >
                Yes, I&apos;m sure
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={toggleModal} // Close modal
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
