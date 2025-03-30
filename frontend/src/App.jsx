import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import AccountType from "./pages/AccountType.jsx";
import CreditCard from "./pages/CreditCard.jsx";
import BankComparison from "./components/bank-comparison/BankComparison.jsx";
import CurrencyCalculator from "./components/currency-calculator/CurrencyCalculator.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import UserPassword from "./pages/UserPassword.jsx";
import Popup from "./components/pop-up/Popup.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/bank-comparison" element={<BankComparison />} />
			{/*<Route path="/budgeting-tools" element={<BudgetingTools />} />*/}
			<Route
				path="/currency-calculator"
				element={<CurrencyCalculator />}
			/>
			<Route path="/account-type" element={<AccountType />} />
			<Route path="/cc-type" element={<CreditCard />} />
			<Route path="/pop-up" element={<Popup />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/user-password" element={<UserPassword />} />
		</Routes>
	);
};

export default App;
