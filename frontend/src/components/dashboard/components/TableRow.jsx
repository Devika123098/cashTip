import { useState } from 'react';

const TableRow = ({
	key = 0,
	categories = ["Category", "Assigned", "Available"],
	answers = ["Bills", "Needs", "But", "Wants", "Some", "Money"],
	assignedAmounts = [150, 240, 560, 0, 100, 200],
	availableAmounts = [300, 200, 600, 0, 20, 20],
}) => {
	const [editingCell, setEditingCell] = useState(null);
	const [editedValues, setEditedValues] = useState({
		assigned: [...assignedAmounts],
		available: [...availableAmounts]
	});

	const handleEdit = (type, index) => {
		setEditingCell({ type, index });
	};

	const handleSave = (type, index) => {
		setEditingCell(null);
	};

	const handleChange = (type, index, value) => {
		const newValues = { ...editedValues };
		newValues[type][index] = Number(value) || 0;
		setEditedValues(newValues);
	};

	return (
		<>
			{categories.map((category, index) => (
				<th
					key={`${key}-${index}`}
					className="px-6 py-3 text-left text-sm font-semibold text-white bg-blue-600 shadow-md"
				>
					<div className="flex items-center gap-2">
						{category}
						{category === "Assigned" && (
							<span className="text-xs bg-blue-700 px-2 py-1 rounded-full">
								Total: ${editedValues.assigned.reduce((a, b) => a + b, 0).toLocaleString()}
							</span>
						)}
						{category === "Available" && (
							<span className="text-xs bg-blue-700 px-2 py-1 rounded-full">
								Total: ${editedValues.available.reduce((a, b) => a + b, 0).toLocaleString()}
							</span>
						)}
					</div>
				</th>
			))}
			{answers.map((answer, index) => (
				<tr 
					key={`${key}-${index}`} 
					className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
				>
					<td className="px-6 py-4 whitespace-nowrap">
						<div className="flex items-center gap-3">
							<input
								type="checkbox"
								defaultChecked
								className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
								aria-label={`Select ${answer}`}
							/>
							<span className="text-sm font-medium text-gray-900">{answer}</span>
						</div>
					</td>
					<td className="px-6 py-4 whitespace-nowrap">
						{editingCell?.type === 'assigned' && editingCell?.index === index ? (
							<div className="flex items-center gap-2">
								<div className="relative">
									<span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
									<input
										type="number"
										value={editedValues.assigned[index]}
										onChange={(e) => handleChange('assigned', index, e.target.value)}
										className="w-32 pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										min="0"
										step="0.01"
										autoFocus
									/>
								</div>
								<button 
									type="button" 
									className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-150"
									onClick={() => handleSave('assigned', index)}
								>
									Save
								</button>
								<button 
									type="button" 
									className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-150"
									onClick={() => setEditingCell(null)}
								>
									Cancel
								</button>
							</div>
						) : (
							<div className="flex items-center justify-between">
								<span className="text-sm font-medium text-gray-900">
									${editedValues.assigned[index].toLocaleString()}
								</span>
								<button 
									type="button" 
									className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors duration-150"
									onClick={() => handleEdit('assigned', index)}
								>
									Edit
								</button>
							</div>
						)}
					</td>
					<td className="px-6 py-4 whitespace-nowrap">
						{editingCell?.type === 'available' && editingCell?.index === index ? (
							<div className="flex items-center gap-2">
								<div className="relative">
									<span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
									<input
										type="number"
										value={editedValues.available[index]}
										onChange={(e) => handleChange('available', index, e.target.value)}
										className="w-32 pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										min="0"
										step="0.01"
										autoFocus
									/>
								</div>
								<button 
									type="button" 
									className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-150"
									onClick={() => handleSave('available', index)}
								>
									Save
								</button>
								<button 
									type="button" 
									className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-150"
									onClick={() => setEditingCell(null)}
								>
									Cancel
								</button>
							</div>
						) : (
							<div className="flex items-center justify-between">
								<span className="text-sm font-medium text-gray-900">
									${editedValues.available[index].toLocaleString()}
								</span>
								<button 
									type="button" 
									className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors duration-150"
									onClick={() => handleEdit('available', index)}
								>
									Edit
								</button>
							</div>
						)}
					</td>
				</tr>
			))}
		</>
	);
};

export default TableRow;
