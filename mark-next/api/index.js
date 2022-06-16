import axios from "./axios";

export default class APIs {
  static login = async (loginData) => {
    try {
      const response = await axios.post("login", loginData);
      return response;
    } catch (error) {
      console.error("😡 😡 😡", error.message);
      // 에러일 경우 리턴값 재정의 필요합니다 민섭님~
      return "error";
    }
  };
}
