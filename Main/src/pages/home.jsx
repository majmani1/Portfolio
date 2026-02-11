import "../styles/home.css";

import FooterHome from "../components/footerHome";
import IconFolder from "../assets/images/iconsWindowsXP/folder.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";
import IconWindows from "../assets/images/icon_windowsXp.png";

import { useRef, useState } from "react";
import Readme from "../components/readme";
import FolderPdf from "../components/folderPdf";
import WorksPdf from "../components/pdfWorks";
import EducationPdf from "../components/educationPdf";
import CvFr from "../components/cvPdf";
import CvAn from "../components/cvPdfAn";
import Draggable from "react-draggable";
import Feedbacks from "../components/feedbacks";

export default function Home(props) {
	const [showReadme, setShowReadme] = useState(false);
	const [showAbout, setSHowAbout] = useState(false);
	const [showWorksPdf, setWorksPdf] = useState(false);
	const [showEducation, setEducation] = useState(false);
	const [showCv_fr, setShowCV_fr] = useState(false);
	const [showCv_an, setShowCV_an] = useState(false);
	const [showLinkedin, setShowLinkedin] = useState(false);
	const dragRef = useRef();
	// function handleRightClick(e) {
	// 	console.log("right click");
	// 	e.preventDefault();
	// }

	return (
		//onContextMenu={handleRightClick}
		<div className="fullHome">
			<Draggable nodeRef={dragRef} enableUserSelectHack={false}>
				<div ref={dragRef} className="folderIcon FeedbackPortfolio">
					<img
						src={IconWindows}
						className="IconFolder"
						onDoubleClick={() => setShowLinkedin(true)}
						onTouchEnd={() => setShowLinkedin(true)}
						alt=""
					></img>
					<div className="NameFolder">Feedback For Portfolio</div>
				</div>
			</Draggable>

			<Draggable nodeRef={dragRef} enableUserSelectHack={false}>
				<div ref={dragRef} className="folderIcon">
					<img
						src={IconFolder}
						className="IconFolder"
						onDoubleClick={() => setShowReadme(true)}
						onTouchEnd={() => setShowReadme(true)}
						alt=""
					></img>
					<div className="NameFolder">Readme</div>
				</div>
			</Draggable>

			<Draggable nodeRef={dragRef} enableUserSelectHack={false}>
				<div
					ref={dragRef}
					className="folderIcon"
					onDoubleClick={() => setShowCV_fr(true)}
					onTouchEnd={() => setShowCV_fr(true)}
				>
					<img
						src={Pdf}
						className="IconFolder"
						onDoubleClick={() => setShowCV_fr(true)}
						onTouchEnd={() => setShowCV_fr(true)}
						alt=""
					></img>
					<div
						className="NameFolder"
						onDoubleClick={() => setShowCV_fr(true)}
						onTouchEnd={() => setShowCV_fr(true)}
					>
						Cv_Mouad_Ajmani(fr)
					</div>
				</div>
			</Draggable>

			<Draggable nodeRef={dragRef}>
				<div
					ref={dragRef}
					className="folderIcon"
					onDoubleClick={() => setShowCV_an(true)}
					onTouchEnd={() => setShowCV_an(true)}
				>
					<img
						src={Pdf}
						className="IconFolder"
						onDoubleClick={() => setShowCV_an(true)}
						onTouchEnd={() => setShowCV_an(true)}
						alt=""
					></img>
					<div
						className="NameFolder"
						onDoubleClick={() => setShowCV_an(true)}
						onTouchEnd={() => setShowCV_an(true)}
					>
						Cv_Mouad_Ajmani(an)
					</div>
				</div>
			</Draggable>

			{showReadme && (
				<Readme
					setShowReadme={setShowReadme}
					setSHowAbout={setSHowAbout}
					setWorksPdf={setWorksPdf}
					setEducation={setEducation}
				/>
			)}

			{showLinkedin && <Feedbacks setShowLinkedin={setShowLinkedin} />}

			{showAbout && <FolderPdf setSHowAbout={setSHowAbout} />}
			{showWorksPdf && <WorksPdf setWorksPdf={setWorksPdf} />}
			{showEducation && <EducationPdf setEducation={setEducation} />}

			{showCv_fr && <CvFr setShowCV_fr={setShowCV_fr}></CvFr>}
			{showCv_an && <CvAn setShowCV_an={setShowCV_an} />}

			<FooterHome setShowPages={props.setShowPages} />
		</div>
	);
}
