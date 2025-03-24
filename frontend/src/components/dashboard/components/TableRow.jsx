const TableRow = ({
	key = 0,
	answers = ["Bills", "Needs", "Wants"],
	availableAmounts = [300, 200, 600],
	assignedAmounts = [150, 240, 560],
}) => {
	const answerData = [];
	const availableAmountData = [];
	const assignedAmountData = [];

	//TODO:
	// function renderData(dataStore, data, typeOfData = "answer") {
	// 	if (typeOfData === "answer") {
	// 		for (const d of data) {
	// 			dataStore.push(
	// 				<td>
	// 					<input type="checkbox" defaultChecked className="checkbox" />
	// 					{d}
	// 				</td>,
	// 			);
	// 		}
	// 	} else {
	// 		for (const d of data) {
	// 			dataStore.push(<td>{d}</td>);
	// 		}
	// 	}
	// }

	for (const answer of answers) {
		answerData.push(
			<td>
				<input type="checkbox" defaultChecked className="checkbox" />
				{answer}
			</td>,
		);
	}

	for (const availableAmount of availableAmounts) {
		availableAmountData.push(<td>{availableAmount}</td>);
	}

	for (const assignedAmount of assignedAmounts) {
		assignedAmountData.push(<td>{assignedAmount}</td>);
	}

	return (
		<>
			<tr>
				<th></th>
				{answerData}
				{availableAmountData}
				{assignedAmountData}
			</tr>
		</>
	);
};
export default TableRow;
