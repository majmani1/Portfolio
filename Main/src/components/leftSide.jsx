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
import Meta from "../assets/images/Programming_Languages/meta.png";
import Ofppt from "../assets/images/Programming_Languages/ofppt.png";
import ReactLogo from "../assets/images/Programming_Languages/react.png";
import Log from "../assets/images/iconsWindowsXP/log.ico";
import TurnOff from "../assets/images/iconsWindowsXP/turnOff.ico";

import Skills from "./skills";

export default function LeftSide(props) {
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
				<Skills picture={ReactLogo} title="React" />
				<Skills picture={figma} title="Figma" />
				<Skills picture={python} title="Python" />
				<Skills picture={cpp} title="Cpp" />
				<Skills picture={c} title="C" />
				<Skills picture={sql} title="Sql" />
				<Skills picture={illustrator} title="illustrator" />
				<Skills picture={docker} title="Docker" />
			</div>

			<div className="right_side">
				<Skills
					picture={Ofppt}
					title="Qualifying training in Python language"
				/>
				<Skills picture={Meta} title="Programming in Python" />
				<Skills picture={Meta} title="Introduction to Front-End Development" />
				<Skills picture={Meta} title="Programming with JavaScript" />
			</div>

			<div className="footerLeftSide">
				<div className="turnLog" onClick={() => props.setShowPages("log")}>
					<div
						className="logoLogs"
						style={{ backgroundImage: `url(${Log})` }}
					></div>
					Log Off
				</div>

				<div className="turnLog" onClick={() => props.setShowPages("loading")}>
					<div
						className="logoLogs"
						style={{ backgroundImage: `url(${TurnOff})` }}
					></div>
					Restart
				</div>
			</div>
		</div>
	);
}
