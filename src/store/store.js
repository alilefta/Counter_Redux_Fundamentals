import { createStore } from "@reduxjs/toolkit";
import { reducer } from "../reducers/reducer";
export const enhancer =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(reducer, enhancer);
