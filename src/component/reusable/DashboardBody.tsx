import ArrowOptions from "../../assets/svg/ArrowOptions.svg";
import MyResponsiveBar from "../charts/MyResponsiveBar";
import {data, options} from "../../utils/data/Data";


  const DashboardBody = () => {
      return (
        <div className="p-5">

          <div>Dashboard Overview</div>
          <div className="mt-3 flex flex-row">

          <div className="bg-white p-3 w-46 h-36 rounded-xl ">
              <div className="h-32  p-0 border">
                <div className="p-0 border flex w-full justify-between mb-2">
                
                  <p className="card-title">Pending Request</p>
                  <div className="ml-4 h-7 w-10 rounded-md items-center" style={{ backgroundColor: "#EBF5FF" }}>
                    <img src={ArrowOptions} alt="No Img" className="" />
                  </div>
                </div>

                <div className="mt-6 ml-12 mr-10 border ">
                  <p className="items-center card-amount">25</p>
                  </div>
              
              </div>
            </div>

            <div className="bg-white p-3 ml-7 w-46 h-36 rounded-xl ">
              <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Assigned Request</p>
                    <p className="mt-3 w-full card-amount">25</p>
                  </div>
                  <div
                    className="ml-4 h-7 w-10 rounded-md items-center"
                    style={{ backgroundColor: "#EBF5FF" }}
                  >

                    
                    <img src={ArrowOptions} alt="No Img" className="" />
                  </div>
                </div>
              
              </div>
            </div>

            <div className="bg-white p-3 ml-7 w-46 h-36 rounded-xl ">
              <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Approved Request</p>
                    <p className="mt-3 w-full card-amount">25</p>
                  </div>
                  <div
                    className="ml-4 h-7 w-10 rounded-md items-center"
                    style={{ backgroundColor: "#EBF5FF" }}
                  >

                    
                    <img src={ArrowOptions} alt="No Img" className="" />
                  </div>
                </div>
              
              </div>
            </div>

            <div className="bg-white p-3 ml-7 w-46 h-36 rounded-xl ">
              <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Declined Request</p>
                    <p className="mt-3 w-full card-amount">25</p>
                  </div>
                  <div
                    className="ml-4 h-7 w-10 rounded-md items-center"
                    style={{ backgroundColor: "#EBF5FF" }}
                  >

                    
                    <img src={ArrowOptions} alt="No Img" className="" />
                  </div>
                </div>
              
              </div>
            </div>
            
          </div>

          <div className="flex flex-row mt-3 h-96">
          <div className="border rounded-xl bg-white h-full w-6/12 mr-4">
            <div  className="border p-2 mt-20 ">
            <MyResponsiveBar data={data} options={options}/>
            </div>
          </div>

          <div className="rounded-xl bg-white h-full w-6/12 ">
            <MyResponsiveBar data={data} options={options}/>
          </div>
          </div>
        
        </div>
      )
    }
    
    export default DashboardBody