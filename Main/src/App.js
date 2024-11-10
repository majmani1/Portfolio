import logo from "./logo.svg";
import "./App.css";
import Loading_windowsXp from "./pages/loading";
import Home from "./pages/home";
import LogPage from "./pages/LogPage";
import React, { useState, useEffect } from "react";

function App() {
	const [showHome, setShowHome] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => setShowHome(true), 5000);

		// Clear the timer if the component is unmounted
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="App">
			{showHome ? <LogPage /> : <Loading_windowsXp />}

			{/* <Loading_windowsXp /> */}
			{/* <Home /> */}
			{/* <LogPage /> */}
		</div>
	);
}

export default App;
