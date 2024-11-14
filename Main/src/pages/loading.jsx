import React, { useState, useEffect } from "react";
import "../styles/loading.css";
import logo_windowsXp from "../assets/images/logo_windowsXp.png";
// import Home from "./home";
import LogPage from "./LogPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Loading_windowsXp() {
	const notify = () =>
		toast("For a better experience, press F11.", {
			position: "top-right",
			autoClose: 3500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	const [showHome, setShowHome] = useState(false);
	const isDesktop = () => window.innerWidth >= 1024;

	useEffect(() => {
		if (showHome == false) {
			const timer = setTimeout(() => {
				setShowHome(true);
				console.log("OOO");
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, []);
	useEffect(() => {
		if (!showHome && isDesktop()) {
			notify();
		}
	}, [showHome]);
	return (
		<>
			<ToastContainer />
			{showHome ? (
				<LogPage /> //setShowHome={setShowHome}
			) : (
				<div className="fullLoading">
					<div className="logo_with_loading">
						<img
							src={logo_windowsXp}
							alt="logo_windowsXp"
							className="logo_windowsXp"
						/>
						<div className="loadingDiv">
							<div className="loadingBar"></div>
							<div className="loadingBar"></div>
							<div className="loadingBar"></div>
						</div>
					</div>
					<div className="footer">
						<p>Copyright © Microsoft Corporation</p>
						<strong>Microsoft</strong>
					</div>
				</div>
			)}
		</>
	);
}
