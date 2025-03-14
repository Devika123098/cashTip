import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
// import AccountType from "./pages/AccountType.jsx";
import CreditCard from "./pages/CreditCard.jsx";
import BankComparison from "./components/BankComparison.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
