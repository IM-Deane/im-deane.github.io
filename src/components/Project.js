import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaChevronRight } from "react-icons/fa";

// Create a project component
function Project({ project }) {
	const { id, name, images, description, thumbnail } = project;

	return (
		<article key={id} className="col-sm">
			<div className="project-card border-1 border-primary-alt mb-3">
				<HashLink className="project-links" to={`/projects/${id}#top`}>
					<img
						src={thumbnail !== "" ? thumbnail : images[0]}
						className="img-fluid"
						alt={description}
					/>
					<div className="project-body">
						<h2 className="project-title h4">{name}</h2>
						<h3 className="project-text pt-3 fs-5">
							<span className="d-flex align-items-center">
								View Project <FaChevronRight className="ps-2" />
							</span>
						</h3>
					</div>
				</HashLink>
			</div>
		</article>
	);
}

export default Project;
