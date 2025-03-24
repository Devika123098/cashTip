const TableRow = ({
	answers = ["Bills", "Needs", "Wants"],
	available = [300, 200, 600],
	assigned = [150, 240, 560],
}) => {

	return (
		{answers.map((answer,index)=>{
			<tr>
			<th></th>
			<td>
				<input type="checkbox" defaultChecked className="checkbox" />
				{answer}
			</td>
			<td>{assigned[index]}</td>
			<td>{available[index]}</td>
		</tr>
		})}
	);
};

export default TableRow;
