import "../styles/logPage.css";
import { useState } from "react";
import Home from "../pages/home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Infosuser(props) {
	const [inputText, setInputText] = useState("");
	// const [showHome, setShowHome] = useState(false);

	function setValue(event) {
		setInputText(event.target.value);
	}

	const notify = () =>
		toast("Incorrect password. Please enter '1337'.", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});

	
	function checkPassword() {
		if (inputText === "1337") {
			console.log("Welcome to your profile");
			props.setShowPages("Home");
		} else {
			notify();
		}
	}
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			if (inputText === "1337") {
				console.log("Welcome to your profile");
				// setShowPages(true);
				props.setShowPages("Home");
			} else {
				notify();
			}
			console.log("Input data:", inputText);
		}
	};
	 
	return (
		<>
			<span className="password_logPage">Type your password [1337]</span>
			<div className="inputs">
				<input
					className="inputPassword_logPage"
					onChange={setValue}
					value={inputText}
					onKeyDown={handleKeyDown}
					autoFocus
				/>
				<ToastContainer></ToastContainer>
				<div className="logoNext" onClick={checkPassword}></div>
			</div>
		</>
	);
}
