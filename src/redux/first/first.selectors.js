import { createSelector } from "reselect";

const selectFirst = (state) => state.first;

export const selectFirstCounter = createSelector(
  [selectFirst],
  (first) => first.counter
);
