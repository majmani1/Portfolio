import "../styles/styleFolder.css";
import IconFloder from "../assets/images/iconsWindowsXP/folder.png";
import BackIcon from "../assets/images/iconsWindowsXP/back.png";

import ShareFolderIcon from "../assets/images/iconsWindowsXP/ShareFolder.ico";
import ZoomIcon from "../assets/images/iconsWindowsXP/zoom.ico";
import TableIcon from "../assets/images/iconsWindowsXP/table.ico";
import Pdf from "../assets/images/iconsWindowsXP/pdf.png";
import Close from "../assets/images/iconsWindowsXP/close.png";
import Hide from "../assets/images/iconsWindowsXP/hide.png";
import Big from "../assets/images/iconsWindowsXP/big.png";
import { useState } from "react";

export default function Readme(props) {
	return (
		<div className="readme">
			<div className="readmeTitle">
				<div className="NameIcon">
					<img src={IconFloder} className="IconFolderRedme"></img>
					Readme
				</div>
				<div className="closeIcons">
					<img src={Hide} className="closeIcon disable"></img>
					<img src={Big} className="closeIcon disable"></img>
					<img
						src={Close}
						onClick={() => props.setShowReadme(false)}
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
			<div className="menuIconReadme">
				<img src={BackIcon} className="backIcon"></img>
				Back &#9660;
				<img src={BackIcon} className="backIcon otherSide"></img>
				&#9660;
				<img src={ShareFolderIcon} className="backIcon"></img>
				<img src={ZoomIcon} className="backIcon"></img>
				Search
				<img src={IconFloder} className="backIcon"></img>
				Folders
				<img src={TableIcon} className="backIcon"></img>
				&#9660;
			</div>
			<div className="readmeSearch">
				Address
				<div className="divInput">
					<span class="icon">📁</span>
					<input
						type="text"
						className="inputSearch"
						value={"C:\\Documents and Settings\\Readme"}
						disabled
					/>
				</div>
				<img src={BackIcon} className="backIconInput"></img>
				GO
			</div>
			<div className="contentReadme">
				<div className="sideBarReadme">
					<div className="tasks">
						<div className="HeaderTasks">File and Folder Tasks</div>
						<span class="iconTasks">📁 Make a new folder</span>
						<span class="iconTasks">📁 Publish this folder to the web </span>
						<span class="iconTasks">📁 Share this folder</span>
					</div>
					<div className="places">
						<div className="HeaderTasks">File and Folder Tasks</div>
						<span class="iconTasks">📁 Documents and Settings</span>
						<span class="iconTasks">📁 My Documents </span>
						<span class="iconTasks">📁 Shared Documents</span>
					</div>

					<div className="HeaderTasks Details">File and Folder Tasks</div>
				</div>
				<div className="filesReadme">
					<div className="folderIcon" onClick={() => props.setSHowAbout(true)}>
						<img src={Pdf} className="IconFolder"></img>
						<div className="NameFolder NameFolderReadme">About me</div>
					</div>
					<div className="folderIcon">
						<img src={Pdf} className="IconFolder"></img>
						<div className="NameFolder NameFolderReadme">My Works</div>
					</div>
					<div className="folderIcon">
						<img src={Pdf} className="IconFolder"></img>
						<div className="NameFolder NameFolderReadme"> Education</div>
					</div>
					<div className="folderIcon">
						<img src={Pdf} className="IconFolder"></img>
						<div className="NameFolder NameFolderReadme">Contact me</div>
					</div>
				</div>
			</div>
			{/* <div className="readmeContent"></div> */}
		</div>
	);
}
