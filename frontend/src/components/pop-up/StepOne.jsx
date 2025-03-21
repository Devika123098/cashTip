import { useState } from "react";
import { Link } from "react-router";

const StepOne = () => {
	const [inputValue, setInputValue] = useState("");
	const handleInputChange = (event) => {
		event.preventDefault();
		setInputValue(event.target.value);
	};

	return (
		<>
			<form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 p-4 shadow-md ring-1 ring-gray-200 rounded-md">
				<h4 className="text-xl p-2">People call us Moni-Mind</h4>
				<p className="text-sm p-2 text-gray-400">What should we call you?</p>
				<div className="flex flex-col px-2">
					<input
						className="w-[30vh] h-9 border-b p-2 outline-none text-md"
						type="text"
						placeholder="Your first name"
						required
						value={inputValue}
						onChange={handleInputChange}
					/>
				</div>
				<div class="p-2">
					<Link
						className="border bg-gray-200 rounded-md mt-3 px-2  mt-5 text-gray-400"
						to="/pop-up/2"
					>
						Continue
					</Link>
				</div>
			</form>
		</>
	);
};

export default StepOne;
