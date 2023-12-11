import React from "react";
import "../registration-page/registration-page.css";
import "tailwindcss/tailwind.css";
import "../../index.css";
import Image from "../../assets/svg/registration-page.svg";
import Logo from "../../assets/svg/orm-resized-logo.svg";
import EyeIcon from "../../assets/svg/eye-icon.svg";
import ArrowBack from "../../assets/png/arrow-back.png";


const ChangePasswordPage: React.FC = () => {
  return (
    <div className="flex h-screen overflow-y-hidden pt-0">
      <div className="w-1/2 bg-blue-600 flex items-center justify-center">
        <img
          src={ArrowBack}
          alt="Arrow Back"
          style={{
            maxWidth: "2%",
            maxHeight: "2%",
            position: "absolute",
            top: "3%",
            left: "2%",
            filter: "invert(1)",
          }}
        />
        <img
          src={Image}
          alt="Your Image"
          className="object-center"
          style={{ maxHeight: "80%", maxWidth: "80%" }}
        />
      </div>

      <div className="w-1/2 p-8 mt-16 pt-0">
        <img src={Logo} alt="Logo" className="h-48 w-32 -mt-6" />
        <h2 className="text-1xl font-bold pt-0 -mt-16">Reset Password</h2>
        <br />
        <form className="mt-2">

          <div className="mb-8 relative">
            <label className="text-xs font-bold block mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full h-10 px-4 rounded-md bg-gray-300 border-2 border-gray-300 text-xs"
                placeholder="Choose a new password"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src={EyeIcon}
                  alt="Eye Icon"
                  className="h-4 w-4 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="mb-8 relative">
            <label className="text-xs font-bold block mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full h-10 px-4 rounded-md bg-gray-300 border-2 border-gray-300 text-xs"
                placeholder="Confirm your new password"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src={EyeIcon}
                  alt="Eye Icon"
                  className="h-4 w-4 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-10 px-4 rounded-md mb-2 bg-blue-600 cursor-pointer border-2 border-blue-600 text-white flex items-center justify-center font-bold">
            <button type="submit">Change Password</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ChangePasswordPage;
