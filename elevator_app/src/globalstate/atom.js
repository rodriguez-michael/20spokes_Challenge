import { atom } from "recoil";

export const createGlobalState = atom({
  key: "createGlobalState",
  default: {
    floor: 1
  }
})