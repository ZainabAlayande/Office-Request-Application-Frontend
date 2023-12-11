import {useState} from "react";


const RequestBody = () => {

  const [assignedRequest, setAssignedRequest] = useState([]);
  const [approvedRequest, setApprovedRequest] = useState([]);
  const [declinedRequest, setDeclinedRequest] = useState([]);  

  const fetchAssignedRequests = () => {
    setAssignedRequest([]);
  };

  const fetchApprovedRequests = () => {
    setApprovedRequest([]);

  };

  const fetchDeclinedRequests = () => {
    setDeclinedRequest([]);
  };
   
   
  return (
    <div className='h-full mt-1 ml-4 overflow-y-hidden'>     
      <div className="flex flex-shrink-0 justify-between w-5/6">
        <div className="dashboard-header">Requests</div>
          <div>
            {/* <CalenderPicker /> */}
        </div>
      </div>
      
      
      <div>
        <div className="flex justify-between border-b">
            <button className="border mt-5">Pending</button>
        </div>

      </div>
    </div>
  )
}

export default RequestBody;