import SideBar from "../reusable/Sidebar";
import TopNav from "../reusable/TopNav";
import RequestBody from "../reusable/RequestBody";


const Request = () => {
  return (
    <div className="flex flex-row bg-white-100 overflow-x-auto h-screen w-screen" style={{ backgroundColor: "#F8F8F9" }}>
      <div>
        <SideBar />
      </div>

      <div className="w-full h-full">
        <TopNav />
        <RequestBody />
      </div>
    </div>
  );
};

export default Request;