import Image from "next/image";
import { useState } from "react";

export default function Results() {
  const [chartType, setChartType] = useState("");

  const handleChartChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChartType(event.target.value);
  };
  
  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-between items-center mb-6">
        {/* Election Category Select */}
        <div className="w-full md:w-[70%] mb-4 md:mb-0">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-basecolour focus:border-basecolour block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            value=""
          >
            <option value="">Select Election Category</option>
            <option value="PE">2024 U.S Presidential Election</option>
            <option value="GE">2024 U.S Governorship Election</option>
            <option value="LC">2024 U.S Local Council Election</option>
          </select>
        </div>
        {/* Ongoing Status */}
        <div className="text-[#5797B4] bg-[#E2EDF2] rounded-lg px-6 py-3">
          Ongoing
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-wrap gap-6">
        {/* Recent Results */}
        <div className="w-full lg:w-[60%] bg-white rounded-lg px-4 py-6 shadow">
          <div className="text-[#433E3F] mb-6">
            <h3 className="font-semibold">Recent results</h3>
            <p className="text-sm">1 min ago</p>
          </div>
          <div className="text-sm text-[#433E3F] space-y-5">
            {["Olivia Reynolds", "John Doe", "Sam Smith"].map((candidate, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-5">
                <div>
                  <h3 className="font-semibold">Democratic Party (DEM)</h3>
                  <p>{candidate}</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold">21,578,182</p>
                  <span>votes</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full lg:w-[35%] bg-white rounded-lg px-5 py-4 shadow">
          <div className="flex justify-between items-center text-[#433E3F] mb-6">
            <h3 className="font-semibold">Stats</h3>
            <div className="flex gap-2 items-center bg-[#017358] rounded-lg px-4 py-2 text-white cursor-pointer">
              <p>Refresh</p>
              <Image
                src={"/refresh.svg"}
                alt="refresh_icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
              />
            </div>
          </div>
          <div className="text-sm space-y-7">
            <div>
              <h3>Total votes submitted </h3>
              <h3 className="border-b border-gray-300 p-2 font-semibold">
                167,443
              </h3>
            </div>
            <div>
              <h3>Total canceled votes</h3>
              <h3 className="border-b border-gray-300 p-2 text-red-700 font-semibold">11,650</h3>
            </div>
            <div>
              <h3>Total valid votes</h3>
              <h3 className="p-2 font-semibold text-basecolour_hover">167,443</h3>
            </div>
          </div>
        </div>

        {/* Chart Select and Display */}
        <div className="w-full lg:w-[50%] mb-10">
          <select
            className="bg-gray-50 border border-gray-300 text-[#13B959] text-sm rounded-lg focus:ring-basecolour focus:border-basecolour block w-full p-2.5"
            value={chartType}
            onChange={handleChartChange}
          >
            <option value="bar">Bar Chart</option>
            <option value="pie">Pie Chart</option>
          </select>

          {/* Render chart based on selection */}
          <div className="mt-4">
            {chartType === "bar" ? (
              <div className="bg-gray-200 h-[200px] rounded-lg flex items-center justify-center">
                {/* Placeholder for Bar Chart */}
                Bar Chart Goes Here
              </div>
            ) : chartType === "pie" ? (
              <div className="bg-gray-200 h-[200px] rounded-lg flex items-center justify-center">
                {/* Placeholder for Pie Chart */}
                Pie Chart Goes Here
              </div>
            ) : (
              <div className="text-center text-gray-500">Select a chart type</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
