import "../styles/home.css";
import github from "../assets/images/social_media_icons/github.png";
import linkedin from "../assets/images/social_media_icons/linkedin.png";

export default function SocialMedia(props) {
	return (
		<div className="socialMedia">
			<a href={props.lien} target="_blank" rel="noreferrer">
				{props.nameIcon === "github" ? (
					<div
						className="logo"
						style={{ backgroundImage: `url(${github})` }}
					></div>
				) : props.nameIcon === "linkedin" ? (
					<div
						className="logo"
						style={{ backgroundImage: `url(${linkedin})` }}
					></div>
				) : null}

				{props.name}
			</a>
		</div>
	);
}
