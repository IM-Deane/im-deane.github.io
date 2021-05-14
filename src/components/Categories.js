import React from "react";
import { useEffect } from "react";

const Categories = ({ categories, filterProjects }) => {
	//  Convert category id's to names
	const categoryNames = (category) => {
		let name = null;
		switch (category) {
			case 0:
				name = "Interior";
				break;
			case 1:
				name = "Misc";
				break;
			case 2:
				name = "Exterior";
				break;
			default:
				name = "All";
		}
		return name;
	};

	// On initial render set, first radio to "checked"
	useEffect(() => {
		document.getElementById("btnradio0").setAttribute("checked", true);
	}, []);

	return (
		<div
			className="btn-group btn-group flex-wrap"
			role="group"
			aria-label="Basic radio toggle button group"
		>
			{categories.map((category, index) => (
				<>
					<input
						type="radio"
						key={index}
						className="btn-check"
						name="btnradio"
						id={`btnradio${index}`}
						autoComplete="off"
						onClick={() => filterProjects(category)}
					/>
					<label
						className="btn btn-outline-primary text-uppercase"
						htmlFor={`btnradio${index}`}
					>
						{categoryNames(category)}
					</label>
				</>
			))}
		</div>
	);
};

export default Categories;
