import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import Categories from "./Categories";
import ProjectData from "./ProjectData";
import Project from "./Project";

/*
 * 1. Get project data from its component and store in an array
 * 2.
 *
 *
 */

const allProjects = [
	"all",
	...new Set(ProjectData.map((project) => project.category)),
];

const Gallery = () => {
	const [projects, setProjects] = useState(ProjectData);
	const [featured, setFeatured] = useState([]);
	const [categories, setCategory] = useState(allProjects);

	// By category
	const filterProjects = (project) => {
		if (project === "all") {
			setProjects(ProjectData);
			return;
		}
		const newProjects = ProjectData.filter((proj) => proj.category === project);
		setProjects(newProjects);
	};

	// Get featured projects
	const getFeatured = () => {
		const featuredProjects = ProjectData.filter(
			(proj) => proj.isFeatured === true
		);
		setFeatured(featuredProjects);
	};

	return (
		<div className="row justify-content-center">
			{projects.map((project) => (
				<Project project={project} />
				// <section key={id} className="project pb-3">
				// 	<header style={{ width: "400px" }}>
				// 		<img class="img-fluid" src={images[0]} alt={description} />
				// 		<div className="text-center">
				// 			<h4>
				// 				<Link to={`/projects/${id}`}>{name}</Link>
				// 			</h4>
				// 		</div>
				// 	</header>
				// </section>
			))}
		</div>
	);
};

export default Gallery;
