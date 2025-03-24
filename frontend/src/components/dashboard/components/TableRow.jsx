const TableRow = ({
	key = 0,
	answers = ["Bills", "Needs", "Wants"],
	availableAmounts = [300, 200, 600],
	assignedAmounts = [150, 240, 560],
}) => {
	const answerData = [];
	const availableAmountData = [];
	const assignedAmountData = [];

	function renderData(dataStore, data, typeOfData = "answer") {
		if (typeOfData === "answer") {
			for (const d of data) {
				dataStore.push(
					<td>
						<input type="checkbox" defaultChecked className="checkbox" />
						{d}
					</td>,
				);
			}
		} else {
			for (const d of data) {
				dataStore.push(<td>{d}</td>);
			}
		}
		return dataStore;
	}

	return (
		<>
			<tr>
				<th></th>
				{renderData(answerData, answers, "answer")}
				{renderData(availableAmountData, availableAmounts, "")}
				{renderData(assignedAmountData, assignedAmounts, "")}
			</tr>
		</>
	);
};
export default TableRow;
