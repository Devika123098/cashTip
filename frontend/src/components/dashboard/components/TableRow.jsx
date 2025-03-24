const TableRow = ({ data = [] }) => {
	const firstEntry = data[0];
	const otherTableData = [];

	for (const e of data.slice(1)) {
		otherTableData.push(<td>{e}</td>);
	}

	return (
		<tr>
			<th></th>
			<td>
				<input type="checkbox" defaultChecked className="checkbox" />
				{data[0]}
			</td>
			{otherTableData}
		</tr>
	);
};

export default TableRow;
