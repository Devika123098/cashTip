import TableRow from "./components/TableRow.jsx";
import useAnswerStore from "../../store/answerStore.jsx";
import { useState } from "react";
const Dashboard = () => {
	const answers = useAnswerStore((state) => state.answers);
	const [assigned, setAssigned] = useState([]);
	const [available, setAvailable] = useState([]);
	return (
		<>
			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col justify-center items-center">
					<div className="overflow-x-auto">
						<table className="table">
							{/* head */}
							<thead>
								<TableRow data={["Category", "Assigned", "Available"]} />
							</thead>
							<tbody className="flex flex-col">
								{answers.map((answer, index) => (
									<TableRow
										key={index}
										answers={answer}
										assigned={assigned}
										available={available}
									/>
								))}
							</tbody>
						</table>
					</div>
					<label
						htmlFor="my-drawer-2"
						className="btn btn-primary drawer-button lg:hidden"
					>
						Open drawer
					</label>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-2"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
						{/* Sidebar content here */}
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Dashboard;