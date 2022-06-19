import axios from "./axios";

export default class APIs {
  static login = async (loginData) => {
    try {
      const response = await axios.post("login", loginData);
      return response;
    } catch (error) {
      console.error("에러메세지: ", error.message);
      return error.response;
    }
  };

  static checkToken = async (token) => {
    try {
      const response = await axios.post(
        "check/token",
        {},
        {
          headers: {
            "X-AUTH-TOKEN": token,
          },
        }
      );
      return response;
    } catch (error) {
      console.error("에러메세지: ", error.message);
      return error.response;
    }
  };

  static menuList = async (token) => {
    try {
      const response = await axios.post(
        "menu",
        {},
        {
          headers: {
            "X-AUTH-TOKEN": token,
          },
        }
      );
      return response;
    } catch (error) {
      console.error("에러메세지: ", error.message);
      return error.response;
    }
  };
}
