import { useState } from "react";
import StepOne from "./StepOne";
import StepN from "./StepN";
import { stepConfigs } from "./config/stepConfigs.mjs";
import { useNavigate } from "react-router";
import useAnswerStore from "../../store/answerStore";

const Popup = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		name: "",
		spendOn: [],
	});

	const navigate = useNavigate();

	const handleStepOneContinue = (name) => {
		setFormData((prev) => ({ ...prev, name }));
		setStep(2);
	};

	const handleStepNContinue = (selections, currentStep) => {
		setFormData((prev) => ({
			...prev,
			spendOn: selections,
		}));
		if (step < 12) {
			setStep(step + 1);
		} else {
			console.log("Form completed:", formData);
			navigate("/dashboard");
		}
	};

	const handleBack = () => {
		if (step > 1) {
			setStep(step - 1);
		}
	};
	
	return (
		<div className="relative">
			{step === 1 && (
				<StepOne
					onContinue={handleStepOneContinue}
					initialValue={formData.name}
				/>
			)}
			{step > 1 && step <= 12 && (
				<StepN
					onBack={handleBack}
					onContinue={handleStepNContinue}
					initialSelections={formData.spendOn}
					question={stepConfigs[step - 2].question}
					options={stepConfigs[step - 2].options}
					isLastStep={step === 12}
				/>
			)}
		</div>
	);
};

export default Popup;
