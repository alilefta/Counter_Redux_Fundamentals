/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useCounter } from "../use-counter";
import { useSelector } from "react-redux";

const DisplayControls = () => {
	const [inputField, setInputField] = useState(0);
	let { count, increment, decrement, set, reset } = useCounter();
	useEffect(() => {
		setInputField(count);
	}, [count]);
	return (
		<div className="controls">
			<button className="inc" onClick={() => increment()}>
				INC +
			</button>
			<button className="reset" onClick={() => reset()}>
				Reset
			</button>
			<button className="dec" onClick={() => decrement()}>
				- DEC
			</button>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					set(inputField);
				}}
			>
				<input
					type="number"
					placeholder="Give a number"
					onChange={(e) => setInputField(e.target.value)}
					value={inputField}
				/>
				<button className="set" type="submit">
					SET
				</button>
			</form>
		</div>
	);
};

export default DisplayControls;
