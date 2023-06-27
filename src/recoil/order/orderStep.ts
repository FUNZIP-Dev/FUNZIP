import { atom } from "recoil";

export const orderStep = atom<string>({
  key: "orderStep",
  default: "",
});
