import { createSelector } from "reselect";

const selectSecond = (state) => state.second;

export const selectSecondCounter = createSelector([selectSecond], (second) => {
  if (-13579 !== second.counter) {
    console.log("With Selector");
  }
  return second.counter;
});
