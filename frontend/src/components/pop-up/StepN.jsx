import { useState } from "react";
import useAnswerStore from "../../store/answerStore";

const StepN = ({
	onBack,
	onContinue,
	initialSelections = [],
	question,
	options,
	isLastStep = false,
}) => {
	const [selectedOptions, setSelectedOptions] = useState(initialSelections);
	const [error, setError] = useState("");
	const addAnswer = useAnswerStore((state) => state.addAnswer);
	
	const handleCheckboxChange = (event) => {
		const { value, checked } = event.target;
		setSelectedOptions((prev) =>
			checked ? [...prev, value] : prev.filter((option) => option !== value),
		);
		setError("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (selectedOptions.length === 0) {
			setError("Please select at least one option");
			return;
		}
		const currentAnswers = useAnswerStore.getState().answers.map((answer) => answer);
		selectedOptions.forEach((option)=>{
			if(!currentAnswers.includes(option)){
				addAnswer(option);
			}
		});
		onContinue(selectedOptions);
	};

	const getIcon = (option) => {
		switch(option.toLowerCase()) {
			case 'dining out': return '🍽️';
			case 'entertainment': return '🎬';
			case 'video games': return '🎮';
			case 'hobbies': return '🎨';
			case 'charity': return '❤️';
			case 'gifts': return '🎁';
			case 'home decor': return '🏠';
			case 'celebrations': return '🎉';
			// Add more cases for other options
			default: return '📌';
		}
	};

	return (
<<<<<<< HEAD
		<form
			onSubmit={handleSubmit}
			className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-96 h-96 p-4 shadow-md ring-1 ring-gray-200 rounded-md"
		>
			<h4 className="text-xl p-2">{question}</h4>
			<div className="grid grid-cols-2 gap-2 p-2">
				{options.map((option) => (
					<label key={option} className="flex items-center gap-2">
						<input
							type="checkbox"
							name="selection"
							value={option}
							checked={selectedOptions.includes(option)}
							onChange={handleCheckboxChange}
						/>
						{option.charAt(0).toUpperCase() + option.slice(1)}
					</label>
				))}
			</div>
			{error && <p className="text-red-500 text-sm p-2">{error}</p>}
			<div className="flex justify-between p-2">
				<button
					type="button"
					onClick={onBack}
					className="border bg-gray-200 rounded-md px-2 text-gray-400 hover:bg-gray-300"
				>
					Back
				</button>
				<button
					type="submit"
					className="border bg-gray-200 rounded-md px-2 text-gray-400 hover:bg-gray-300"
				>
					{isLastStep ? "Finish" : "Continue"}
				</button>
			</div>
		</form>
=======
		<div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
			<form
				onSubmit={handleSubmit}
				className="bg-white w-[600px] rounded-3xl shadow-xl p-8"
			>
				<div className="flex items-center gap-3 mb-8">
					<span className="text-2xl">❤️</span>
					<h2 className="text-2xl font-semibold text-gray-900">{question}</h2>
				</div>

				{question.includes("Last question") && (
					<p className="text-gray-600 mb-6">Last question, we promise!</p>
				)}

				<div className="grid grid-cols-2 gap-4 mb-8">
					{options.map((option) => (
						<label
							key={option}
							className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer
								${selectedOptions.includes(option)
									? 'border-blue-500 bg-blue-50'
									: 'border-gray-200 hover:border-gray-300 bg-gray-50'
								}`}
						>
							<input
								type="checkbox"
								name="selection"
								value={option}
								checked={selectedOptions.includes(option)}
								onChange={handleCheckboxChange}
								className="hidden"
							/>
							<span className="text-xl">{getIcon(option)}</span>
							<span className="text-gray-700 font-medium">
								{option.charAt(0).toUpperCase() + option.slice(1)}
							</span>
						</label>
					))}
				</div>

				{error && (
					<p className="text-red-500 text-sm mb-4">{error}</p>
				)}

				<div className="flex justify-between items-center">
					<button
						type="button"
						onClick={onBack}
						className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium rounded-lg transition-colors"
					>
						Back
					</button>
					<button
						type="submit"
						className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
					>
						{isLastStep ? "Show Me The Money (Plan)!" : "Continue"}
					</button>
				</div>
			</form>
		</div>
>>>>>>> feat/pop-up
	);
};

export default StepN;
