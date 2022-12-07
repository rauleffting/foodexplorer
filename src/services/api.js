import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-94.herokuapp.com" 
});