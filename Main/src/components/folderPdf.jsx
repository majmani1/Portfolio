import "../styles/styleFolder.css";
import Close from "../assets/images/iconsWindowsXP/close.png";
import Hide from "../assets/images/iconsWindowsXP/hide.png";
import Big from "../assets/images/iconsWindowsXP/big.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function FolderPdf(props) {
	const [bigWindow, setBigWindow] = useState(true);
	const dragRef = useRef();

	function big_or_small() {
		if (bigWindow) {
			setBigWindow(false);
			document.querySelector(".Pdf").style.width = "100vw";
			document.querySelector(".Pdf").style.height = "96vh";
			document.querySelector(".Pdf").style.zIndex = "1";
		} else {
			setBigWindow(true);
			document.querySelector(".Pdf").style.width = "50vw";
			document.querySelector(".Pdf").style.height = "80vh";
			document.querySelector(".about").style.top = "0";
			document.querySelector(".Pdf").style.border = " 6px solid #0a25c0";
			document.querySelector(".Pdf").style.zIndex = "1";
			document.querySelector(".about").style.left = "2%";
		}
	}

	return (
		<Draggable nodeRef={dragRef} cancel=".interactive">
			<div className="Pdf about" ref={dragRef}>
				<div className="readmeTitle">
					<div className="NameIcon">
						<img src={Pdf} className="IconFolderRedme" alt="" />
						About
					</div>

					<div className="closeIcons">
						<img src={Hide} className="closeIcon disable" alt="" />

						<img
							src={Big}
							onClick={big_or_small}
							onTouchEnd={big_or_small}
							className="closeIcon "
							alt="Resize window"
						/>

						<img
							src={Close}
							onClick={() => props.setSHowAbout(false)}
							onTouchEnd={() => props.setSHowAbout(false)}
							className="closeIcon"
							alt="Close window"
						/>
					</div>
				</div>

				<div className="menuTextReadme interactive">
					<ul>
						<li>File</li>
						<li>Edit</li>
						<li>View</li>
						<li>Favorites</li>
						<li>Tools</li>
						<li>Help</li>
					</ul>
				</div>

				<div className="SpaceText interactive">
					<h1>Hi, I'm Mouad Ajmani</h1>
					<p>
						I am a Full Stack Developer, and I have a passion for coding. I love
						to work on new projects, and I am always looking for new challenges.
					</p>
					<p>
						In my educational career, I have been able to learn a lot of things
						about working with different technologies, working in a team,
						managing my time effectively, solving problems, and learning new
						things in a short period of time.
					</p>
					<p>
						My strengths include a strong work ethic, a willingness to learn and
						a willingness to be open to new challenges. I am a fast learner and
						always eager for new challenges.
					</p>
					<p>
						As of right now, I am seeking my first job experience as an intern
						in order to gain more knowledge as well as to gain experience
					</p>
				</div>
			</div>
		</Draggable>
	);
}
