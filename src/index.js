import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Check if container is present
if (document.getElementById("root")) {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById("root")
	);
}
