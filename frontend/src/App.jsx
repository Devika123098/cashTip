import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import AccountType from "./pages/AccountType.jsx";
import CreditCard from "./pages/CreditCard.jsx";
import BankComparison from "./components/bank-comparison/BankComparison.jsx";
import CurrencyCalculator from "./components/currency-calculator/CurrencyCalculator.jsx";
import StepOne from "./components/pop-up/StepOne.jsx"

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/bank-comparison" element={<BankComparison />} />
			{/*<Route path="/budgeting-tools" element={<BudgetingTools />} />*/}
			<Route path="/currency-calculator" element={<CurrencyCalculator />} />
			<Route path="/account-type" element={<AccountType />} />
			<Route path="/cc-type" element={<CreditCard />} />
			<Route path="/pop-up" element={<StepOne/>}/>
		</Routes>
	);
};

export default App;
