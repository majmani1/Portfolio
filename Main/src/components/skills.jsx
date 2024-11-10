import "../styles/home.css";

// import html from "../assets/images/Programming_Languages/html-5.png";
// import javascript from "../assets/images/Programming_Languages/js.png";
// import figma from "../assets/images/Programming_Languages/figma.png";

export default function Skills(props) {
	return (
		<div className="skills">
			{/* {alert(props.pic)} */}
			<img src={props.picture} alt="css" className="pictureSkill" />
			<span className="nameSkill">{props.title}</span>
		</div>
	);
}
