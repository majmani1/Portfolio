import React, { useState, useEffect } from "react";
import "../styles/loading.css";
import logo_windowsXp from "../assets/images/logo_windowsXp.png";
import Home from "./home";

export default function Loading_windowsXp() {

	return (
		<>
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
					<p>Copyright © Microsoft Corporation </p>
					<strong>Microsoft</strong>
				</div>
			</div>
		</>
	);
}
