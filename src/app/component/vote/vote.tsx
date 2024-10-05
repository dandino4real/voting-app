import { useEffect, useState } from "react";
import CandidateTable from "../candidate-table/table";
import Image from "next/image";
import ElectionTable from "../election-table/table";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Vote() {
  const [isFirstLineActive, setIsFirstLineActive] = useState(true);
  const [selectedElection, setSelectedElection] = useState("");
  const [showElection, setShowElection] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goBack, setGoBack] = useState(0);
  const [confirmVote, setConfirmVote] = useState(false);
  const [voted, setVoted] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFinish = () => {
    setSelectedElection("");
    setShowElection(false);
    setGoBack(0);
    setConfirmVote(false);
    setConfirmVote(false);
  };

  // Initial time for the countdown (23 hours, 16 minutes, 48 seconds)
  const initialTime = {
    hours: 23,
    minutes: 16,
    seconds: 48,
  };

  const [time, setTime] = useState(initialTime);

  // Function to handle confirmation
  const handleConfirmation = () => {
    toggleModal();
    setConfirmVote(true);
  };

  //function tohandle vote

  const handleVote = () => {
    setVoted(!voted);
  };

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

  const handleGoBack = () => {
    setGoBack((prev) => prev - 1);
    if (goBack < 2) {
      setSelectedElection("");
      setShowElection(false);
    }
    if (goBack === 2) {
      setShowElection(false);
    }
  };

  const handleElection = () => {
    setGoBack((prev) => prev + 1);
    setShowElection(true);
  };

  const handleElectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGoBack((prev) => prev + 1);
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
        {isFirstLineActive ? (
          <div className="px-4 md:px-10 w-[85%] ">
            <div className="relative p-5 bg-white rounded-lg shadow ">
              {confirmVote ? (
                <>
                  {!voted ? (
                    <div className=" flex flex-col items-center p-8">
                      <Image
                        className="rounded-full h-16 w-16 object-cover p-2 bg-[#F1F6F9] "
                        src="/pass.svg"
                        alt="candidate"
                        width={500}
                        height={500}
                        sizes="100vw"
                        style={{ objectPosition: "center" }}
                        priority
                      />

                      <div className=" w-[75%] text-center my-10">
                        <h3 className=" font-semibold text-xl">
                          Congratulations 🎊
                        </h3>
                        <p className="mt-6 text-[#2B2928] ">
                          Your transaction has been confirmed and your vote has
                          been casted successfully
                        </p>
                        <p
                          className="mt-8 bg-basecolour  font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out text-[#fff] p-2 rounded-lg  cursor-pointer"
                          onClick={handleVote}
                        >
                          View Vote
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="px-4 pb-8">
                      <div className=" flex justify-between items-center text-sm">
                        <h3 className="text-[#01916E] text-base font-semibold">
                          2024 Governorship Election , Marion County, Florida.{" "}
                        </h3>
                        <h3 className=" bg-[#46829C] px-5 py-2 text-[#fff] rounded-lg text-sm">
                          Voted
                        </h3>
                      </div>
                      <div className="flex justify-center mt-8">
                        <Image
                          className="rounded-full h-40 w-40 object-cover "
                          src="/demo-img-1.avif"
                          alt="candidate"
                          width={500}
                          height={500}
                          sizes="100vw"
                          style={{ objectPosition: "center" }}
                          priority
                        />
                      </div>
                      <div className=" text-sm mt-8 ">
                        <div>
                          <label htmlFor="name" className=" text-[#0A0B0A] ">
                            Candidate name
                          </label>
                          <p className=" border border-[#01CD9C] rounded-lg px-3 py-2 text-[#0A0B0A] mt-2">
                            Sarah Mendez
                          </p>
                        </div>

                        <div className=" flex justify-between mt-8">
                          <div>
                            <label htmlFor="name" className=" text-[#0A0B0A]">
                              Transaction ID
                            </label>
                            <p className="border border-[#01CD9C] rounded-lg px-3 py-2 text-[#0A0B0A] mt-2 flex items-center">
                              x66551cdaa1def9c0dd4c1598
                              <span className="pl-8">
                                <Image
                                  className="h-5 w-5"
                                  src="/copy.svg"
                                  alt="copy"
                                  width={20}
                                  height={20}
                                  sizes="100vw"
                                />
                              </span>
                            </p>
                          </div>
                          <div>
                            <label htmlFor="name" className=" text-[#0A0B0A]">
                              Number of vote casted
                            </label>
                            <p className=" border border-[#01CD9C] rounded-lg px-3 py-2 text-[#0A0B0A] mt-2">
                              21,000,253
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <span
                          className="bg-basecolour font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out px-6 py-3 text-[#fff] rounded-full text-sm cursor-pointer mt-6"
                          onClick={handleFinish}
                        >
                          Finish
                        </span>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <div className="flex flex-col items-center  ">
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
                    {selectedElection && goBack > 0 && (
                      <div className="flex items-center gap-4 text-base mt-6">
                        <p className="font-semibold">Time left :</p>
                        <div className="flex items-center gap-4 font-semibold">
                          <div className="w-16 h-16">
                            <CircularProgressbar
                              value={getHoursPercentage()}
                              text={`${time.hours} hrs`}
                              styles={buildStyles({
                                textColor: "#000",
                                pathColor: "#4caf50",
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
                                pathColor: "#ff9800",
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
                      {goBack === 0 && (
                        <select
                          onChange={handleElectionChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-basecolour focus:border-basecolour block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={selectedElection}
                        >
                          <option value="">Select Election Category</option>
                          <option value="PE">
                            2024 U.S presidential election
                          </option>
                          <option value="GE">
                            2024 U.S governorship election
                          </option>
                          <option value="LC">
                            2024 U.S local council election
                          </option>
                        </select>
                      )}

                      {selectedElection && goBack === 1 && (
                        <>
                          <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                            {selectedElection === "PE" && (
                              <p>2024 U.S presidential election</p>
                            )}
                            {selectedElection === "GE" && (
                              <p>2024 U.S governorship election</p>
                            )}
                            {selectedElection === "LC" && (
                              <p>2024 U.S local council election</p>
                            )}
                          </div>
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
                        </>
                      )}
                      {selectedElection && goBack === 1 && (
                        <span
                          className="bg-basecolour text-center text-white py-2 px-4 rounded-lg w-full font-semibold mt-6 mb-4 block cursor-pointer"
                          onClick={handleElection}
                        >
                          Continue
                        </span>
                      )}
                    </div>
                  )}

                  {showElection && goBack === 2 && (
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

                  {goBack > 0 && (
                    <div
                      className="absolute top-0 left-0 p-5 cursor-pointer flex items-center space-x-2 group"
                      onClick={handleGoBack}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 transition-transform transform group-hover:-translate-x-2 duration-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      {/* <span className="transition-opacity group-hover:opacity-70 duration-300 text-sm">back</span> */}
                    </div>
                  )}
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
                Are you sure you want to proceed? you can&apos;t change your
                selection after confirmation
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                onClick={handleConfirmation}
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
