import "../styles/styleFolder.css";
import Close from "../assets/images/iconsWindowsXP/close.png";
import Hide from "../assets/images/iconsWindowsXP/hide.png";
import Big from "../assets/images/iconsWindowsXP/big.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";
import School13 from "../assets/images/schools/1337.png";
import Ofppt from "../assets/images/Programming_Languages/ofppt.png";
import Flsh from "../assets/images/schools/flsh.png";

import { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function EducationPdf(props) {
	const [bigWindow, setBigWindow] = useState(true);
	const dragRef = useRef();

	function big_or_small() {
		if (bigWindow) {
			setBigWindow(false);
			document.querySelector(".education").style.width = "100vw";
			document.querySelector(".education").style.height = "96vh";

			// document.querySelector(".education").style.border = "0px";
			document.querySelector(".education").style.zIndex = "1";
			// document.querySelector(".education").style.top = "0";
			// document.querySelector(".education").style.right = "0%";
		} else {
			setBigWindow(true);
			document.querySelector(".education").style.width = "50vw";
			document.querySelector(".education").style.height = "80vh";

			document.querySelector(".education").style.border = " 6px solid #0a25c0";
			document.querySelector(".education").style.zIndex = "1";
			document.querySelector(".education").style.top = "0";
			document.querySelector(".education").style.right = "5%";
		}
	}
	return (
		<Draggable nodeRef={dragRef}>
			<div className="Pdf education" ref={dragRef}>
				<div className="readmeTitle">
					<div className="NameIcon">
						<img src={Pdf} className="IconFolderRedme"></img>
						Education
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
							onClick={() => props.setEducation(false)}
							onTouchEnd={() => props.setEducation(false)}
							className="closeIcon"
						></img>
					</div>
				</div>
				<div className="menuTextReadme">
					<ul>
						<li>File</li>
						<li>Edit</li>
						<li>View</li>
						<li>Favorites</li>
						<li>Tools</li>
						<li>Help</li>
					</ul>
				</div>

				<div className="SpaceText">
					<div className="MyWorks">
						<img src={School13} className="MyWorksImg"></img>
						<div className="DescriptionProject">
							<p>
								• Developed an online ping-pong web application with a front-end
								built using vanilla JavaScript, Django for the back-end, and
								PostgreSQL for the database.
							</p>{" "}
							<p>
								• Contributed by designing and implementing the game mechanics
								on both the front-end and back-end. Utilized WebSockets to
								enable real-time interactions, enhancing the user experience.
							</p>
							<a
								target="_blank"
								href="https://www.1337.ma/"
								className="LinkProject"
							>
								1337 School
							</a>
						</div>
					</div>
					<div className="MyWorks">
						<img src={Flsh} className="MyWorksImg"></img>
						<div className="DescriptionProject">
							<p>
								• Contributed to the development of a custom web server,
								focusing on HTTP methods (GET, POST, DELETE) implementation.{" "}
							</p>
							<p>
								• Applied expertise in sockets programming and multiplexing to
								enhance the server's efficiency, enabling concurrent handling of
								multiple client requests.
							</p>
							<a
								target="_blank"
								href="http://www.um5.ac.ma/um5/faculte-des-lettres-et-des-sciences-humaines-de-rabat"
								className="LinkProject"
							>
								Faculty of Arts and Humanities of Rabat
							</a>
						</div>
					</div>
					<div className="MyWorks">
						<img src={Ofppt} className="MyWorksImg"></img>
						<div className="DescriptionProject">
							<p>
								• Inception focuses on expanding my Docker expertise by
								configuring diverse services in separate containers.
							</p>
							<p>
								• Using tools like Docker, docker-compose, and incorporating
								MariaDB, Nginx, and WordPress.
							</p>
							<p>
								• the project aims to enhance my knowledge in containerization
								and orchestration, fostering a comprehensive understanding of
								deploying services within a Docker environment.
							</p>
							<a
								target="_blank"
								href="https://www.nticrabat.com/"
								className="LinkProject"
							>
								Institute Specialized in Offshoring Trades and New Information
								Technologies Rabat
							</a>
						</div>
					</div>
				</div>

				{/* <div className="readmeContent"></div> */}
			</div>
		</Draggable>
	);
}
