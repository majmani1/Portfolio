import "../styles/styleFolder.css";
import "../styles/styleCv.css";
import Close from "../assets/images/iconsWindowsXP/close.png";
import Hide from "../assets/images/iconsWindowsXP/hide.png";
import Big from "../assets/images/iconsWindowsXP/big.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";
import CvPdf_an from "../assets/files/cv_Ajmani_Mouad(an).pdf";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function Cvpdfan(props) {
	const [bigWindow, setBigWindow] = useState(true);
	const dragRef = useRef();

	function big_or_small() {
		if (bigWindow) {
			setBigWindow(false);
			document.querySelector(".Pdf").style.width = "100vw";
			document.querySelector(".Pdf").style.height = "96vh";
			// document.querySelector(".Pdf").style.border = "0px";
			document.querySelector(".Pdf").style.zIndex = "1";
			// document.querySelector(".about").style.top = "-2%";
			// document.querySelector(".about").style.left = "0%";
			// document.querySelector(".about").style.right = "0";
			// document.querySelector(".about").style.buttom = "0%";
		} else {
			setBigWindow(true);
			document.querySelector(".Pdf").style.width = "50vw";
			document.querySelector(".Pdf").style.height = "80vh";
			document.querySelector(".about").style.top = "0";
			document.querySelector(".Pdf").style.border = " .5vw solid #0a25c0";
			document.querySelector(".Pdf").style.zIndex = "1";
			document.querySelector(".Pdf").style.border = " .5vw solid #0a25c0";
			document.querySelector(".about").style.left = "2%";
		}
	}
	return (
		<Draggable nodeRef={dragRef} cancel=".interactive">
			<div className="Pdf about" ref={dragRef}>
				<div className="readmeTitle">
					<div className="NameIcon">
						<img src={Pdf} className="IconFolderRedme"></img>
						Cv_Mouad_Ajmani (an)
					</div>
					<div className="closeIcons">
						<img src={Hide} className="closeIcon disable"></img>
						<img
							src={Big}
							onClick={big_or_small}
							onTouchEnd={big_or_small}
							className="closeIcon "
						></img>
						<img
							src={Close}
							onClick={() => props.setShowCV_an(false)}
							onTouchEnd={() => props.setShowCV_an(false)}
							className="closeIcon"
						></img>
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

				<a
					className="buttonDownload interactive"
					href={CvPdf_an}
					download="Ajmani_Mouad_CV(an).pdf"
				>
					{" "}
					Download
				</a>
				<div className="  cvs interactive">
					<div className="infosPerso">
						<span className="Name">Mouad Ajmani</span>
						<p>
							<i>Software Engineer</i>
						</p>
						<div className="Contacts">
							<span>mouadajmani@gmail.com</span>
							<span> 06 06 88 51 81</span>
							<span>Mouad Ajmani</span>
							<span>majmani1</span>
							<span>RABAT-MORROCO</span>
						</div>
					</div>
					<div className="titleCv">
						<i>PROJECTS</i>
					</div>
					<div className="discription">
						<strong>FT_TRANSCENDENCE</strong>
						<p>
							• Developed an online ping-pong web application with a front-end
							built using vanilla JavaScript, Django for the back-end, and
							PostgreSQL for the database.{" "}
						</p>

						<p>
							• Contributed by designing and implementing the game mechanics on
							both the front-end and back-end. Utilized WebSockets to enable
							real-time interactions, enhancing the user experience.
						</p>
						<strong>Serveur Web HTTP</strong>
						<p>
							• Contributed to the development of a custom web server, focusing
							on HTTP methods (GET, POST, DELETE) implementation.
						</p>

						<p>
							• Applied expertise in sockets programming and multiplexing to
							enhance the server's efficiency, enabling concurrent handling of
							multiple client requests.
						</p>
						<strong>INCEPTION</strong>
						<p>
							• Inception focuses on expanding my Docker expertise by
							configuring diverse services in separate containers.
						</p>
						<p>
							• Using tools like Docker, docker-compose, and incorporating
							MariaDB, Nginx, and WordPress.
						</p>
						<p>
							• the project aims to enhance my knowledge in containerization and
							orchestration, fostering a comprehensive understanding of
							deploying services within a Docker environment.
						</p>
					</div>
					<div className="titleCv">
						<i>EDUCATION</i>
					</div>
					<div className="Education">
						<strong>Software Developer</strong>
						<i>1337 Coding School, Mohammed VI Polytechnic University</i>
						<p>
							• <strong>Relevant Coursework:</strong> Web Development,
							Algorithms, Unix, Network and System Administration, Object
							Oriented Programming, Graphics, Operating Systems, Data Structures
						</p>

						<strong>
							PROFESSIONAL LICENSE IN PROFESSIONS DIGITAL COMMUNICATION
						</strong>
						<i>FACULTY OF LETTERS AND HUMAN SCIENCESr</i>
						<p>
							• <strong>Relevant Coursework:</strong> Web Development, Design,
							Communication
						</p>

						<strong>Specialized Technician Multimedia Development</strong>
						<i>Ista Ntic, OFPPT</i>
						<p>
							• <strong>Relevant Coursework:</strong> Algorithms , Web
							Development, Graphics, Design, UX/UI, Algorithms, Data Structures.
						</p>
					</div>
					<div className="titleCv">
						<i>SKILLS</i>
					</div>

					<div className="Education">
						<p>
							• <strong>Compétences Techniques :</strong> HTML,
							CSS,JavaScript,React, Django, C, C++, SQL, UX/UI,Figma, Docker,
							Adobe Photoshop, Adobe Illustrator
						</p>
					</div>
					<div className="titleCv">
						<i>CERTIFICATES</i>
					</div>
					<ul>
						<li>FORMATION QUALIFIANTE EN LANGUAGE PYTHON. (ISTA)</li>
						<li>Programming with JavaScript (Meta)</li>
						<li>Programming in PYTHON(Meta)</li>
					</ul>
				</div>

				{/* <div className="readmeContent"></div> */}
			</div>
		</Draggable>
	);
}
