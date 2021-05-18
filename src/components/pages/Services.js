import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import FeaturedProjects from "../FeaturedProjects";

function Services() {
	// Update page title
	useEffect(() => {
		document.title = "Construction Services - TCA Developments";
	}, []);
	return (
		<main className="container-fluid px-0">
			<header className="row site-banner pt-5 mx-0">
				<h1 className="display-6 fw-bold p-4">OUR SERVICES</h1>
			</header>

			<article className="container-fluid">
				<header className="row m-4 py-5 text-lg-center">
					<h2 className="h1 pb-3 lh-base text-primary-alt text-center">
						{"Construction Consultants "}
						<span className="text-muted fw-bold">&</span>
						<br />
						General Contracting
					</h2>
					<section className="row mx-0 d-flex justify-content-center">
						<p className="lead lh-base fs-5">
							TCA Developments is Edmonton’s premier general contractor for a
							reason. We blend cutting-edge software with innovative remodeling
							methods to breathe life into your vision.
						</p>
						<p className="lead lh-base fs-5">
							After decades of successful business, you can trust that our
							approach has been
							<strong className="text-primary-alt fw-bold">
								{" optimized "}
							</strong>{" "}
							for your success.
						</p>
						<p className="lead lh-base fs-5 pt-3">
							When you work with us, you will receive timely
							<strong className="text-primary-alt fw-bold">
								{" progress reports"}
							</strong>
							, extensive
							<strong className="text-primary-alt fw-bold">
								{" site walk-throughs"}
							</strong>
							, and our
							<strong className="text-primary-alt fw-bold">
								{" relentless "}
							</strong>
							attention to detail through every phase of the project.
						</p>
						<p className="lead lh-base fs-5">
							Whether its a basic office renovation or the construction of a new
							free-standing building, TCA is the general contractor for you.
						</p>
						<p className="lead lh-base fs-5 pt-4">
							Please <a href="./contact.html">contact us</a> if you have any
							questions or potential projects in mind.
						</p>
						<p className="lead fs-5">
							We are ready to compete for your business!
						</p>
					</section>
				</header>
			</article>

			<div className="row px-0 mx-0">
				<article className="container mx-0 px-0">
					{/* <!-- START THE FEATURETTES --> */}
					<section className="sections mx-0 ps-5 pb-4 bg-light">
						<hr className="featurette-divider mx-5" />
						<div className="row featurette my-5 pt-4">
							<div className="col">
								<h2
									id="officeSection"
									className="featurette-heading text-primary-alt"
								>
									Commercial Renovations
									<span className="text-muted"> | Offices</span>
								</h2>
								<p className="lead pt-4 lh-base">
									Our highly-skilled team
									<strong className="text-primary-alt fw-bold">
										{" excels "}
									</strong>
									at remodeling office buildings and warehouses.
								</p>
								<p className="lead lh-base pb-3">
									When you partner with us, your property will benefit from the
									outstanding solutions we provide. From general construction to
									<strong className="text-primary-alt fw-bold">
										{" planning "}
									</strong>
									and
									<strong className="text-primary-alt fw-bold">
										{" development "}
									</strong>
									services, our experts are ready to build your vision.
								</p>
								<div className="row mx-0">
									<div className="col-lg-8 col-sm py-3 bg-white">
										<h3 className="h3 mb-5 text-center">
											<span className="me-1">
												<i className="fas fa-tools text-primary"></i>
											</span>
											Our Specialties
										</h3>
										<ul className="row row-cols-md-2 list-group-flush fw-bold ps-0">
											<li className="list-group-item col-sm">Carpentry</li>
											<li className="list-group-item col-sm">
												Steel Stud Framing
											</li>
											<li className="list-group-item col-sm">Drywall</li>
											<li className="list-group-item col-sm">
												Mudding & Taping
											</li>
											<li className="list-group-item col-sm">Insulation</li>
											<li className="list-group-item col-sm">Painting</li>
											<li className="list-group-item col-sm">Flooring</li>
											<li className="list-group-item col-sm">T-bar Ceilings</li>
											<li className="list-group-item col-sm">
												Fire Rated Demise Walls
											</li>
											<li className="list-group-item col-sm">Welding</li>
											<li className="list-group-item col-sm">
												Q-deck & Roof Penetrations
											</li>
											<li className="list-group-item col-sm">
												Structural Steel Fabrication & Installation
											</li>
											<li className="list-group-item col-sm">Overhead doors</li>
											<li className="list-group-item col-sm">
												Dock to Grade Steel Ramp
											</li>
											<li className="list-group-item col-sm">
												Concrete/Asphalt Loading
											</li>
											<li className="list-group-item col-sm">Ramps</li>
										</ul>
										<div className="row text-center">
											<div className="col mt-5 py-3">
												<HashLink
													smooth
													to="/contact#contactForm"
													className="btn btn-primary text-uppercase"
												>
													Get started today
													<i className="fa fa-chevron-right ms-2"></i>
												</HashLink>
											</div>
										</div>
									</div>

									<figure
										className="
												img-container
												col-md-4
												px-0
												d-flex
												flex-column
												justify-content-center
											"
									>
										<img
											src={`./assets/services/offices/skyview-lobby.jpg`}
											className="img-fluid"
											alt="Skyview lobby"
										/>
										<figcaption className="text-center mt-2">
											<button
												type="button"
												className="btn btn-outline-primary"
												data-bs-toggle="modal"
												data-bs-target="#officeModal"
												data-bs-whatever="@mdo"
											>
												View more of our work
											</button>
										</figcaption>
									</figure>
									{/* MODAL SECTION */}
									<div
										className="modal fade"
										id="officeModal"
										tabIndex="-1"
										aria-labelledby="officeModalLabel"
										aria-hidden="true"
									>
										<div className="modal-dialog">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="officeModalLabel">
														Office Gallery
													</h5>
													<button
														type="button"
														className="btn-close"
														data-bs-dismiss="modal"
														aria-label="Close"
													></button>
												</div>
												<div className="modal-body">
													<div className="container-fluid">
														<div
															id="officeIndicators"
															className="carousel slide"
															data-bs-ride="carousel"
														>
															<div className="carousel-indicators">
																<button
																	type="button"
																	data-bs-target="#officeIndicators"
																	data-bs-slide-to="0"
																	className="active"
																	aria-current="true"
																	aria-label="Slide 1"
																></button>
																<button
																	type="button"
																	data-bs-target="#officeIndicators"
																	data-bs-slide-to="1"
																	aria-label="Slide 2"
																></button>
																<button
																	type="button"
																	data-bs-target="#officeIndicators"
																	data-bs-slide-to="2"
																	aria-label="Slide 3"
																></button>
																<button
																	type="button"
																	data-bs-target="#officeIndicators"
																	data-bs-slide-to="3"
																	aria-label="Slide 4"
																></button>
															</div>
															<div className="carousel-inner">
																<div className="carousel-item active border-0">
																	<img
																		src={`./assets/services/offices/structube-bathroom.jpg`}
																		className="img-fluid"
																		alt="Structube bathroom."
																	/>
																</div>
																<div className="carousel-item border-0">
																	<img
																		src={`./assets/services/offices/structube-kitchen.jpg`}
																		className="img-fluid"
																		alt="Structube Kitchen"
																	/>
																</div>
																<div className="carousel-item border-0">
																	<img
																		src={`./assets/services/offices/office-interior.jpg`}
																		className="img-fluid"
																		alt="Structube shipping office"
																	/>
																</div>
																<div className="carousel-item border-0">
																	<img
																		src={`./assets/services/offices/bonaventure-lobby.jpg`}
																		className="img-fluid"
																		alt="Structube shipping office"
																	/>
																</div>
															</div>
															<button
																className="carousel-control-prev"
																type="button"
																data-bs-target="#officeIndicators"
																data-bs-slide="prev"
															>
																<span
																	className="carousel-control-prev-icon"
																	aria-hidden="true"
																></span>
																<span className="visually-hidden">
																	Previous
																</span>
															</button>
															<button
																className="carousel-control-next"
																type="button"
																data-bs-target="#officeIndicators"
																data-bs-slide="next"
															>
																<span
																	className="carousel-control-next-icon"
																	aria-hidden="true"
																></span>
																<span className="visually-hidden">Next</span>
															</button>
														</div>
													</div>
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-danger"
														data-bs-dismiss="modal"
													>
														Close
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="sections mx-0 pt-5">
						<hr className="featurette-divider mx-5" />
						<div className="row featurette my-5 px-3">
							<div className="col-md-7 order-md-2 text-center">
								<h2
									id="electricalSection"
									className="featurette-heading text-primary-alt"
								>
									Electrical Services
									<i
										className="fa fa-bolt text-primary ms-3"
										aria-hidden="true"
									></i>
								</h2>
								<p className="lead lh-base pt-4">
									We believe that exceptional work is a result of focusing on
									the details. That is why we hold our electricians to the
									highest industry standards. These experts cover all areas of
									electrical systems installation.
								</p>
								<p className="lead lh-base">
									When you work with TCA Developments, we will strive to deliver
									your project on schedule and under-budget. Our in-house
									electrical services guarantee a direct line of communication
									throughout each phase of construction.
								</p>
								<p className="lead">
									This unique advantage provides our clients with a seamless
									experience and excellent cost savings!
								</p>

								<ul className="list-group fw-bold p-4">
									<li className="list-group-item">Tenant Improvements</li>
									<li className="list-group-item">Lighting and Controls</li>
									<li className="list-group-item">Fire Alarm Systems</li>
									<li className="list-group-item">
										Complete Power Distribution systems
									</li>
									<li className="list-group-item">
										Data Cabling and Communications
									</li>
									<li className="list-group-item">Generator & UPS</li>
									<li className="list-group-item">Flooring</li>
									<li className="list-group-item">Mechanical HVAC Controls</li>
								</ul>
								<div className="row text-center py-3 my-4">
									<div className="col">
										<HashLink
											smooth
											to="/contact#contactForm"
											className="btn btn-primary text-uppercase"
										>
											Get started today
											<i className="fa fa-chevron-right ms-2"></i>
										</HashLink>
									</div>
								</div>
							</div>
							<figure className="col-md-5 order-md-1">
								<img
									src={`./assets/services/structube-electrical.jpg`}
									className="img-fluid"
									alt="Electrical box in Structube warehouse"
								/>
								<figcaption className="text-center mt-2">
									<button
										type="button"
										className="btn btn-outline-primary"
										data-bs-toggle="modal"
										data-bs-target="#electricalModal"
										data-bs-whatever="@mdo"
									>
										View more of our work
									</button>
								</figcaption>
							</figure>
							{/* MODAL SECTION */}
							<div
								className="modal fade"
								id="electricalModal"
								tabIndex="-1"
								aria-labelledby="electricalModalLabel"
								aria-hidden="true"
							>
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title" id="electricalModalLabel">
												Electrical Gallery
											</h5>
											<button
												type="button"
												className="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											></button>
										</div>
										<div className="modal-body">
											<div className="container-fluid">
												<div
													id="electricalIndicators"
													className="carousel slide"
													data-bs-ride="carousel"
												>
													<div className="carousel-indicators">
														<button
															type="button"
															data-bs-target="#electricalIndicators"
															data-bs-slide-to="0"
															className="active"
															aria-current="true"
															aria-label="Slide 1"
														></button>
														<button
															type="button"
															data-bs-target="#electricalIndicators"
															data-bs-slide-to="1"
															aria-label="Slide 2"
														></button>
														<button
															type="button"
															data-bs-target="#electricalIndicators"
															data-bs-slide-to="2"
															aria-label="Slide 3"
														></button>
														<button
															type="button"
															data-bs-target="#electricalIndicators"
															data-bs-slide-to="3"
															aria-label="Slide 4"
														></button>
														<button
															type="button"
															data-bs-target="#electricalIndicators"
															data-bs-slide-to="4"
															aria-label="Slide 5"
														></button>
													</div>
													<div className="carousel-inner">
														<div className="carousel-item active border-0">
															<img
																src={`./assets/services/electrical/electrical-box.jpg`}
																className="img-fluid"
																alt="Electrical box."
															/>
														</div>
														<div className="carousel-item border-0">
															<img
																src={`./assets/services/electrical/electrical-box2.jpg`}
																className="img-fluid"
																alt="Electrical box"
															/>
														</div>
														<div className="carousel-item border-0">
															<img
																src={`./assets/services/electrical/electrical-box-3.jpg`}
																className="img-fluid"
																alt="Electrical box"
															/>
														</div>
														<div className="carousel-item border-0">
															<img
																src={`./assets/services/electrical/electrical-tall.jpg`}
																className="img-fluid"
																alt="Electrical box"
															/>
														</div>
														<div className="carousel-item border-0">
															<img
																src={`./assets/services/electrical/fire-detection.jpg`}
																className="img-fluid"
																alt="Fire detection system"
															/>
														</div>
													</div>
													<button
														className="carousel-control-prev"
														type="button"
														data-bs-target="#electricalIndicators"
														data-bs-slide="prev"
													>
														<span
															className="carousel-control-prev-icon"
															aria-hidden="true"
														></span>
														<span className="visually-hidden">Previous</span>
													</button>
													<button
														className="carousel-control-next"
														type="button"
														data-bs-target="#electricalIndicators"
														data-bs-slide="next"
													>
														<span
															className="carousel-control-next-icon"
															aria-hidden="true"
														></span>
														<span className="visually-hidden">Next</span>
													</button>
												</div>
											</div>
										</div>
										<div className="modal-footer">
											<button
												type="button"
												className="btn btn-danger"
												data-bs-dismiss="modal"
											>
												Close
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="sections mx-0 bg-light">
						<hr className="featurette-divider mx-5" />
						<div className="row featurette my-5 px-5">
							<div className="col-md-7">
								<h2
									id="hvacSection"
									className="featurette-heading text-primary-alt"
								>
									Mechanical <span className="text-muted">&</span> HVAC Services
									<i className="fas fa-snowflake text-primary ms-2"></i>
								</h2>
								<p className="lead lh-base pt-4">
									TCA Developments is committed to preserving your investment.
									We ensure its protection by employing highly skilled and
									specialized professionals from design to installation.
								</p>
								<p className="lead lh-base">
									As an added benefit, all of our HVAC services are in-house.
									You will save money the moment you partner with us.
								</p>
								<ul className="list-group list-group-flush fw-bold p-4">
									<li className="list-group-item">
										Commercial and Intuitional Sheet Metal
									</li>
									<li className="list-group-item">
										Mechanical Equipment Installation
									</li>
									<li className="list-group-item">Comfort systems</li>
									<li className="list-group-item">
										Indoor Air Quality Solutions
									</li>
								</ul>
								<div className="row text-center py-3 my-4">
									<div className="col">
										<HashLink
											to="/contact#contactForm"
											className="btn btn-primary text-uppercase"
										>
											Get started today
											<i className="fa fa-chevron-right ms-2"></i>
										</HashLink>
									</div>
								</div>
							</div>
							<figure className="col-md-5">
								<img
									src={`./assets/services/finning-hvac2.jpg`}
									className="img-fluid"
									alt="Finning Cat hvac system"
								/>
								<figcaption className="text-center mt-2">
									<button
										type="button"
										className="btn btn-outline-primary"
										data-bs-toggle="modal"
										data-bs-target="#hvacModal"
										data-bs-whatever="@mdo"
									>
										View more of our work
									</button>
								</figcaption>
							</figure>
						</div>
						{/* MODAL SECTION */}
						<div
							className="modal fade"
							id="hvacModal"
							tabIndex="-1"
							aria-labelledby="hvacModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="hvacModalLabel">
											Mechanical & HVAC Gallery
										</h5>
										<button
											type="button"
											className="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										></button>
									</div>
									<div className="modal-body">
										<div className="container-fluid">
											<div
												id="mechanicalIndicators"
												className="carousel slide"
												data-bs-ride="carousel"
											>
												<div className="carousel-indicators">
													<button
														type="button"
														data-bs-target="#mechanicalIndicators"
														data-bs-slide-to="0"
														className="active"
														aria-current="true"
														aria-label="Slide 1"
													></button>
													<button
														type="button"
														data-bs-target="#mechanicalIndicators"
														data-bs-slide-to="1"
														aria-label="Slide 2"
													></button>
													<button
														type="button"
														data-bs-target="#mechanicalIndicators"
														data-bs-slide-to="2"
														aria-label="Slide 3"
													></button>
													<button
														type="button"
														data-bs-target="#mechanicalIndicators"
														data-bs-slide-to="3"
														aria-label="Slide 4"
													></button>
													<button
														type="button"
														data-bs-target="#mechanicalIndicators"
														data-bs-slide-to="4"
														aria-label="Slide 5"
													></button>
												</div>
												<div className="carousel-inner">
													<div className="carousel-item active border-0">
														<img
															src={`./assets/services/mech-hvac/finning-controls.jpg`}
															className="img-fluid"
															alt="Finning control interface."
														/>
													</div>
													<div className="carousel-item border-0">
														<img
															src={`./assets/services/mech-hvac/finning-scc2.jpg`}
															className="img-fluid"
															alt="Finning self contained controls."
														/>
													</div>
													<div className="carousel-item border-0">
														<img
															src={`./assets/services/mech-hvac/structube-hvac.jpg`}
															className="img-fluid"
															alt="Structube shipping office"
														/>
													</div>
													<div className="carousel-item border-0">
														<img
															src={`./assets/services/mech-hvac/trane-hvac.jpg`}
															className="img-fluid"
															alt="Trane interior HVAC system."
														/>
													</div>
													<div className="carousel-item border-0">
														<img
															src={`./assets/services/mech-hvac/trane-interior.jpg`}
															className="img-fluid"
															alt="Trane interior HVAC system."
														/>
													</div>
												</div>
												<button
													className="carousel-control-prev"
													type="button"
													data-bs-target="#mechanicalIndicators"
													data-bs-slide="prev"
												>
													<span
														className="carousel-control-prev-icon"
														aria-hidden="true"
													></span>
													<span className="visually-hidden">Previous</span>
												</button>
												<button
													className="carousel-control-next"
													type="button"
													data-bs-target="#mechanicalIndicators"
													data-bs-slide="next"
												>
													<span
														className="carousel-control-next-icon"
														aria-hidden="true"
													></span>
													<span className="visually-hidden">Next</span>
												</button>
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-danger"
											data-bs-dismiss="modal"
										>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="sections mx-0">
						<hr className="featurette-divider mx-5" />
						<div className="row featurette my-5 px-5">
							<figure className="col-md-5 pb-3">
								<img
									src={`./assets/concrete-main.jpg`}
									className="img-fluid"
									alt="Concrete being set."
								/>
								<figcaption className="text-center mt-2">
									<button
										type="button"
										className="btn btn-outline-primary"
										data-bs-toggle="modal"
										data-bs-target="#concreteModal"
										data-bs-whatever="@mdo"
									>
										View more of our work
									</button>
								</figcaption>
							</figure>
							<div className="col-md-7">
								<h2
									id="concreteSection"
									className="featurette-heading text-primary-alt"
								>
									Concrete Services
									<i className="fas fa-road text-primary ms-3"></i>
								</h2>
								<p className="lead lh-base pt-4">
									Over the past 30 years, we have dedicated ourselves to
									providing
									<strong className="fw-bold text-primary-alt">
										{" affordable concrete services "}
									</strong>
									that produce
									<strong className="fw-bold text-primary-alt">
										{" superior results"}
									</strong>
									. Our in-house concrete specialists enable TCA to handle
									time-sensitive projects efficiently and professionally.
								</p>
								<ul className="list-group list-group-flush fw-bold p-4">
									<li className="list-group-item">
										Vertical Masonry Cutting for Overhead Doors Installations
									</li>
									<li className="list-group-item">
										Slab Concrete Cutting & Trenching
									</li>
									<li className="list-group-item">
										Modify Loading Docks for Scissor Lift Installations
									</li>
									<li className="list-group-item">
										Removal and Recycling of Concrete
									</li>
									<li className="list-group-item">Stress Crack Repairs</li>
									<li className="list-group-item">
										Concrete Pouring & Finishing
									</li>
									<li className="list-group-item">Retaining Walls</li>
									<li className="list-group-item">Concrete Curbs</li>
								</ul>
								<div className="row text-center py-3 my-4">
									<div className="col">
										<HashLink
											smooth
											to="/contact#contactForm"
											className="btn btn-primary text-uppercase"
										>
											Get started today
											<i className="fa fa-chevron-right ms-2"></i>
										</HashLink>
									</div>
								</div>
							</div>
						</div>
						{/* MODAL SECTION */}
						<div
							className="modal fade"
							id="concreteModal"
							tabIndex="-1"
							aria-labelledby="concreteModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="concreteModalLabel">
											Concrete Gallery
										</h5>
										<button
											type="button"
											className="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										></button>
									</div>
									<div className="modal-body">
										<div className="container-fluid">
											<div
												id="concreteIndicators"
												className="carousel slide"
												data-bs-ride="carousel"
											>
												<div className="carousel-indicators">
													<button
														type="button"
														data-bs-target="#concreteIndicators"
														data-bs-slide-to="0"
														className="active"
														aria-current="true"
														aria-label="Slide 1"
													></button>
													<button
														type="button"
														data-bs-target="#concreteIndicators"
														data-bs-slide-to="1"
														aria-label="Slide 2"
													></button>
													<button
														type="button"
														data-bs-target="#concreteIndicators"
														data-bs-slide-to="2"
														aria-label="Slide 3"
													></button>
												</div>
												<div className="carousel-inner">
													<div className="carousel-item active border-0">
														<img
															src={`./assets/services/concrete/concrete-slabs.jpg`}
															className="img-fluid"
															alt="Large concrete slabs"
														/>
													</div>
													<div className="carousel-item border-0">
														<img
															src={`./assets/services/concrete/concrete-slabs2.jpg`}
															className="img-fluid"
															alt="Small concrete slabs"
														/>
													</div>
													<div className="carousel-item border-0">
														<img
															src={`./assets/services/concrete/concrete-wall.jpg`}
															className="img-fluid"
															alt="Concrete wall"
														/>
													</div>
												</div>
												<button
													className="carousel-control-prev"
													type="button"
													data-bs-target="#concreteIndicators"
													data-bs-slide="prev"
												>
													<span
														className="carousel-control-prev-icon"
														aria-hidden="true"
													></span>
													<span className="visually-hidden">Previous</span>
												</button>
												<button
													className="carousel-control-next"
													type="button"
													data-bs-target="#concreteIndicators"
													data-bs-slide="next"
												>
													<span
														className="carousel-control-next-icon"
														aria-hidden="true"
													></span>
													<span className="visually-hidden">Next</span>
												</button>
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-danger"
											data-bs-dismiss="modal"
										>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="sections bg-light">
						<hr className="featurette-divider mx-5" />
						<div className="row featurette mt-5 pb-5">
							<div className="col text-center">
								<h2
									id="customSection"
									className="featurette-heading h1 text-primary-alt"
								>
									Have something else in mind for your building?
									<span className="text-muted"></span>
								</h2>
								<p className="lead pt-4">
									We are confident that our staff can deliver excellent results
									for any project.
								</p>
								<p className="lead pt-2">
									We would love to hear about your idea.
								</p>
								<div className="row text-center py-3">
									<div className="col">
										<HashLink
											smooth
											to="/contact#contactForm"
											className="btn btn-primary text-uppercase"
										>
											Let's Chat <i className="fa fa-chevron-right ms-2"></i>
										</HashLink>
									</div>
								</div>
							</div>
						</div>
					</section>
				</article>
			</div>
			{/* <!-- Projects --> */}
			<article
				className="
						row
						g-1
						justify-content-center
						align-items-center
						text-center
						p-5
						bg-light
					"
			>
				<header className="d-flex flex-column align-items-center pb-4">
					<h4 className="h2 text-primary-alt text-uppercase bw-bold">
						Project Spotlight
					</h4>
					<hr style={{ border: "5px solid rgb(15, 15, 156)", width: "10%" }} />
				</header>
				<section
					id="serviceProjects"
					className="row row-cols-md-2 row-cols-lg-4"
				>
					<FeaturedProjects />
				</section>
			</article>
		</main>
	);
}

export default Services;
