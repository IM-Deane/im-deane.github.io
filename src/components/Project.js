import React from "react";
import { Link } from "react-router-dom";
import Images from "./Images";

// Create a project component
function Project({ project }) {
	const { id, name, images, description } = project;

	console.log(images[0]);

	return (
		<article key={id} className="col col-sm">
			<div className="project-card border-1 border-primary-alt mb-3">
				<Link className="project-links" to={`/projects/${id}`}>
					<img src={images[0]} className="card-img-top" alt={description} />
					<div className="project-body">
						<h2 className="project-title h4">{name}</h2>
						<h3 className="project-text pt-3 fs-5">
							View Project
							<i className="fa fa-chevron-right ps-1"></i>
						</h3>
					</div>
				</Link>
			</div>
		</article>
	);
}

export default Project;
