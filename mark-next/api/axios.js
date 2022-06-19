import axios from "axios";
import { tokenSelector } from "../recoil/selectors";
import { tokenState } from "../recoil/states";

const Axios = axios.create({
  // baseURL: "http://localhost:8090/api/v1/",
  baseURL:
    "http://ec2-3-37-91-227.ap-northeast-2.compute.amazonaws.com:8090/api/v1/",
  timeout: 60000,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${tokenSelector}`,
    Accept: "application/json",
  },
});

export default Axios;
