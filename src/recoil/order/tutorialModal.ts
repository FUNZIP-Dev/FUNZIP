import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const tutorialModal = atom({
  key: "tutorialModal",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
