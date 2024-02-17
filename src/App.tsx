import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/admin/landing-page";
import AdminRegistrationPage from "./component/admin/Registration-Page"
import LoginPage from "./component/admin/Login";
import ForgotPassword from "./component/admin/ForgotPassword";
import Dashboard from "./component/admin/Dashboard";
import PendingRequest from "./component/admin/PendingRequest";
import AssignedRequest from "./component/admin/AssignedRequest";
import ApprovedRequest from "./component/admin/ApprovedRequest";
import DeclinedRequest from "./component/admin/DeclinedRequest";
import Employee from "./component/admin/Employee";
import Settings from "./component/admin/Settings";
import RequestAccordion from "./component/reusable/RequestAccordion";
// import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/admin-registration" element={<AdminRegistrationPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />}></Route>  
            <Route path="/dashboard" element={<Dashboard />}></Route>  
            <Route path="/request/pending" element={<PendingRequest />}></Route> 
            <Route path="/request/assigned" element={<AssignedRequest />}></Route> 
            <Route path="/request/approved" element={<ApprovedRequest />}></Route> 
            <Route path="/request/declined" element={<DeclinedRequest />}></Route>  
            <Route path="/employee" element={<Employee />}></Route>  
            <Route path="/settings" element={<Settings />}></Route>  
            <Route path="/requestAccordion" element={<RequestAccordion />}></Route>   
                    
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
