import "../styles/home.css";

import FooterHome from "../components/footerHome";
import IconFolder from "../assets/images/iconsWindowsXP/folder.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";

import { useState } from "react";
import Readme from "../components/readme";
import FolderPdf from "../components/folderPdf";
import WorksPdf from "../components/pdfWorks";
import Cv_fr from "../components/cvPdf";
import Draggable from "react-draggable";

export default function Home() {
	const [showReadme, setShowReadme] = useState(false);
	const [showAbout, setSHowAbout] = useState(false);
	const [showWorksPdf, setWorksPdf] = useState(false);
	const [showCv_fr, setShowCV_fr] = useState(false);

	return (
		<div className="fullHome">
			<Draggable enableUserSelectHack={false}>
				<div className="folderIcon">
					<img
						src={IconFolder}
						className="IconFolder"
						onClick={() => setShowReadme(true)}
						onTouchEnd={() => setShowReadme(true)}
					></img>
					<div className="NameFolder">Readme</div>
				</div>
			</Draggable>
			<div
				className="folderIcon"
				onClick={() => setShowCV_fr(true)}
				onTouchEnd={() => setShowCV_fr(true)}
			>
				<img src={Pdf} className="IconFolder"></img>
				<div className="NameFolder">Cv_Mouad_Ajmani(fr)</div>
			</div>

			<div className="folderIcon">
				<img src={Pdf} className="IconFolder"></img>
				<div className="NameFolder">Cv_Mouad_Ajmani(an)</div>
			</div>

			{/* <Readme /> */}
			<Cv_fr />
			{/* {showCv_fr && <Cv_fr setShowCV_fr={setShowCV_fr}></Cv_fr>} */}
			{showReadme && (
				<Readme
					setShowReadme={setShowReadme}
					setSHowAbout={setSHowAbout}
					setWorksPdf={setWorksPdf}
				/>
			)}
			{showAbout && <FolderPdf setSHowAbout={setSHowAbout} />}
			{showWorksPdf && <WorksPdf setWorksPdf={setWorksPdf} />}
			{/* <WorksPdf /> */}
			<FooterHome />
		</div>
	);
}
