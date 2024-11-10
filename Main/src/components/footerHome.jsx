import "../styles/home.css";
import Icon_windowsXp from "../assets/images/icon_windowsXp.png";
import Msn from "../assets/images/msn.png";
import DateTime from "./TimeMeteo";
import useWeather from "../hooks/useWeather";
import LeftSide from "./leftSide";
import meteo from "../assets/images/meteo.png";
import { useEffect, useState } from "react";

export default function FooterHome() {
	const { weather, error } = useWeather();
	const [showLeftSide, setShowLeftSide] = useState(false);
	function show_or_hide_lefSide() {
		setShowLeftSide(!showLeftSide);
	}
	return (
		<div className="footerHome">
			{showLeftSide && <LeftSide />}
			<div onClick={show_or_hide_lefSide} className="iconWindows">
				<div className="icon"></div>
				<span> Start</span>
			</div>
			<div className="dateMeteo">
				<img src={Msn} alt="Msn" className="msnIcon" />
				<div className="meteo">
					<img
						className="meteoIcon"
						src={weather ? `${weather.iconUrl}` : meteo}
						alt="Weather icon"
					/>
					{weather
						? `${weather.temperature}°C | ${weather.city}`
						: "Loading..."}
				</div>
				<DateTime />
			</div>
		</div>
	);
}
