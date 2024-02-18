import axios from 'axios';
import {BASE_URL} from "../apis/APICall";


export const SendInvite = async (emailList, headers) => {
    try {
      const url = BASE_URL + "/api/v1/generate-link";
      const response = await axios.post(url, emailList, {headers});
      return response.data; 
    } catch (error) {
      console.error("Error in RegisterUser:", error);
      throw error; 
    }
  };


  export const CheckIfMemberExist = async (headers) => {
    try {
      const url = BASE_URL + "/api/v1/checkIfMemberExist";
      const response = await axios.post(url, {headers});
      return response.data; 
    } catch (error) {
      console.error("Error in RegisterUser:", error);
      throw error; 
    }
  };