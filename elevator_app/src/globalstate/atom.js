import { atom } from "recoil";

export const createGlobalState = atom({
  key: "createGlobalState",
  default: {
    floor: 1
  }
})

// export const createElevatorState = atom({
//   key: "createElevatorState",
//   default: {
//     stopped: true
//   }
// })