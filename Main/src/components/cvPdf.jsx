import "../styles/styleFolder.css";
import "../styles/styleCv.css";
import Close from "../assets/images/iconsWindowsXP/close.png";
import Hide from "../assets/images/iconsWindowsXP/hide.png";
import Big from "../assets/images/iconsWindowsXP/big.png";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";
import CvPdf from "../assets/files/Ajmani_Mouad(fr).pdf";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function Cvpdf(props) {
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
						Cv_Mouad_Ajmani (fr)
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
					href={CvPdf}
					download="Ajmani_Mouad_CV(fr).pdf"
				>
					{" "}
					Télécharger
				</a>
				<div className="  cvs interactive">
					<div className="infosPerso">
						<span className="Name">Mouad Ajmani</span>
						<p>
							<i>Ingénieur logiciel</i>
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
						<i>Projets</i>
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
							• Contribution au développement d'un serveur web personnalisé,
							avec la mise en œuvre des méthodes HTTP (GET, POST, DELETE).
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
							• Utilisation d'outils comme Docker, docker-compose, et
							intégration de MariaDB, Nginx, et WordPress pour une compréhension
							globale du déploiement de services dans un environnement Docker.
						</p>
					</div>
					<div className="titleCv">
						<i>FORMATION</i>
					</div>
					<div className="Education">
						<strong>Développeur Logiciel</strong>
						<i>École de Codage 1337, Université Polytechnique Mohammed VI</i>
						<p>
							• <strong>Cours pertinents :</strong> Développement Web,
							Algorithmes, Unix, Administration Réseau et Système, Programmation
							Orientée Objet, Graphisme, Systèmes d'Exploitation, Structures de
							Données.
						</p>

						<strong>Licence Professionnelle Communication Digitale</strong>
						<i>FACULTY OF LETTERS AND HUMAN SCIENCESr</i>
						<p>
							• <strong>Cours pertinents :</strong> Développement Web, Design,
							Communication.
						</p>

						<strong>Technicien Spécialisé en Développement Multimédia</strong>
						<i>Ista Ntic, OFPPT</i>
						<p>
							• <strong>Cours pertinents :</strong> Algorithmes, Développement
							Web, Graphisme, Design, UX/UI, Structures de Données.
						</p>
					</div>
					<div className="titleCv">
						<i>COMPÉTENCES</i>
					</div>

					<div className="Education">
						<p>
							• <strong>Compétences Techniques :</strong> HTML,
							CSS,JavaScript,React, Django, C, C++, SQL, UX/UI,Figma, Docker,
							Adobe Photoshop, Adobe Illustrator
						</p>
					</div>
					<div className="titleCv">
						<i>CERTIFICATS</i>
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
