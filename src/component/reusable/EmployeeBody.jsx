import React from "react";
import { useState } from "react";

const EmployeeBody = () => {
  const [ismemberExist, setIsMemberExist] = useState(false);
  return (
    <div className="p-5 border ml-5 mr-5 mt-5 rounded-md">
      <div class="flex flex-row justify-between mb-5">
        <div>All Employee</div>
        <div class="flex items-center">
          <div className="bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2">
            <button>Add Employee</button>
          </div>
          <div></div>
        </div>
      </div>

      <div class="relative flex items-center">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            class="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M15 10a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          class="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="mt-5">
        {ismemberExist ? (
            <div></div>
        ): (
            <div className="flex items-center justify-center text-center">No Employee</div>
        )}

      </div>
    </div>
  );
};

export default EmployeeBody;
