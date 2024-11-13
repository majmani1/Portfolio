import "../styles/styleFolder.css";
import Close from "../assets/images/iconsWindowsXP/close.png";
import Hide from "../assets/images/iconsWindowsXP/hide.png";
import Big from "../assets/images/iconsWindowsXP/big.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";
import Docker from "../assets/images/Programming_Languages/docker.png";
import Webserv from "../assets/images/Programming_Languages/webserv.jpg";

import { useState } from "react";
import Draggable from "react-draggable";

export default function WorksPdf(props) {
	const [bigWindow, setBigWindow] = useState(true);
	function big_or_small() {
		if (bigWindow) {
			setBigWindow(false);
			document.querySelector(".Pdf").style.width = "100vw";
			document.querySelector(".Pdf").style.height = "96vh";

			// document.querySelector(".Pdf").style.border = "0px";
			document.querySelector(".Pdf").style.zIndex = "1";
			// document.querySelector(".works").style.top = "0";
			// document.querySelector(".works").style.right = "0%";
		} else {
			setBigWindow(true);
			document.querySelector(".Pdf").style.width = "50vw";
			document.querySelector(".Pdf").style.height = "80vh";

			document.querySelector(".Pdf").style.border = " 6px solid #0a25c0";
			document.querySelector(".Pdf").style.zIndex = "1";
			document.querySelector(".works").style.top = "0";
			document.querySelector(".works").style.right = "5%";
		}
	}
	return (
		<Draggable>
			<div className="Pdf works">
				<div className="readmeTitle">
					<div className="NameIcon">
						<img src={Pdf} className="IconFolderRedme"></img>
						Works
					</div>
					<div className="closeIcons">
						<img src={Hide} className="closeIcon disable"></img>
						<img src={Big} onClick={big_or_small} onTouchEnd={big_or_small} className="closeIcon "></img>
						<img
							src={Close}
							onClick={() => props.setWorksPdf(false)}
							onTouchEnd={() => props.setWorksPdf(false)}
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
						<img src={Webserv} className="MyWorksImg"></img>
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
								href="https://github.com/majmani1/webserv"
								className="LinkProject"
							>
								FT_TRANSCENDENCE
							</a>
						</div>
					</div>
					<div className="MyWorks">
						<img src={Webserv} className="MyWorksImg"></img>
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
								href="https://github.com/majmani1/webserv"
								className="LinkProject"
							>
								HTTP Web Server
							</a>
						</div>
					</div>
					<div className="MyWorks">
						<img src={Docker} className="MyWorksImg"></img>
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
								href="https://github.com/majmani1/inception"
								className="LinkProject"
							>
								INCEPTION
							</a>
						</div>
					</div>
				</div>

				{/* <div className="readmeContent"></div> */}
			</div>
		</Draggable>
	);
}
