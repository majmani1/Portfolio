import "../styles/home.css";
import Icon_windowsXp from "../assets/images/icon_windowsXp.png";
import Msn from "../assets/images/msn.png";
import DateTime from "./TimeMeteo";
import useWeather from "../hooks/useWeather";
import LeftSide from "./leftSide";
import meteo from "../assets/images/meteo.png";
import { useEffect, useState } from "react";
import Linkdind from "../assets/images/social_media_icons/linkedin.png";
import Github from "../assets/images/social_media_icons/github.png";

export default function FooterHome(props) {
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
				<a
					href="https://www.linkedin.com/in/mouad-ajmani-21071021b/"
					target="_blank"
				>
					{" "}
					<img src={Linkdind} alt="Msn" className="msnIcon" />
				</a>
				<a href="https://github.com/majmani1" target="_blank">
					{" "}
					<img src={Github} alt="Msn" className="msnIcon" />
				</a>
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
