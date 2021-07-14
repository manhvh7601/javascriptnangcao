import axios from "axios";

export const axiosCient = axios.create({
  // baseURL: "https://6008fb900a54690017fc2871.mockapi.io",
  baseURL: "http://localhost:3000/",
  headers: { "Content-Type": "application/json"},
});
