import axios from "axios";

const newRequests = axios.create({
  baseURL: "http://localhost:8080/api/",
  withCredentials: true,
});

export default newRequests;
