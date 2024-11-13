import "../styles/styleFolder.css";
import "../styles/styleCv.css";
import Close from "../assets/images/iconsWindowsXP/close.png";
import Hide from "../assets/images/iconsWindowsXP/hide.png";
import Big from "../assets/images/iconsWindowsXP/big.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";
import { useState } from "react";
import Draggable from "react-draggable";

export default function FolderPdf(props) {
	const [bigWindow, setBigWindow] = useState(true);
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
			document.querySelector(".Pdf").style.border = " 6px solid #0a25c0";
			document.querySelector(".Pdf").style.zIndex = "1";
			document.querySelector(".Pdf").style.border = " 6px solid #0a25c0";
			document.querySelector(".about").style.left = "2%";
		}
	}
	return (
		<Draggable>
			<div className="Pdf about">
				<div className="readmeTitle">
					<div className="NameIcon">
						<img src={Pdf} className="IconFolderRedme"></img>
						Cv_Mouad_Ajmani
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
							onClick={() => props.setShowCV_fr(false)}
							onTouchEnd={() => props.setShowCV_fr(false)}
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

				<div className="  cvs">
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
							• Développement d'une application web de ping-pong en ligne avec
							un front-end en JavaScript pur, un back- end en Django, et une
                            base de données PostgreSQL.{" "}
						</p>
                            
							<p>
								• Contribution au design et à l'implémentation des mécaniques de
								jeu sur le front-end et le back-end. Utilisation de WebSockets
								pour activer les interactions en temps réel, améliorant ainsi
								l'expérience utilisateur.
							</p>
						<strong>Serveur Web HTTP</strong>
						<p>
							• Contributed to the development of a custom web server, focusing
                            on HTTP methods (GET, POST, DELETE) implementation.
						</p>
                            
							<p>
								• Expertise en programmation avec sockets et multiplexage pour
								améliorer l'efficacité du serveur et gérer les requêtes clients
								simultanément.
							</p>
						<strong>INCEPTION</strong>
						<p>
							• Projet axé sur l'approfondissement de mes compétences en Docker
							via la configuration de services divers dans des conteneurs
							séparés.
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
				</div>

				{/* <div className="readmeContent"></div> */}
			</div>
		</Draggable>
	);
}
