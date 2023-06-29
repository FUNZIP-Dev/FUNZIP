import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const selectCategory = atom<string>({
  key: "selectCategory",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
