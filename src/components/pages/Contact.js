import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm";

// Add Contact Form functionality
// import ContactForm from "../App";

function Contact() {
	// Update page title
	useEffect(() => {
		document.title = "Contact Us - TCA Developments";
	}, []);

	return (
		<main className="container-fluid px-0">
			<header className="row site-banner pt-5 mx-0">
				<h1 className="display-6 fw-bold p-4">CONTACT</h1>
			</header>
			<div className="container">
				<section className="py-3 mt-5">
					<aside className="row">
						<div className="col-3 card" style={{ width: "30rem" }}>
							<div className="card-body text-center">
								<h2 className="h4 card-title pb-2" style={{ color: "#7d6e80" }}>
									EDMONTON OFFICE
								</h2>
								<ul className="list-group list-group-flush">
									{/* <!-- Address item --> */}
									<li className="list-group-item">
										<div className="d-flex align-items-baseline">
											<span className="badge bg-primary-tca p-2 mx-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-geo-alt-fill"
													viewBox="0 0 16 16"
												>
													<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
												</svg>
											</span>
											{/* <!-- Address --> */}
											<span className="ps-1 text-body">
												<p className="mb-1">16065 132 Ave NW,</p>
												<p className="ps-1 mb-1">Edmonton, Alberta,</p>
												<p>T5V 1H8</p>
											</span>
										</div>
									</li>
									{/* <!-- Phone --> */}
									<li className="list-group-item">
										<div className="d-flex align-items-center">
											<span className="badge bg-primary-tca p-2 mx-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-telephone-fill"
													viewBox="0 0 16 16"
												>
													<path
														fillRule="evenodd"
														d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
													/>
												</svg>
											</span>
											<span className="card-text py-2 ps-1">
												<a
													className="link-accent-blue-tca"
													href="tel:(825) 401-2404"
												>
													(825) 401-2404
												</a>
											</span>
										</div>
									</li>
									{/* <!-- Email --> */}
									<li className="list-group-item">
										<div className="d-flex align-items-center">
											<span className="badge bg-primary-tca p-2 mx-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-envelope-fill"
													viewBox="0 0 16 16"
												>
													<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
												</svg>
											</span>
											<span className="card-text ps-1">
												<a
													href="mailto:info@tcadevelopments.com?subject=General Inquiry"
													className="link-light text-accent-blue-tca"
												>
													info@tcadevelopments.com
												</a>
											</span>
										</div>
									</li>
									{/* <!-- TCA Hours --> */}
									{/* <li className="list-group-item">
											<div className="d-flex align-items-baseline">
												<span className="badge bg-primary-tca p-2 mx-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														className="bi bi-clock-fill"
														viewBox="0 0 16 16"
													>
														<path
															d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
														/>
													</svg>
												</span>
												<span className="card-text m-3">
													<table className="table table-sm table-bordered">
														<thead className="table-light">
															<tr>
																<th scope="col" colspan="4">
																	Hours of operation
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<th scope="row">Monday</th>
																<td colspan="2">8 am</td>
																<td colspan="3">5 pm</td>
															</tr>
															<tr>
																<th scope="row">Tuesday</th>
																<td colspan="2">8 am</td>
																<td colspan="2">5 pm</td>
															</tr>
															<tr>
																<th scope="row">Wednesday</th>
																<td colspan="2">8 am</td>
																<td colspan="2">5 pm</td>
															</tr>
															<tr>
																<th scope="row">Thursday</th>
																<td colspan="2">8 am</td>
																<td colspan="2">5 pm</td>
															</tr>
															<tr>
																<th scope="row">Friday</th>
																<td colspan="2">8 am</td>
																<td colspan="2">5 pm</td>
															</tr>
															<tr>
																<th scope="row">Saturday</th>
																<td colspan="2">8 am</td>
																<td colspan="2">5 pm</td>
															</tr>
															<tr>
																<th scope="row">Sunday</th>
																<td colspan="2">8 am</td>
																<td colspan="2">5 pm</td>
															</tr>
														</tbody>
													</table>
												</span>
											</div>
										</li> */}
								</ul>
							</div>
						</div>
						{/* <!-- Google maps api --> */}
						<aside className="col ratio ratio-4x3">
							<iframe
								title={`Google Maps API`}
								style={{ border: "0" }}
								src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAYBtxVWVGtUF3eBnx_qiNXizLh5ETvw_o&q=16065+132+Ave+NW,Edmonton,Alberta&zoom=12"
								allowfullscreen
							></iframe>
						</aside>
					</aside>
				</section>
				<article className="row justify-content-center text-center mb-5">
					<h2 id="contactForm" className="h1 my-4 p-2">
						Send us a message
					</h2>
					<p className="lead">
						For all inquiries, please call our office at
						<a href="tel:(825) 401-2404" className="text-accent-blue-tca">
							{" "}
							825-401-2404{" "}
						</a>
						or fill out the following form.
					</p>
					<ContactForm />
				</article>
			</div>
		</main>
	);
}

export default Contact;
