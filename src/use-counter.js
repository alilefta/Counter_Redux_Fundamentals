import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, set, reset } from "./actions/actions";
import { useMemo } from "react";
export const useActions = (actions) => {
	const dispatch = useDispatch();

	return useMemo(
		() => bindActionCreators(actions, dispatch),
		[actions, dispatch]
	);
};

export const useCounter = () => {
	let count = useSelector((state) => state.count);
	const actions = useActions({ increment, decrement, set, reset });
	return { count, ...actions };
};
