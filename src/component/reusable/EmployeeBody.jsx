import React, { useEffect } from "react";
import { useState } from "react";
import AddEmployeeModal from "../modal/AddEmployeeModal";
import Modal from 'react-modal';
import {modalStyles} from "../../utils/func/ReusableFunctions";
import { CheckIfMemberExist } from "../../utils/apis/EmployeApiCall";


const EmployeeBody = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [ismemberExist, setMemberExist] = useState(false);
  const [memberDetails, setMemberDetails] = useState([{}]);

  const closeModal = () => {
      setModalOpen(false);
  }

  const checkIfMemberExist = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer  ${token}`,
      };
      const response = await CheckIfMemberExist(headers);
      setMemberDetails(response.data)
      if (memberDetails.length > 0) {
        setMemberExist(true);
      }
    } catch (error) {
      toast.error("Couldn't send invite");
    }
  }

  useEffect(() => {
    checkIfMemberExist();
  })
  
  return (
    <div className="p-5 border ml-5 mr-5 mt-5 rounded-md">
      <div class="flex flex-row justify-between mb-5">
        <div>All Employee</div>
        <div class="flex items-center">
          <div className="bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2">
            <button onClick={() => setModalOpen(true)}>Add Employee + </button>
          </div>
          <div>
            {modalOpen && (
              <Modal isOpen={modalOpen} onRequestClose={closeModal} ariaHideApp={false} style={modalStyles}>
                  <AddEmployeeModal onDone={checkIfMemberExist}/>
              </Modal>

            )}
          </div>
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
            <div>
              <MapList emailList={memberDetails}/>
            </div>
        ): (
            <div className="flex items-center justify-center text-center">No Employee</div>
        )}

      </div>
    </div>
  );
};

export default EmployeeBody;

const MapList = (emailList) => {
  return (
    <div>
      {emailList.map((email) => (
        <div className="flex flex-row justify-between" key={email}>
          <div className="flex flex-row">
            <img src="" alt="No Image" />
            <h2>{email}</h2>
          </div>

          <div>
            <button>Remove</button>
          </div>
        </div>
      ))}
    </div>
);
}
