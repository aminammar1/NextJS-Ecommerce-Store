import axios from "axios";

const GlobalApi = axios.create({
  baseURL: "http://localhost:4000/api",
});
