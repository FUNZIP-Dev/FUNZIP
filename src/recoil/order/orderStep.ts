import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const orderStep = atom<string>({
  key: "orderStep",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
