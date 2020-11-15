import { SecondActionTypes } from "./second.types";

export const increaseSecondCounter = (value) => ({
  type: SecondActionTypes.INCREASE_2ND_COUNTER,
  payload: value,
});

export const decreaseSecondCounter = (value) => ({
  type: SecondActionTypes.DECREASE_2ND_COUNTER,
  payload: value,
});
