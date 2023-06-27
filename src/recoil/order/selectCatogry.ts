import { atom } from "recoil";

export const selectCategory = atom<string>({
  key: "selectCategory",
  default: "",
});
