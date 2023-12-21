import DeclinedRequestBody from "../reusable/DeclinedRequestBody";
import "../../styles/tailwind.css"
import SideBar from "../reusable/Sidebar";
import TopNav from "../reusable/TopNav";


const PendingRequest = () => {
  return (

<div className="flex flex-row bg-white-100 overflow-x-auto h-screen w-screen" style={{ backgroundColor: "#F8F8F9" }}>
<div className="">
  <SideBar />
</div>

<div className="w-full h-full">
  <TopNav />
  <DeclinedRequestBody />
</div>
</div>
  )
};

export default PendingRequest;