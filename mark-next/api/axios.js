import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  timeout: 60000,
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
});

export default Axios;
