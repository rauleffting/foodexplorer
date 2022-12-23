import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-qutd.onrender.com"
});

/* "http://localhost:3333" */