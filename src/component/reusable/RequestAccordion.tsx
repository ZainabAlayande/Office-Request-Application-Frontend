import { useState} from 'react';

import {Link} from "react-router-dom";

const RequestAccordion = () => {

  const [openList, setOpenList] = useState(false);

  const toggleRequest = () => {
        setOpenList(!openList)
  }


  return (
    <div className="">
        <ul className="border-l pl-3 ml-16">
          
          <div>
          <li className="mb-2 cursor-pointer text-gray-500 hover:bg-blue-100 sidebar-request-link" onClick={toggleRequest}>
          <Link to="/request/pending">Pending</Link>
          </li>
          </div>
          
          <div className='mb-2 cursor-pointer '>
          <li className="sidebar-request-link text-gray-500 hover:bg-blue-100" onClick={toggleRequest}>
          <Link to="/request/assigned">Assigned</Link>
          </li>
          </div>

          <div className='mb-2 cursor-pointer'>
          <li className="sidebar-request-link text-gray-500 hover:bg-blue-100" onClick={toggleRequest}>
          <Link to="/request/approved">Approved</Link>
          </li>
          </div>

          <div className='cursor-pointer'>
          <li className="mb-2 cursor-pointer text-gray-500 hover:bg-blue-100 sidebar-request-link" onClick={toggleRequest}>
          <Link to="/request/declined">Declined</Link>
          </li>
          </div>

        </ul>
    </div>
  );
};

export default RequestAccordion;
