import logo from "./logo.svg";
import "./App.css";
import Loading_windowsXp from "./pages/loading";
import Home from "./pages/home";
import LogPage from "./pages/LogPage";
import React, { useState, useEffect } from "react";

function App() {
	return (
		<div className="App">
			{/* <Loading_windowsXp /> */}
			<Home />
			{/* <LogPage /> */}
		</div>
	);
}

export default App;
