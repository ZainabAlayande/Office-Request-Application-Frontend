import { useState} from 'react';

import {Link} from "react-router-dom";

const RequestAccordion = () => {

  const [openList, setOpenList] = useState(false);

  const toggleRequest = () => {
        setOpenList(!openList)
  }


  return (
    <div className="">
        <ul className="border-l pl-3 ml-6">
          
          <div>
          <li className="mb-2 cursor-pointer" onClick={toggleRequest}>
          <Link to="/request/pending">Pending</Link>
          </li>
          </div>
          
          <div className='mb-2 cursor-pointer'>
          <li className="" onClick={toggleRequest}>
          <Link to="/request/assigned">Assigned</Link>
          </li>
          </div>

          <div className='mb-2 cursor-pointer'>
          <li className="" onClick={toggleRequest}>
          <Link to="/request/approved">Approved</Link>
          </li>
          </div>

          <div className='cursor-pointer'>
          <li className="mb-2 cursor-pointer" onClick={toggleRequest}>
          <Link to="/request/declined">Declined</Link>
          </li>
          </div>

        </ul>
    </div>
  );
};

export default RequestAccordion;
