import React, { useEffect } from "react";
import ContactForm from "../ContactForm";
import { importAll, parseObject } from "../Images";

// Import Google Maps iamge
const contactMap = {
	images: parseObject(
		importAll(require.context("../../imgs/tca-map/", false, /\.(webp|jpe?g)$/))
	),
};

function Contact() {
	// Update page title
	useEffect(() => {
		document.title = "Contact Us - TCA Developments";
	}, []);

	return (
		<main className="container-fluid px-0">
			<header className="row site-banner pt-5 mx-0 mb-5">
				<h1 className="display-6 fw-bold p-4">CONTACT</h1>
			</header>
			<div className="container">
				<section className="py-3 mt-5">
					<aside className="row justify-content-center">
						<div className="col-sm col-md-5 card">
							<div className="card-body px-0 text-center w-100">
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
													className="link-primary-alt"
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
													className="link-primary-alt"
												>
													info@tcadevelopments.com
												</a>
											</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						{/* <!-- Google maps image --> */}
						<aside className="col-sm col-lg-5 px-1">
							<picture>
								{/* WEBP format */}
								<source
									className="img-fluid"
									srcSet={`${contactMap.images[1]} 320w, ${contactMap.images[3]} 660w`}
									type="image/webp"
								/>
								{/* Fallback */}
								<img
									className="img-fluid"
									src={contactMap.images[0]}
									srcSet={`${contactMap.images[0]} 320w, ${contactMap.images[2]} 660w`}
									alt="TCA Google Map"
								/>
							</picture>
						</aside>

						{/* <aside className="col ratio ratio-4x3">
							<iframe
								title={`Google Maps API`}
								style={{ border: "0" }}
								src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAYBtxVWVGtUF3eBnx_qiNXizLh5ETvw_o&q=16065+132+Ave+NW,Edmonton,Alberta&zoom=12"
								allowFullScreen
							></iframe>
						</aside> */}
					</aside>
				</section>
				<article className="row justify-content-center text-center mb-5">
					<h2 id="contactForm" className="h1 my-4 p-2">
						Send us a message
					</h2>
					<p className="lead">
						For all inquiries, please call our office at{" "}
						<a href="tel:(825) 401-2404" className="link-primary-alt">
							825-401-2404
						</a>{" "}
						or fill out the following form.
					</p>
					<ContactForm />
				</article>
			</div>
		</main>
	);
}

export default Contact;
