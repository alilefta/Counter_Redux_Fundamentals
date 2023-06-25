// Action Constants
export const INCREMENT = "INCREMENT";
export const RESET = "RESET";
export const DECREMENT = "DECREMENT";
export const SET = "SET";

// Action Creators
export const increment = () => ({ type: INCREMENT });
export const reset = () => ({ type: RESET });
export const decrement = () => ({ type: DECREMENT });
export const set = (value) => ({ type: SET, payload: value });
