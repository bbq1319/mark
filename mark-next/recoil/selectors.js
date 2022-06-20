import { selector } from "recoil";
import { tokenState } from "./states";
import APIs from "../api";

export const apiSelector = selector({
  key: "APIs",
  get: ({ get }) => {
    const token = get(tokenState);

    return new APIs(token);
  },
});
