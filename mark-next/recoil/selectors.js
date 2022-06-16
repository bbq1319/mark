import APIs from "../api";
import { selector } from "recoil";
import { tokenState } from "./states";

export const tokenSelector = selector({
  key: "tokenSelector",
  get: ({ get }) => {
    const token = get(tokenState);
    return token;
  },
});
