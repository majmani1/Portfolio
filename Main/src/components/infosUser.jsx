import "../styles/logPage.css";
import { useState } from "react";
import Home from "../pages/home";

export default function Infosuser(props) {
	const [inputText, setInputText] = useState("");
	// const [showHome, setShowHome] = useState(false);

	function setValue(event) {
		setInputText(event.target.value);
	}

	function checkPassword() {
		if (inputText === "1337") {
			console.log("Welcome to your profile");
			// setShowPages(true);
			props.setShowPages("Home");
			// return "lllll";

			// alert("Welcome to your profile");
		} else {
			alert("Wrong password");
		}
	}
	// if (showHome) {
	// 	return "lllll";
	// }
	return (
		<>
			<span className="password_logPage">Type your password [1337]</span>
			<div className="inputs">
				<input
					className="inputPassword_logPage"
					onChange={setValue}
					value={inputText}
				/>
				<div className="logoNext" onClick={checkPassword}></div>
			</div>
		</>
	);
}
