import React, { useState } from "react";
import { SendInvite } from "../../utils/apis/EmployeApiCall";
import { toast } from "sonner";

const AddEmployeeModal = () => {
  const [emailString, setEmailString] = useState("");
  const [memberList, setMemberList] = useState(false);

  const splitEmailAddress = (emailList) => {
    return emailList.split(",").map((email) => email.trim());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const emailList = splitEmailAddress(emailString);
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer  ${token}`,
      };
      const response = await SendInvite(emailList, headers);
      toast.success(response.message);
      setMemberList(true);
      window.location.href("/")
    } catch (error) {
      toast.error("Couldn't send invite");
    }
  };

  const mapList = (emailList) => {
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
  };
  

  return (
    <div className="p-5">
      <div className="font-bold mb-8 text-1xl">
        Invite Employee to join "Your Workspace"
      </div>

      <div className="">
        <p className="text-sm">
          Add employee email. Send multiple invites by using commma for
          seperation.
        </p>
        <form onSubmit={handleSubmit}>
          <div class=" items-center">
            <textarea
              class="pl-2 pr-2 py-12 w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter email, seperate with comma"
              value={emailString}
              onChange={(event) => setEmailString(event.target.value)}
            />
          </div>

          <div className="bg-blue-500 mt-5 items-center align-center text-align text-white font-bold py-1 px-3 rounded mr-2 w-full">
            <button type="submit">Send Invite</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
