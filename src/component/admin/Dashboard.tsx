import SideBar from "../reusable/Sidebar";
import TopNav from "../reusable/TopNav";
import DashboardBody from "../reusable/DashboardBody";
import { useEffect, useState } from "react";
import { DashboardDetails } from "../../utils/apis/APICall";



const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState(null);

  // useEffect(() => {
  //   const token: string = localStorage.getItem("token");

  //   const fetchDashboardDetails = async () => {
  //     const response = DashboardDetails(token);
  //     setDashboardData(response);
  //   }

  //   fetchDashboardDetails();

  // })


  return (
    <div className="flex flex-row bg-white-100 overflow-x-auto h-screen w-screen" style={{ backgroundColor: "#F8F8F9" }}>
    <div className="">
      <SideBar />
    </div>

    <div className="w-full h-full">
      <TopNav />
      <DashboardBody data={dashboardData} />
    </div>
  </div>
  )
}

export default Dashboard

/**
 * countOfPendingRequest
 * countOfAssignedRequest
 * countOfDeclinedRequest
 * countOfApprovedRequest
 * 
 * companyName
 * companyProfilePicture
 *
 */