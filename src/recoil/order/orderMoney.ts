import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const orderMoney = atom<number>({
  key: "orderMoney",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
