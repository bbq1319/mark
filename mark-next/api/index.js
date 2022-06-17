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
}
