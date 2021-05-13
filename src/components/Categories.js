import React from "react";
import { useState, useEffect } from "react";

const Categories = ({ categories, filterProjects }) => {
	// State
	const [isActive, setIsActive] = useState(false);

	//  Convert category id's to names
	const categoryNames = (category) => {
		let name = null;
		switch (category) {
			case 0:
				name = "Interior";
				break;
			case 1:
				name = "Exterior";
				break;
			case 2:
				name = "Misc";
				break;
			default:
				name = "All";
		}
		return name;
	};

	return (
		<div
			className="btn-group btn-group-sm my-3"
			role="group"
			aria-label="Basic radio toggle button group"
		>
			{categories.map((category, index) => (
				<>
					{/* <input
						type="radio"
						class="btn-check"
						name="categories"
						autocomplete="off"
						value={categoryNames(category)}
						onChange={() => filterProjects(category)}
						checked={categoryNames(category) === "All" && true}
					/>
					<label
						class="btn btn-outline-primary"
						for={`btn-${categoryNames(category)}`}
					>
						{categoryNames(category)}
					</label> */}
					<button
						type="button"
						key={index}
						className="btn btn-outline-primary mx-2 p-2"
						onClick={() => filterProjects(category)}
					>
						{categoryNames(category)}
					</button>
				</>
			))}
		</div>
	);
};

export default Categories;
