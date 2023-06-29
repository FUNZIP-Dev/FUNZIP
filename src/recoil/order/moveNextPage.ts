import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const moveNextPage = atom({
  key: "moveNextPage",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
