import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
	return (
		<div>
			<h1>Well that didn't work out as expected...</h1>
			<Link to="/" className="btn">
				Go back Home
			</Link>
		</div>
	);
};

export default Error;
