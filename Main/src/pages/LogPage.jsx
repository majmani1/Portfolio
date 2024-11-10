import "../styles/logPage.css";
import Restart from "../assets/images/Windows-Restart-icon.png";
import logo_windowsXp from "../assets/images/logo_windowsXp.png";
import pictureMouad from "../assets/images/picture_Mouad.jpg";
import Infosuser from "../components/infosUser";
import { useState } from "react";
import Home from "./home";
import Loading from "./loading";

export default function LogPage() {
	const [showInfosUser, setShowInfosUser] = useState(false);
	const [showPages, setShowPages] = useState("");
	function ShowInfosUser() {
		setShowInfosUser(true);
	}
	if (showPages === "Home") {
		return <Home />;
	}
	if (showPages === "loading") {
		// props.setShowHome(false);
		return <Loading />;
	}

	return (
		<div className="fullLogPage">
			<div className="headerLogPage"></div>
			<div className="mainLogPage">
				<div className="leftSideLogPage">
					<img className="logo_windowsXpLogPage" src={logo_windowsXp} />
					<span className="titleLogPage">To begin, click your user name</span>
				</div>
				<div className="rightSideLogPage">
					<div className="profils" onClick={ShowInfosUser}>
						<div className="pictureUser_logPage"></div>
						<div className="infosUser_logPage">
							<span className="nameUser_logPage">Mouad Ajmani</span>
							{showInfosUser && <Infosuser setShowPages={setShowPages} />}
						</div>
					</div>
				</div>
			</div>
			<div className="footerLogPage">
				<button
					onClick={() => setShowPages("loading")}
					className="buttonRestart"
				>
					<img className="pictureRestart" src={Restart} />
					Restart computer
				</button>
				<div className="footerText">
					man ba3d ma ghadi tloga ghadi t9der tchof lhome page dyal lportfolio
					dyali li howa 3ibara 3la windows xp
				</div>
			</div>
		</div>
	);
}
