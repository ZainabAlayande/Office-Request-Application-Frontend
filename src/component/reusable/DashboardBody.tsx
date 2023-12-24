import ArrowOptions from "../../assets/svg/ArrowOptions.svg";
// import Pending from "../../assets/svg/pending.svg";
// import MyResponsiveBar from "../charts/MyResponsiveBar";
import PieChart from "../charts/PieChart";
// import { BsPenFill } from "react-icons/bs";
import {pieData} from "../../utils/data/Data";
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../../styles/tailwind.css";
import Rechart from "../charts/Rechart";


  const DashboardBody = () => {

    // const percentage = 66;
      return (
        <div className="p-5">

          <div className="dashboard-overview">Dashboard Overview</div>
          <div className="mt-3 h-28 flex flex-row flex-shrink-0">

          <div className="bg-white p-3 w-48 h-full rounded-xl">
          <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Pending Request</p>
                    <p className="mt-5 w-full card-number">25</p>
                  </div>
                  <div
                    className="ml-4 h-7 w-10 rounded-md items-center"
                    style={{ backgroundColor: "#EBF5FF" }}
                  >

                    
                    <img src={ArrowOptions}  alt="No Img" className="cursor-pointer w-5 h-5 ml-1.5 mt-0.5" />
                  </div>
                </div>
              
              </div>
          </div>


            <div className="bg-white p-3 ml-7 w-46 h-full rounded-xl ">
              <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Assigned Request</p>
                    <p className="mt-5 w-full card-number">25</p>
                  </div>
                  <div
                    className="ml-4 h-7 w-10 rounded-md items-center"
                    style={{ backgroundColor: "#FFE8DE" }}
                  >

                    
                    <img src={ArrowOptions} alt="No Img" className="cursor-pointer w-5 h-5 ml-2 mt-0.5" />
                  </div>
                </div>
              
              </div>
            </div>

            <div className="bg-white p-3 ml-7 w-46 h-full rounded-xl ">
              <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Approved Request</p>
                    <p className="mt-5 w-full card-number">25</p>
                  </div>
                  <div
                    className="ml-4 h-7 w-10 rounded-md items-center"
                    style={{ backgroundColor: "#E7F9F4" }}
                  >

                    
                    <img src={ArrowOptions} alt="No Img" className="cursor-pointer w-5 h-5 ml-2 mt-0.5" />
                  </div>
                </div>
              
              </div>
            </div>

            <div className="bg-white p-3 ml-7 w-46 h-full rounded-xl ">
              <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Declined Request</p>
                    <p className="mt-5 w-full card-number">25</p>
                  </div>
                  <div
                    className="ml-4 h-7 w-10 rounded-md items-center"
                    style={{ backgroundColor: "#F2EBFB" }}
                  >

                    
                    <img src={ArrowOptions} alt="No Img" className="cursor-pointer w-5 h-5 ml-2 mt-0.5" />
                  </div>
                </div>
              
              </div>
            </div>
            
          </div>

          <div className="flex flex-row mt-3 h-96">
          <div className="rounded-xl bg-white h-full w-6/12 mr-4">
          <div>
              <p className="p-3 chart-title">Top 5 Request Category </p>
            </div>
            
            <div  className="p-2 mt-3" style={{fontFamily: "sans-serif", textAlign: "center"}}>
            {/* <MyResponsiveBar data={data} options={options}/> */}
            <Rechart />
            </div>
          </div>

          <div className="rounded-xl bg-white h-full w-6/12">
            <div className="">
              <p className="p-3 chart-title">Top 5 Highest Department</p>
            </div>

            <PieChart data={pieData} />
            
          </div>
          </div>
        
        </div>
      )
    }
    
    export default DashboardBody