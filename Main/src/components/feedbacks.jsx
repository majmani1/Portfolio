import React from "react";
import "../styles/home.css";

export default function feedbacks(props) {
	return (
		<div className="FullPost">
			<span className="closePost" onClick={() => props.setShowLinkedin(false)}>
				X
			</span>

			<iframe
				className="linkedinFeed"
				src="https://www.linkedin.com/embed/feed/update/urn:li:share:7267945244023734274"
				frameborder="0"
				allowfullscreen=""
				title="Embedded post"
			></iframe>
		</div>
	);
}

// export default feedbacks;
