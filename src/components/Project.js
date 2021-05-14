import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Images from "./Images";

// Create a project component
function Project({ project }) {
	const { id, name, images, description, thumbnail } = project;
	return (
		<article key={id} className="col col-sm">
			<div className="project-card border-1 border-primary-alt mb-3">
				<HashLink className="project-links" to={`/projects/${id}#top`}>
					<div className="w-100" style={{ objectFit: "contain" }}>
						<img
							src={thumbnail !== "" ? thumbnail : images[0]}
							className=""
							style={{ maxWidth: "100%", height: "auto" }}
							alt={description}
						/>
					</div>
					<div className="project-body">
						<h2 className="project-title h4">{name}</h2>
						<h3 className="project-text pt-3 fs-5">
							View Project
							<i className="fa fa-chevron-right ps-1"></i>
						</h3>
					</div>
				</HashLink>
			</div>
		</article>
	);
}

export default Project;
