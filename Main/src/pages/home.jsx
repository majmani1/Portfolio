import "../styles/home.css";

import FooterHome from "../components/footerHome";
import IconFolder from "../assets/images/iconsWindowsXP/folder.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";

import { useRef, useState } from "react";
import Readme from "../components/readme";
import FolderPdf from "../components/folderPdf";
import WorksPdf from "../components/pdfWorks";
import EducationPdf from "../components/educationPdf";
import Cv_fr from "../components/cvPdf";
import Cv_an from "../components/cvPdfAn";
import Draggable from "react-draggable";

export default function Home(props) {
	const [showReadme, setShowReadme] = useState(false);
	const [showAbout, setSHowAbout] = useState(false);
	const [showWorksPdf, setWorksPdf] = useState(false);
	const [showEducation, setEducation] = useState(false);
	const [showCv_fr, setShowCV_fr] = useState(false);
	const [showCv_an, setShowCV_an] = useState(false);
	
	const dragRef = useRef();

	return (
		<div className="fullHome" >
			<Draggable nodeRef={dragRef} enableUserSelectHack={false}>
				<div ref={dragRef} className="folderIcon">
					<img
						src={IconFolder}
						className="IconFolder"
						onClick={() => setShowReadme(true)}
						onTouchEnd={() => setShowReadme(true)}
					></img>
					<div className="NameFolder">Readme</div>
				</div>
			</Draggable>
			<Draggable nodeRef={dragRef} enableUserSelectHack={false}>
				<div
					ref={dragRef}
					className="folderIcon"
					onClick={() => setShowCV_fr(true)}
					onTouchEnd={() => setShowCV_fr(true)}
				>
					<img
						src={Pdf}
						className="IconFolder"
						onClick={() => setShowCV_fr(true)}
						onTouchEnd={() => setShowCV_fr(true)}
					></img>
					<div
						className="NameFolder"
						onClick={() => setShowCV_fr(true)}
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
					onClick={() => setShowCV_an(true)}
					onTouchEnd={() => setShowCV_an(true)}
				>
					<img
						src={Pdf}
						className="IconFolder"
						onClick={() => setShowCV_an(true)}
						onTouchEnd={() => setShowCV_an(true)}
					></img>
					<div
						className="NameFolder"
						onClick={() => setShowCV_an(true)}
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
			{showAbout && <FolderPdf setSHowAbout={setSHowAbout} />}
			{showWorksPdf && <WorksPdf setWorksPdf={setWorksPdf} />}
			{showEducation && <EducationPdf setEducation={setEducation} />}
			{showCv_fr && <Cv_fr setShowCV_fr={setShowCV_fr}></Cv_fr>}

			{showCv_an && <Cv_an setShowCV_an={setShowCV_an} />}
			<FooterHome setShowPages={props.setShowPages} />
		</div>
	);
}
