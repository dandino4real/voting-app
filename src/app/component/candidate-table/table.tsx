import Link from "next/link";
import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "Neil Sims",
    party: "Democratic party (DEM)",
    electionType: "Governorship election",
    year: "12-07-2024",
    transactionId: "x66551cdaa1def9c0dd4c1598",
  },
  {
    id: 2,
    name: "Bonnie Green",
    party: "Democratic party (DEM)",
    electionType: "Presidential election",
    year: "12-07-2024",
    transactionId: "x66551cdaa1def9c0dd4c1598",
  },
  {
    id: 3,
    name: "Jese Leos",
    party: "Democratic party (DEM)",
    electionType: "Local Council election",
    year: "12-07-2024",
    transactionId: "x66551cdaa1def9c0dd4c1598",
  },
  // Add more data here as necessary
];

export default function CandidateTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Handle search input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  // Handle filter change
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Calculate pagination data
  const filteredData = data.filter((candidate) => {
    const matchesSearchTerm =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.party.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "" || candidate.electionType === filter;
    return matchesSearchTerm && matchesFilter;
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Pagination controls
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-4">
      <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4 px-4">
        <div>
          <select
            id="filter-dropdown"
            value={filter}
            onChange={handleFilterChange}
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <option value="">All Elections</option>
            <option value="Presidential election">Presidential Election</option>
            <option value="Governorship election">Governorship Election</option>
            <option value="Local Council election">
              Local Council Election
            </option>
          </select>
        </div>

        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            value={searchTerm}
            onChange={handleSearch}
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by name or party"
          />
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th scope="col" className="p-4">
         
            </th> */}
            <th scope="col" className="px-6 py-3">
              Voted For
            </th>
            <th scope="col" className="px-6 py-3">
              Election Type
            </th>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction Id
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((candidate) => (
            <tr
              key={candidate.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
              >
                <div className="">
                  <div className="text-base font-semibold">
                    {candidate.name}
                  </div>
                  <div className="font-normal text-gray-500">
                    {candidate.party}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">{candidate.electionType}</td>
              <td className="px-6 py-4">{candidate.year}</td>
              <td className="px-6 py-4">{candidate.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 px-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {indexOfFirstRow + 1}-
            {Math.min(indexOfLastRow, filteredData.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {filteredData.length}
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <Link
              href="#"
              onClick={handlePrevPage}
              className={`flex items-center justify-center px-3 h-8 ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              } text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              Previous
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={handleNextPage}
              className={`flex items-center justify-center px-3 h-8 ${
                currentPage === totalPages ? "cursor-not-allowed" : ""
              } text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
