import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import ProjectData from "./ProjectData";
import Project from "./Project";

/*
 * 1. Get project data from its component and store in an array
 * 2.
 *
 *
 */

// Create an array of unique category names
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
	// const getFeatured = () => {
	// 	const featuredProjects = ProjectData.filter(
	// 		(proj) => proj.isFeatured === true
	// 	);
	// 	setFeatured(featuredProjects);
	// };

	return (
		<div className="row justify-content-center mx-0 mt-5 px-md-5 w-100">
			<section className="row justify-content-center pb-4">
				<div className="col col-sm text-center">
					<Categories filterProjects={filterProjects} categories={categories} />
				</div>
			</section>

			<div className="row row-cols-sm-1 row-cols-md-2 row-cols-xl-3 pt-3">
				{projects.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

export default Gallery;
