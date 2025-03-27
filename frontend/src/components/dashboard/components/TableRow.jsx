const TableRow = ({
	key = 0,
	categories = ["Category", "Assigned", "Available"],
	answers = ["Bills", "Needs", "But", "Wants", "Some", "Money"],
	assignedAmounts = [150, 240, 560, 0, 100, 200],
	availableAmounts = [300, 200, 600, 0, 20, 20],
}) => {
	return (
		<>
			{categories.map((category, index) => (
				<th
					key={`${key}-${index}`}
					className="w-2 shadow bg-[#2563EB] text-white"
				>
					<div className="flex gap-4 ">{category}</div>
				</th>
			))}
			{answers.map((answer, index) => (
				<tr key={`${key}-${index}`} className="border-gray-300">
					<td className="w-2/5 hover:bg-gray-200 shadow">
						<div className="flex gap-4">
							<input
								type="checkbox"
								defaultChecked
								className="checkbox accent-blue-500"
								aria-label={`Select ${answer}`}
							/>
							{answer}
						</div>
					</td>
					<td className="hover:bg-gray-200  shadow">
						${assignedAmounts[index].toLocaleString()}
						<button type="button" className="btn float-right h-6">
							edit
						</button>
					</td>
					<td className=" hover:bg-gray-200 shadow">
						${availableAmounts[index].toLocaleString()}
						<button type="button" className="btn float-right h-6">
							edit
						</button>
					</td>
				</tr>
			))}
		</>
	);
};

export default TableRow;
