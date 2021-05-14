import React, { useState, useEffect } from "react";
import ProjectData from "./ProjectData";
import Project from "./Project";

// Module will get projects within the same category

function RelevantProjects({ project }) {
	const [projects, setProjects] = useState([]);

	const getRelevantProjects = () => {
		const relevantProjects = ProjectData.filter(
			(proj) => proj.category === project.category
		);

		// TRY FILTERING OUT ELEMENTS THAT ARE NOT THE FIRST FOUR (BY INDEX)
		//  Only grab up to 4 projects
		if (relevantProjects.length > 4) {
			setProjects(relevantProjects.splice(0, 4));
		} else {
			setProjects(relevantProjects);
		}
	};

	useEffect(() => {
		getRelevantProjects();
	}, []);

	return (
		<>
			{projects.map((proj) => (
				<Project key={proj.id} project={proj} />
			))}
		</>
	);
}

export default RelevantProjects;
