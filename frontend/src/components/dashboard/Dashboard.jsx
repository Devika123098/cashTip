import { tableColumns } from "./config/tableColumns.mjs";

const entries = Object.entries(tableColumns);
const firstEntry = entries[0];
const otherEntries = entries.slice(1);

const Dashboard = () => {
	return (
		<>
			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col justify-center items-center">
					<div></div>
					<div className="overflow-x-auto">
						<table className="table">
							{/* head */}
							<thead>
								<tr>
									<th></th>
									<th>
										<input
											type="checkbox"
											defaultChecked
											className="checkbox uppercase"
										/>
										{firstEntry[0]}
									</th>
									{otherEntries.map(([key, value]) => (
										<th className="uppercase" key={key}>
											{key}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								<tr>
									<th></th>
									<td>
										<input
											type="checkbox"
											defaultChecked
											className="checkbox"
										/>
										Cy Ganderton
									</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
								</tr>
								{/* row 2 */}
								<tr>
									<th></th>
									<td>
										<input
											type="checkbox"
											defaultChecked
											className="checkbox"
										/>
										Hart Hagerty
									</td>
									<td>Desktop Support Technician</td>
									<td>Purple</td>
								</tr>
								{/* row 3 */}
								<tr>
									<th></th>
									<td>
										<input
											type="checkbox"
											defaultChecked
											className="checkbox"
										/>
										Brice Swyre
									</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
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
