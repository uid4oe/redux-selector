import { SecondActionTypes } from "./second.types";

const INITIAL_STATE = {
  counter: 1000,
};

export const secondReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SecondActionTypes.INCREASE_2ND_COUNTER:
      return { ...state, counter: state.counter + Number(action.payload) };
    case SecondActionTypes.DECREASE_2ND_COUNTER:
      return { ...state, counter: state.counter - Number(action.payload) };
    default:
      return state;
  }
};
