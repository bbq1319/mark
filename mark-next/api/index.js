import axios from "axios";

export default class APIs {
  constructor(token) {
    this.axios = axios.create({
      baseURL:
        "http://ec2-3-37-91-227.ap-northeast-2.compute.amazonaws.com:8090/api/v1/",
      timeout: 60000,
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "X-AUTH-TOKEN": token,
      },
    });
  }

  login = async (loginData) => {
    try {
      const response = await this.axios.post("login", loginData);
      return response;
    } catch (error) {
      console.error("에러메세지: ", error.message);
      return error.response;
    }
  };

  checkToken = async () => {
    try {
      const response = await this.axios.post("check/token");
      return response;
    } catch (error) {
      console.error("에러메세지: ", error);
      return error.response;
    }
  };

  getMenuList = async () => {
    try {
      const response = await this.axios.post("menu");
      return response;
    } catch (error) {
      console.error("에러메세지: ", error.message);
      return error.response;
    }
  };
}
