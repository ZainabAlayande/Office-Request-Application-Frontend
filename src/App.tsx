import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/admin/landing-page";
import AdminRegistrationPage from "./component/admin/registration-page"
import LoginPage from "./component/admin/Login";
import ForgotPassword from "./component/admin/ForgotPassword";
import Dashboard from "./component/admin/Dashboard";
import Request from "./component/admin/Request";
import Profile from "./component/admin/Profile";
import Settings from "./component/admin/Settings";

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
            <Route path="/request" element={<Request />}></Route>  
            <Route path="/profile" element={<Profile />}></Route>  
            <Route path="/settings" element={<Settings />}></Route>            
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
