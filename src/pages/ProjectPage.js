import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import data from "../components/project-data";
import { FaChevronRight } from "react-icons/fa";
import RelevantProjects from "../components/relevant-projects.component";

function ProjectPage() {
	const [project, setProject] = useState("Default Project");
	const [images, setImages] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const newProject = data.find((project) => project.id === parseInt(id));
		document.title = `${newProject.name} - TCA Developments`;

		setProject(newProject);
		setImages([...newProject.images]);
	}, [id]);

	return (
		<main className="container-fluid px-0">
			<header className="row site-banner pt-5 px-0 mx-0">
				<h1 className="display-6 pt-4 text-center project-name text-uppercase fw-bold">
					{project.name}
				</h1>
			</header>
			<section className="container project-body">
				<div className="row my-5 mx-0  pt-4">
					<div className="col-sm">
						<div
							id="projectCarousel"
							className="carousel slide"
							data-bs-ride="carousel"
							data-bs-interval="6000"
						>
							<div className="carousel-inner">
								{images.map((img, index) => (
									<>
										<div
											key={index}
											className={`carousel-item border-0  ${
												images.indexOf(img) === 0 && "active"
											}`}
										>
											<div
												style={{
													backgroundImage: `url(${img})`,
													height: "400px",
													minWidth: "100%",
													backgroundPosition: "center",
													backgroundSize: "cover",
													backgroundRepeat: "no-repeat",
												}}
											></div>
										</div>
									</>
								))}
							</div>
							{/* Carousel Controls */}
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#projectCarousel"
								data-bs-slide="prev"
							>
								<span
									className="bg-primary-alt border-1 me-3"
									style={{ borderRadius: "50%" }}
									aria-hidden="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="35"
										height="35"
										fill="currentColor"
										className="bi bi-arrow-left-short text-white"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
										/>
									</svg>
								</span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#projectCarousel"
								data-bs-slide="next"
							>
								<span
									className="bg-primary-alt border-1 ms-3"
									style={{ borderRadius: "50%" }}
									aria-hidden="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="35"
										height="35"
										fill="currentColor"
										className="bi bi-arrow-right-short text-white"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
										/>
									</svg>
								</span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
					<aside className="col">
						<ul className="list-group list-group-flush list-group-">
							<li className="list-group-item flex-fill">
								<div className="d-flex align-items-center">
									<span className="badge bg-primary-tca p-2 mx-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-calendar-event"
											viewBox="0 0 16 16"
										>
											<path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
											<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
										</svg>
									</span>
									<span className="mx-1 text-dark fw-bolder">Date:</span>
									<span id="project-date" className="ps-2">
										{project.date}
									</span>
								</div>
							</li>
							<li className="list-group-item flex-fill">
								<div className="d-flex align-items-center">
									<span className="badge bg-primary-tca p-2 mx-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-person-circle"
											viewBox="0 0 16 16"
										>
											<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
											<path
												fillRule="evenodd"
												d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
											/>
										</svg>
									</span>
									<span className="mx-1 text-dark fw-bolder">Client:</span>
									<span className="ps-2 project-name">
										{project.consultant != null
											? project.consultant
											: project.name}
									</span>
								</div>
							</li>
							<li className="list-group-item flex-fill">
								<div className="d-flex align-items-center">
									<span className="badge bg-primary-tca p-2 mx-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-tag"
											viewBox="0 0 16 16"
										>
											<path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
											<path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586l7 7L13.586 9l-7-7H2v4.586z" />
										</svg>
									</span>
									<span className="mx-1 text-dark fw-bolder">Value:</span>
									<span id="project-cost" className="ps-2">
										{project.contract}
									</span>
								</div>
							</li>
							<li className="list-group-item flex-fill">
								<div className="d-flex align-items-center">
									<span className="badge bg-primary-tca p-2 mx-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-geo-alt"
											viewBox="0 0 16 16"
										>
											<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
											<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
										</svg>
									</span>
									<span className="mx-1 text-dark fw-bolder">Location:</span>
									<span id="project-location" className="ps-2">
										{project.location}
									</span>
								</div>
							</li>
						</ul>
					</aside>
				</div>
				{/* Section hidden until they have more write-ups */}
				<section className="row pb-5">
					<div className="col">
						<h2 className="display-6 project-name text-uppercase">
							{project.category === 1 ? project.name : ""}
						</h2>

						<p id="project-description" className="text-body pt-1">
							{project.category === 1 ? project.description : ""}
						</p>
					</div>
				</section>
			</section>
			{/* <!-- Related Projects --> */}
			<div className="container-fluid px-0">
				<article className="row g-1 justify-content-center align-items-center text-center p-5 bg-light">
					<header className="d-flex flex-column align-items-center pb-4">
						<h4 className="h2 text-primary-alt text-uppercase bw-bold">
							Related Projects
						</h4>
						<hr
							style={{ border: "5px solid rgb(15, 15, 156)", width: "10%" }}
						/>
					</header>
					<div
						className="
										row row-cols-md-2 row-cols-lg-4
										justify-content-center
										text-center
										g-2
										align-items-center
									"
					>
						<RelevantProjects key={project.id} project={project} />
					</div>
				</article>
			</div>
			<article className="row row-cols-1 justify-content-center align-items-center text-center py-5 bg-secondary-tca mx-0">
				<header className="col">
					<h5 className="h3 py-4 text-light">Choose the right course.</h5>
				</header>
				<div className="col pb-4">
					<HashLink
						smooth
						to="/contact#contactForm"
						className="btn btn-outline-primary text-uppercase"
					>
						<span className="d-flex align-items-center">
							Request free estimate <FaChevronRight className="ms-2" />
						</span>
					</HashLink>
				</div>
			</article>
		</main>
	);
}

export default ProjectPage;
