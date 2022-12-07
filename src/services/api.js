import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer94.herokuapp.com" 
});