import { selector, useRecoilValue } from "recoil";
import { tokenState } from "./states";

const tokenSelector = selector({
  key: "tokenSelector",
  get: ({ get }) => {
    const token = get(tokenState);
    console.log(token);
    return token;
  },
});

export default tokenSelector;
