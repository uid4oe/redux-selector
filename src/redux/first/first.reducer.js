import { FirstActionTypes } from "./first.types";

const INITIAL_STATE = {
  counter: 1,
};

export const firstReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FirstActionTypes.INCREASE_1ST_COUNTER:
      return { ...state, counter: state.counter + Number(action.payload) };
    case FirstActionTypes.DECREASE_1ST_COUNTER:
      return { ...state, counter: state.counter - Number(action.payload) };
    default:
      return state;
  }
};
