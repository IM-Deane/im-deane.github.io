import React, { useEffect } from "react";
// Project Gallery
import Gallery from "../components/gallery.component";
import RequestEstimate from "../components/request-estimate.component";

import { clientList } from "../components/client-list";

function Projects() {
	// Update page title
	useEffect(() => {
		document.title = "Construction Services - TCA Developments";
	}, []);
	return (
		<main className="container-fluid px-0">
			<header className="row site-banner pt-5 mx-0">
				<h1 className="display-6 fw-bold p-4">OUR PROJECTS</h1>
			</header>
			<div className="container-fluid my-5 mx-0 px-0">
				<section className="row text-center mx-auto">
					<p className="lead px-4">
						TCA Developments specializes in commercial renovations. With an eye
						for safety and precision, we are committed to producing quality
						facilities that are on time and under budget.
					</p>
					<p className="lead mt-3">
						Click on any project below to learn more about its details.
					</p>
				</section>
				<div className="row justify-content-center mx-0 mt-2 px-md-5">
					<article className="col-9 col-sm">
						<section id="project-container" className="px-0 mx-0 w-100">
							<section
								id="projectGallery"
								className="row row-cols-sm-1 row-cols-lg-2 pt-3"
							>
								<Gallery />
							</section>
						</section>
					</article>
					<aside className="col-md-auto col-lg-3 col-sm pt-5">
						<header className="text-center">
							<h4 className="h3 text-primary-alt fw-bold">Our Clients</h4>
						</header>
						<ul
							className="row row-cols-md-2 fs-5 pt-3 gy-4 text-md-center"
							style={{ listStyleType: "none" }}
						>
							{clientList.map(({ name }, index) => (
								<li key={index}>{name}</li>
							))}
						</ul>
					</aside>
				</div>
			</div>
			<RequestEstimate />
		</main>
	);
}

export default Projects;
