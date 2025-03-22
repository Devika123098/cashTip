import { useState } from "react";

const StepOne = ({ onContinue, initialValue = "" }) => {
    const [inputValue, setInputValue] = useState(initialValue);
    const [error, setError] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            setError("Please enter your first name");
            return;
        }
        onContinue(inputValue);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-96 h-96 p-4 shadow-md ring-1 ring-gray-200 rounded-md"
        >
            <h4 className="text-xl p-2">People call us Moni-Mind</h4>
            <p className="text-sm p-2 text-gray-400">What should we call you?</p>
            <div className="flex flex-col px-2">
                <input
                    className="w-[30vh] h-9 border-b p-2 outline-none text-md"
                    type="text"
                    placeholder="Your first name"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div className="p-2">
                <button
                    type="submit"
                    className="border bg-gray-200 rounded-md mt-5 px-2 text-gray-400 hover:bg-gray-300"
                >
                    Continue
                </button>
            </div>
        </form>
    );
};

export default StepOne;
