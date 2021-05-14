import React, { useState, useEffect } from "react";
import ProjectData from "./ProjectData";
import Project from "./Project";

function FeaturedProjects() {
	const [featured, setFeatured] = useState([]);

	const getFeatured = () => {
		const featuredProjects = ProjectData.filter(
			(proj) => proj.isFeatured === true
		);
		setFeatured(featuredProjects);
	};

	useEffect(() => {
		getFeatured();
	}, []);

	return (
		<>
			{featured.map((proj) => (
				<Project key={proj.id} project={proj} />
			))}
		</>
	);
}

export default FeaturedProjects;
