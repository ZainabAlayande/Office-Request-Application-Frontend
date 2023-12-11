import React from "react";
import "tailwindcss/tailwind.css";
import "../../index.css";
import Image from "../../assets/svg/registration-page.svg"
import Logo from "../../assets/svg/orm-resized-logo.svg";
import ArrowBack from "../../assets/png/arrow-back.png";


const ForgotPassword: React.FC = () => {
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

      <div className="w-1/2 p-8 mt-20 pt-0">
        <img src={Logo} alt="Logo" className="h-48 w-32 -mt-6" />
        <h2 className="text-1xl font-bold pt-0 -mt-16">Forgotten Password?</h2>
        <p className="text-xs">No worries! We are here to help you</p>
        <br />
        <form className="mt-2">

          <div className="mb-8">
            <label className="text-xs font-bold">Email Address</label>{" "}
            <br />
            <input
              className="w-full h-10 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Enter your email address"
            ></input>
          </div>

          <div className="w-full h-10 px-4 rounded-md mb-2 bg-blue-600 cursor-pointer border-2 border-blue-600 text-white flex items-center justify-center font-bold">
            <button type="submit">Reset Password</button>
          </div>
        </form>

        <div className="flex shrink-0 items-center justify-center">
          <a className="text-sm text-blue-600 font-bold" href="/login">
            {" "}
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
