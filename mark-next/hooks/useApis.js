import { useRecoilValue } from "recoil";
import { apiSelector } from "../recoil/selectors";

export const useAPIs = () => {
  return useRecoilValue(apiSelector);
};
