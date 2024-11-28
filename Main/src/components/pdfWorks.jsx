import "../styles/styleFolder.css";
import Close from "../assets/images/iconsWindowsXP/close.png";
import Hide from "../assets/images/iconsWindowsXP/hide.png";
import Big from "../assets/images/iconsWindowsXP/big.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";
import Docker from "../assets/images/Programming_Languages/docker.png";
import Webserv from "../assets/images/Programming_Languages/webserv.jpg";
import Trancendance from "../assets/images/Programming_Languages/trancendance.png";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function WorksPdf(props) {
	const [bigWindow, setBigWindow] = useState(true);
	const dragRef = useRef();

	function big_or_small() {
		if (bigWindow) {
			setBigWindow(false);
			document.querySelector(".works").style.width = "100vw";
			document.querySelector(".works").style.height = "96vh";

			// document.querySelector(".works").style.border = "0px";
			document.querySelector(".works").style.zIndex = "1";
			// document.querySelector(".works").style.top = "0";
			// document.querySelector(".works").style.right = "0%";
		} else {
			setBigWindow(true);
			document.querySelector(".works").style.width = "50vw";
			document.querySelector(".works").style.height = "80vh";

			document.querySelector(".works").style.border = " 6px solid #0a25c0";
			document.querySelector(".works").style.zIndex = "1";
			document.querySelector(".works").style.top = "0";
			document.querySelector(".works").style.right = "5%";
		}
	}
	return (
		<Draggable nodeRef={dragRef} cancel=".interactive">
			<div className="Pdf works  " ref={dragRef}>
				<div className="readmeTitle" ref={dragRef}>
					<div className="NameIcon">
						<img src={Pdf} className="IconFolderRedme" alt="PDF Icon"></img>
						Works
					</div>
					<div className="closeIcons">
						<img
							src={Hide}
							className="closeIcon disable interactive"
							alt="Hide"
						></img>
						<img
							src={Big}
							onClick={big_or_small}
							onTouchEnd={big_or_small}
							className="closeIcon interactive"
							alt="Resize"
						></img>
						<img
							src={Close}
							onClick={() => props.setWorksPdf(false)}
							onTouchEnd={() => props.setWorksPdf(false)}
							className="closeIcon interactive"
							alt="Close"
						></img>
					</div>
				</div>

				<div className="menuTextReadme interactive">
					<ul>
						<li className="interactive">File</li>
						<li className="interactive">Edit</li>
						<li className="interactive">View</li>
						<li className="interactive">Favorites</li>
						<li className="interactive">Tools</li>
						<li className="interactive">Help</li>
					</ul>
				</div>

				<div className="SpaceText">
					<div className="MyWorks">
						<img
							src={Trancendance}
							className="MyWorksImg interactive"
							alt="Project Thumbnail"
						></img>
						<div className="DescriptionProject interactive">
							<p>
								• Developed an online ping-pong web application with a front-end
								built using vanilla JavaScript, Django for the back-end, and
								PostgreSQL for the database.
							</p>
							<p>
								• Contributed by designing and implementing the game mechanics
								on both the front-end and back-end. Utilized WebSockets to
								enable real-time interactions, enhancing the user experience.
							</p>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/majmani1/webserv"
								className="LinkProject interactive"
							>
								FT_TRANSCENDENCE
							</a>
						</div>
					</div>

					<div className="MyWorks">
						<img
							src={Webserv}
							className="MyWorksImg interactive"
							alt="Project Thumbnail"
						></img>
						<div className="DescriptionProject interactive">
							<p>
								• Contributed to the development of a custom web server,
								focusing on HTTP methods (GET, POST, DELETE) implementation.
							</p>
							<p>
								• Applied expertise in sockets programming and multiplexing to
								enhance the server's efficiency, enabling concurrent handling of
								multiple client requests.
							</p>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/majmani1/webserv"
								className="LinkProject interactive"
							>
								Webserv
							</a>
						</div>
					</div>

					<div className="MyWorks">
						<img
							src={Docker}
							className="MyWorksImg interactive"
							alt="Project Thumbnail"
						></img>
						<div className="DescriptionProject interactive">
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
								rel="noopener noreferrer"
								href="https://github.com/majmani1/inception"
								className="LinkProject interactive"
							>
								Inception
							</a>
						</div>
					</div>
				</div>
			</div>
		</Draggable>
	);
}
