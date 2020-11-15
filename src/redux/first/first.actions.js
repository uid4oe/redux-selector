import { FirstActionTypes } from "./first.types";

export const increaseFirstCounter = (value) => ({
  type: FirstActionTypes.INCREASE_1ST_COUNTER,
  payload: value,
});

export const decreaseFirstCounter = (value) => ({
  type: FirstActionTypes.DECREASE_1ST_COUNTER,
  payload: value,
});
