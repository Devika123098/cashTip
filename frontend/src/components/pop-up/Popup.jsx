import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const Popup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        spendOn: []
    });

    const handleStepOneContinue = (name) => {
        setFormData(prev => ({ ...prev, name }));
        setStep(2);
    };

    const handleStepTwoContinue = (spendOn) => {
        setFormData(prev => ({ ...prev, spendOn }));
        // Here you could proceed to next step or submit the form
        console.log("Form completed:", { ...formData, spendOn });
        // Optionally reset or redirect after completion
        // setStep(1);
    };

    const handleBack = () => {
        setStep(1);
    };

    return (
        <div className="relative">
            {step === 1 && (
                <StepOne
                    onContinue={handleStepOneContinue}
                    initialValue={formData.name}
                />
            )}
            {step === 2 && (
                <StepTwo
                    onBack={handleBack}
                    onContinue={handleStepTwoContinue}
                    initialSelections={formData.spendOn}
                />
            )}
        </div>
    );
};

export default Popup;
