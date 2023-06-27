import { atom } from "recoil";

export const orderMoney = atom<number>({
  key: "orderMoney",
  default: 0,
});
