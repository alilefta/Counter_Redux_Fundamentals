/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { useCounter } from "../use-counter";

const DisplayNumber = () => {
	const { count } = useCounter();
	return (
		<div className="number">
			<h1>{count}</h1>
		</div>
	);
};

export default DisplayNumber;
