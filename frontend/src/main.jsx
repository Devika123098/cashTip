import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
