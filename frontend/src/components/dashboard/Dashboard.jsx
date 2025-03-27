import TableRow from "./components/TableRow.jsx";
import useAnswerStore from "../../store/answerStore.jsx";
import { useState } from "react";
import { Link } from "react-router";

const Dashboard = () => {
	const answers = useAnswerStore((state) => state.answers);
	const [assigned, setAssigned] = useState([]);
	const [available, setAvailable] = useState([]);
	return (
		<>
			<div className="navbar shadow-sm bg-[#2563EB]">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="white"
							>
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu  menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3  w-52 px-2 shadow"
						>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="navbar-center">
					<Link className="capitalize text-white text-2xl font-bold" to="/">
						dashboard
					</Link>
				</div>
				<div className="navbar-end">
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="profile"
									src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-53 p-2 shadow"
						>
							<li>
								<Link to="/profile">Profile</Link>
							</li>
							<li>
								<Link to="/settings">Settings</Link>
							</li>
							<li>
								<Link to="/">Sign out</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="w-full max-w-3/4 bg-base-100 p-2">
				<table className="table mt-20">
					<TableRow />
					{/*<tbody className="flex flex-col">
						{answers.map((answer, index) => (
							<TableRow
								key={index}
								answers={answer}
								assigned={assigned}
								available={available}
							/>
						))}
					</tbody>*/}
				</table>
			</div>
		</>
	);
};

export default Dashboard;
