import axios from "axios";

export const BASE_URL = "http://localhost:8081";


export const RegisterUser = async (employeeRegistrationDetails: { name: string; email: string; password: string; confirmPassword: string; }) => {
    try {
      const url = BASE_URL + "/api/v1/company/register";
      const response = await axios.post(url, employeeRegistrationDetails);
      return response.data; 
    } catch (error) {
      console.error("Error in RegisterUser:", error);
      throw error; 
    }
  };

export const LoginUser = async (employeeLoginDetails: { email: string; password: string; }) => {
    try {
        const url = BASE_URL + "/login";
        const response = await axios.post(url, employeeLoginDetails);
        return response.data; 
      } catch (error) {
        console.error("Error in LoginUser:", error);
        throw error; 
      }
} 


export const DashboardDetails = async (token: string) => {
  try {
      const url = BASE_URL + "/dashboard";
      const response = await axios.post(url, token);
      return response.data; 
    } catch (error) {
      console.error("Error in LoginUser:", error);
      throw error; 
    }
} 