import "../styles/styleFolder.css";
import IconFloder from "../assets/images/iconsWindowsXP/folder.png";
import BackIcon from "../assets/images/iconsWindowsXP/back.png";

import ShareFolderIcon from "../assets/images/iconsWindowsXP/ShareFolder.ico";
import ZoomIcon from "../assets/images/iconsWindowsXP/zoom.ico";
import TableIcon from "../assets/images/iconsWindowsXP/table.ico";

export default function Readme(props) {
	return (
		<div className="readme">
			<div className="readmeTitle">
				<img src={IconFloder} className="IconFolderRedme"></img>
				Readme
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
			{/* <div className="readmeContent"></div> */}
		</div>
	);
}
