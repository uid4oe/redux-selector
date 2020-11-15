import { createSelector } from "reselect";

const selectSecond = (state) => state.second;

export const selectSecondCounter = createSelector(
  [selectSecond],
  (second) => second.counter
);
