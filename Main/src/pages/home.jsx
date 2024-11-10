import "../styles/home.css";

import FooterHome from "../components/footerHome";
import IconFolder from "../assets/images/iconsWindowsXP/folder.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";
import { useState } from "react";
import Readme from "../components/readme";

export default function Home() {
	const [showReadme, setShowReadme] = useState(false);
	return (
		<div className="fullHome">
			<div className="folderIcon">
				<img
					src={IconFolder}
					className="IconFolder"
					onClick={() => setShowReadme(true)}
				></img>
				<div className="NameFolder">Readme</div>
			</div>
			<div className="folderIcon">
				<img src={Pdf} className="IconFolder"></img>
				<div className="NameFolder">Cv_Mouad_Ajmani(fr)</div>
			</div>

			<div className="folderIcon">
				<img src={Pdf} className="IconFolder"></img>
				<div className="NameFolder">Cv_Mouad_Ajmani(an)</div>
			</div>
			{/* {showReadme && <Readme />} */}
			<Readme />
			<FooterHome />
		</div>
	);
}
