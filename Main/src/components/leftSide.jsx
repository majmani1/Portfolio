import "../styles/home.css";
import css from "../assets/images/Programming_Languages/css-3.png";
import html from "../assets/images/Programming_Languages/html-5.png";
import javascript from "../assets/images/Programming_Languages/js.png";
import figma from "../assets/images/Programming_Languages/figma.png";
import python from "../assets/images/Programming_Languages/python.png";
import cpp from "../assets/images/Programming_Languages/cpp.png";
import c from "../assets/images/Programming_Languages/letter-c.png";
import sql from "../assets/images/Programming_Languages/sql-server.png";
import illustrator from "../assets/images/Programming_Languages/illustrator.png";
import docker from "../assets/images/Programming_Languages/docker.png";

import SocialMedia from "./socialMedia";
import Skills from "./skills";
export default function LeftSide() {
	return (
		<div className="fullLeftSIde">
			<div className="header">
				<div className="pictureMouad"></div>
				<div className="nameMouad">Mouad Ajmani</div>
			</div>
			<div className="left_side">
				<Skills picture={css} title="Cascading Style Sheets" />
				<Skills picture={html} title="Hypertext Markup Language" />
				<Skills picture={javascript} title="Javascript" />
				<Skills picture={figma} title="Figma" />
				<Skills picture={python} title="Python" />
				<Skills picture={cpp} title="Cpp" />
				<Skills picture={c} title="C" />
				<Skills picture={sql} title="Sql" />
				<Skills picture={illustrator} title="illustrator" />
				<Skills picture={docker} title="Docker" />
			</div>
			<div className="right_side"></div>
			<div className="footerLeftSide">
				<SocialMedia
					lien="https://www.linkedin.com/in/mouad-ajmani-21071021b/"
					name="Mouad Ajmani"
					nameIcon="linkedin"
				/>
				<SocialMedia
					lien="https://github.com/majmani1"
					name="majmani1"
					nameIcon="github"
				/>
			</div>
		</div>
	);
}
