import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const users = atom({
  key: "users",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
