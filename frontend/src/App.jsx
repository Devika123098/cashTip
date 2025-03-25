import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import AccountType from "./pages/AccountType.jsx";
import CreditCard from "./pages/CreditCard.jsx";
import BankComparison from "./components/bank-comparison/BankComparison.jsx";
import CurrencyCalculator from "./components/currency-calculator/CurrencyCalculator.jsx";
<<<<<<< HEAD
import Popup from "./components/pop-up/Popup.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bank-comparison" element={<BankComparison />} />
            {/*<Route path="/budgeting-tools" element={<BudgetingTools />} />*/}
            <Route path="/currency-calculator" element={<CurrencyCalculator />} />
            <Route path="/account-type" element={<AccountType />} />
            <Route path="/cc-type" element={<CreditCard />} />
            <Route path="/pop-up" element={<Popup />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    );
=======
import StepOne from "./components/pop-up/StepOne.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import UserPassword from "./pages/UserPassword.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/bank-comparison" element={<BankComparison />} />
			{/*<Route path="/budgeting-tools" element={<BudgetingTools />} />*/}
			<Route path="/currency-calculator" element={<CurrencyCalculator />} />
			<Route path="/account-type" element={<AccountType />} />
			<Route path="/cc-type" element={<CreditCard />} />
			<Route path="/pop-up" element={<StepOne />} />
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/user-password" element={<UserPassword />} />
		</Routes>
	);
>>>>>>> feat/auth-page
};

export default App;
