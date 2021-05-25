import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaChevronRight } from "react-icons/fa";
import LazyLoad from "react-lazyload";

// Create a project component
function Project({ project }) {
	const { id, name, images, thumbnail } = project;

	return (
		<article className="col-sm col-md-6 ">
			<div className="project-card border-1 border-primary-alt mb-3">
				<HashLink className="project-links" to={`/projects/${id}#top`}>
					<LazyLoad height={200} offset={100} once>
						<div
							className="project-image"
							style={{
								backgroundImage: `url(${
									thumbnail !== "" ? thumbnail : images[0]
								})`,
							}}
						></div>
					</LazyLoad>
					<div className="project-body">
						<h2 className="project-title fs-5">{name}</h2>
						<h3 className="project-text pt-3 fs-6">
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
