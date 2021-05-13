import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
// Project Gallery
import Gallery from "../Gallery";

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
					<p className="lead">
						Click on any project below to learn more about its details.
					</p>
				</section>
				<div className="row justify-content-center mx-0 mt-5 px-md-5">
					<article className="col-9 col-sm">
						<section id="project-container" className="px-0 mx-0 w-100">
							<section className="row justify-content-center">
								<div className="col pb-4 text-center" id="gallery-controls">
									<div
										className="btn-group btn-group-sm"
										role="group"
										aria-label="Basic radio toggle button group"
									>
										<input
											type="radio"
											className="btn-check"
											name="btnradio"
											id="btn-all"
											autocomplete="off"
											checked
										/>
										<label className="btn btn-outline-primary" for="btn-all">
											SHOW ALL
										</label>
										<input
											type="radio"
											className="btn-check"
											name="btnradio"
											id="btn-int"
											autocomplete="off"
										/>
										<label className="btn btn-outline-primary" for="btn-int">
											INTERIOR
										</label>
										<input
											type="radio"
											className="btn-check"
											name="btnradio"
											id="btn-ext"
											autocomplete="off"
										/>
										<label className="btn btn-outline-primary" for="btn-ext">
											EXTERIOR
										</label>
										<input
											type="radio"
											className="btn-check"
											name="btnradio"
											id="btn-misc"
											autocomplete="off"
										/>
										<label className="btn btn-outline-primary" for="btn-misc">
											MISC
										</label>
									</div>
								</div>
							</section>
							<section
								id="projectGallery"
								className="row row-cols-sm-1 row-cols-lg-2 pt-3"
							>
								<Gallery />
								{/* <article className="col col-sm">
										<div className="project-card border-1 border-primary-alt mb-3">
											<a className="project-links" href="./project-page.html">
												<img
													src="../src/imgs/projects/skyview/skyview-main.jpg"
													className="card-img-top"
													alt="Project"
												/>
												<div className="project-body">
													<h2 className="project-title h4">
														Skyview Dental Clinic
													</h2>
													<h3 className="project-text pt-3 fs-5">
														View Project
														<i className="fa fa-chevron-right ps-1"></i>
													</h3>
												</div>
											</a>
										</div>
									</article> */}
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
							<li>Scotiabank</li>
							<li>Goodwill</li>
							<li>Alberta Health Services</li>
							<li>Norquest College</li>
							<li>Atco Gas</li>
							<li>Direct Energy</li>
							<li>Skyview Dental</li>
							<li>Blackwood Partners</li>
							<li>Structube</li>
							<li>Bentall Green Oak</li>
							<li>Trane Supply</li>
							<li>Xtreme</li>
							<li>Finning</li>
							<li>Huntswood</li>
							<li>Ford Credit</li>
							<li>Ernst and Young</li>
							<li>Summit Memorials</li>
							<li>Apegga</li>
							<li>Procura</li>
							<li>Belterra Corporation</li>
							<li>Trydor Insulation</li>
							<li>Investors Group</li>
							<li>Morguard Investments Ltd.</li>
							<li>Hove Street Properties Ltd.</li>
							<li>CB Richard Ellis</li>
							<li>Nu Body Health & Wellness</li>
							<li>Florist Supply Ltd.</li>
							<li>Litemor</li>
							<li>Dorcy's Moving</li>
							<li>Western Hog Exchange</li>
							<li>Alberta Used Oil</li>
							<li>National Parole Board</li>
							<li>Rose Crest Nursing Home</li>
							<li>Westcorp Inc.</li>
							<li>Links Clinic</li>
							<li>Structube</li>
							<li>Huntswood Custom Cabinets</li>
							<li>Trane Supply</li>
							<li>Xtreme</li>
							<li>Scotia Place</li>
						</ul>
					</aside>
				</div>
			</div>
			<article
				className="
						row row-cols-1
						justify-content-center
						align-items-center
						text-center
						py-5
						bg-secondary-tca
						mx-0
					"
			>
				<header className="col">
					<h5 className="h3 py-4 text-light">Choose the right course.</h5>
				</header>
				<div className="col pb-4">
					<HashLink
						smooth
						to="/contact#contactForm"
						className="btn btn-outline-primary text-uppercase"
					>
						Request free estimate <i className="fa fa-chevron-right ms-2"></i>
					</HashLink>
				</div>
			</article>
		</main>
	);
}

export default Projects;
