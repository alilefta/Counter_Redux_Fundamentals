import DisplayNumber from "./DisplayNumber";
import DisplayControls from "./DisplayControls";
function Counter() {
	return (
		<div className="counter">
			<h1>THE HUMAN COUNTER</h1>
			<div className="counter-body">
				<DisplayNumber />
				<DisplayControls />
			</div>
		</div>
	);
}

export default Counter;
