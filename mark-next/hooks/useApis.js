import { useRecoilValue } from "recoil";
import { apiSelector } from "../recoil/selectors";

export const useApis = () => {
  return useRecoilValue(apiSelector);
};
