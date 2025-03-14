import React from "react";
import "../styles.css";
import Footer from "../components/Footer.jsx";
import BankComparison from "../components/BankComparison.jsx";
import Currency from "../components/CurrencyCalculator.jsx";

function BankComparisonPage() {
	return (
		<div className="m-auto min-h-screen w-full">
			<BankComparison />
			<Currency />
			<Footer />
		</div>
	);
}

export default BankComparisonPage;
