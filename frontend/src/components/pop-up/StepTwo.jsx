import { useState } from "react";

const StepTwo = ({ onBack, onContinue, initialSelections = [] }) => {
    const [selectedOptions, setSelectedOptions] = useState(initialSelections);
    const [error, setError] = useState("");

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedOptions(prev =>
            checked
                ? [...prev, value]
                : prev.filter(option => option !== value)
        );
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedOptions.length === 0) {
            setError("Please select at least one option");
            return;
        }
        onContinue(selectedOptions);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-96 h-96 p-4 shadow-md ring-1 ring-gray-200 rounded-md"
        >
            <h4 className="text-xl p-2">Who do you spend money on?</h4>
            <div className="grid grid-cols-2 gap-2 p-2">
                {["myself", "myPartner", "kids", "otherAdults", "pets", "teens"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="spendOn"
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
                    Continue
                </button>
            </div>
        </form>
    );
};

export default StepTwo;
