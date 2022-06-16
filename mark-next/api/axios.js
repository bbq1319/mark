import axios from "axios";
import { tokenSelector } from "../recoil/selectors";

const Axios = axios.create({
  baseURL: "http://localhost:8090/api/v1/",
  timeout: 60000,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${tokenSelector}`,
    Accept: "application/json",
  },
});

export default Axios;
