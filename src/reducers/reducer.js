import { DECREMENT, INCREMENT, SET, RESET } from "../actions/actions";

export const initialState = { count: 100 };

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { count: state.count + 1 };
		case DECREMENT:
			return {
				count: state.count - 1,
			};
		case SET:
			return {
				count: parseInt(action.payload),
			};
		case RESET:
			return {
				count: 0,
			};
	}
	return state;
};
