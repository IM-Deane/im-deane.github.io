import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

function About() {
	const [isCollapsed, setIsCollapsed] = useState(true);
	useEffect(() => {
		document.title = "About Us - TCA Developments";
	}, []);
	return (
		<main className="container-fluid px-0">
			<header className="row site-banner pt-5 mx-0">
				<h1 className="display-6 fw-bold p-4">ABOUT</h1>
			</header>
			<div
				id="accordion"
				className="row sections p-4 mt-5 justify-content-center"
			>
				{/* <!-- Accordian wrapper --> */}
				<div
					className="col accordion accordion-flush container-fluid"
					id="accordionExample"
				>
					{/* <!-- HISTORY SECTION --> */}
					<div className="accordion-item">
						<header className="accordion-header">
							<h2 id="headingOne">
								<button
									className="accordion-button btn-primary-tca text-white"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapse-history"
									aria-expanded={false}
									aria-controls="collapse-history"
								>
									WHO WE ARE
								</button>
							</h2>
						</header>
						<div
							id="collapse-history"
							className={`accordion-collapse collapse show`}
							aria-labelledby="headingOne"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								<section className="fs-5 lh-base">
									<p className="text-body px-3">
										TCA Developments began in 1990 as a consultant business and
										in 1999 ventured into commercial construction as a
										<strong className="fw-bold text-primary-alt">
											{" General Contractor"}
										</strong>
										.
									</p>

									<p className="text-body mb-4 px-3">
										Our vision was to develop strong bonds with local management
										companies by providing affordable renovation services. This
										relationship-based business model is still an integral
										aspect of our success.
									</p>

									<p className="text-body mb-4 px-3">
										TCA Developments initially handled projects from minor
										renovations to the $100,000.00 range. Since that humble
										beginning, our business has evolved into a significant
										player in Edmonton's commercial construction and development
										industry.
									</p>

									<p className="text-body mb-4 px-3">
										Since our inception, we have chosen to pride ourselves on
										<strong className="fw-bold text-primary-alt">
											{" Quality "}
										</strong>
										and
										<strong className="fw-bold text-primary-alt">
											{" Attention to Detail "}
										</strong>
										while exceeding customer expectations. Essentially, TCA
										Developments is the
										<em>{" Right Course to Great Developments"}</em>.
									</p>
									<p className="text-body px-3">
										We sincerely welcome and appreciate your interest in TCA
										Developments.
									</p>
								</section>
							</div>
						</div>
					</div>
					{/* TEAM SECTION  */}
					<div className="accordion-item">
						<header
							className="accordion-header w-100 bg-primary-tca"
							id="headingThree"
						>
							<h2>
								<button
									className="
											accordion-button
											collapsed
											btn-primary-tca
											text-white
										"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapse-team"
									aria-expanded="false"
									aria-controls="collapse-team"
								>
									MEET OUR TEAM
								</button>
							</h2>
						</header>
						<div
							id="collapse-team"
							className="accordion-collapse collapse show"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								<section className="row my-3 ps-2">
									<h2 className="h3 text-primary-alt mt-2">Team TCA</h2>
									<p className="text-body mt-2 fs-5 lh-base">
										At TCA Developments, we believe that every project we take
										on deserves exceptional care. That is why we strive only to
										hire employees who share our values.
									</p>
									<p className="text-body mt-0 fs-5 lh-base">
										Our team members are thoughtful, driven, and hard-working
										professionals who enjoy what they do. It is easy to
										guarantee our work when they treat every project with
										outstanding focus and consideration.
									</p>
									<p className="text-body mt-1 fs-5 lh-base">
										If you have any questions or would like more information,
										feel free to reach out to us at{" "}
										<a href="mailto:info@tcadeveopments.com">
											info@tcadeveopments.com
										</a>{" "}
										or <a href="tel:(825)401-2404">(825) 401-2404</a>.
									</p>
								</section>
								<section className="row my-3 ps-2">
									<header className="row">
										<h2 className="h3 text-primary-alt">
											Member Spotlight:
											<span className="fw-bold ms-2">Rahim</span>
										</h2>
									</header>
									<p className="text-body mt-2 fs-5 lh-base">
										One of our most recent projects was working with Goodwill on
										their new St. Albert location. During this project, we
										provided a unique opportunity for a
										<em>{" Career Connections "}</em>
										participant named Rahim.
									</p>
									<p className="text-body mt-2 fs-5 lh-base">
										While working closely with our staff at the Goodwill site,
										Rahim learned about various construction services such as
										electrical, painting, machines. This experience provided him
										with valuable insight into our industry. We hope to see
										Rahim in the future and wish him well no matter where his
										career takes him.
									</p>
									<p className="text-body mt-2 fs-5">
										Please take a moment to watch the below video of his
										experience working with TCA Developments. A special thank
										you to Goodwill for this opportunity.
									</p>
								</section>
								<section className="row p-2">
									<iframe
										width="560"
										height="400"
										src="https://www.youtube.com/embed/2I-RMpMod0U"
										title="Rahim TCA member spotlight"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- FAQ SECTION --> */}
			<div className="row bg-light">
				<article className="container">
					<header className="row m-4 py-5 text-center">
						<h2 id="FAQ" className="h1 text-primary-alt">
							Frequently Asked Questions
						</h2>
						<section className="row justify-content-center text-center mx-auto">
							<div className="row row-cols-1 mt-4 p-4">
								<div className="col pb-3">
									<details>
										<summary className="h3" style={{ outline: "none" }}>
											What size of projects do you typically manage?
										</summary>
										<p className="text-body pt-3 fs-5">
											We manage properties of every size including small-scale
											offices and multi-million dollar buildings. <br />
											No matter what type of job it is, we take the same care
											and detail with every project that comes our way.
										</p>
										<div className="row text-center pb-3">
											<div className="col">
												<HashLink
													smooth
													to="/projects#top"
													className="btn btn-primary btn-sm text-uppercase"
												>
													View our work
													<i className="fa fa-chevron-right ms-2"></i>
												</HashLink>
											</div>
										</div>
									</details>
								</div>
								<div className="col pb-3">
									<details>
										<summary className="h3" style={{ outline: "none" }}>
											Does TCA bid on contracts?
										</summary>
										<p className="text-body pt-3 fs-5">
											We sure do! Most of our contracts are bid-build, and we
											would love it if you added us to your commercial
											construction bid list.
										</p>
										<div className="row text-center pb-3">
											<div className="col">
												<HashLink
													smooth
													to="/contact#contact-form"
													className="btn btn-primary btn-sm text-uppercase"
												>
													Let's Chat{" "}
													<i className="fa fa-chevron-right ms-2"></i>
												</HashLink>
											</div>
										</div>
									</details>
								</div>
								<div className="col pb-3">
									<details>
										<summary className="h3" style={{ outline: "none" }}>
											Does TCA Developments perform design-build projects?
										</summary>
										<p className="text-body pt-3 fs-5">
											Absolutely! After 30 years in the commercial development
											industry, we have established a strong connection with
											many building owners and management companies. This
											<strong className="fw-bold text-primary-alt">
												{" trust "}
											</strong>
											allows us to sole source projects when required.
										</p>
										<div className="row text-center">
											<div className="col">
												<HashLink
													smooth
													to="/services#top"
													className="btn btn-primary btn-sm text-uppercase"
												>
													Learn More{" "}
													<i className="fa fa-chevron-right ms-2"></i>
												</HashLink>
											</div>
										</div>
									</details>
								</div>
								<div className="col pb-3">
									<details>
										<summary className="h3" style={{ outline: "none" }}>
											Does TCA perform preliminary budget pricing for a
											commercial renovation?
										</summary>
										<p className="text-body pt-3 fs-5">
											Always! Our estimators are committed to providing precise
											cost estimates for all your commercial needs. We also
											offer an array of budgeting solutions that are suitable
											for projects of every scope.
										</p>
										<div className="row text-center">
											<div className="col">
												<HashLink
													smooth
													to="/services#top"
													className="btn btn-primary btn-sm text-uppercase"
												>
													Learn More{" "}
													<i className="fa fa-chevron-right ms-2"></i>
												</HashLink>
											</div>
										</div>
									</details>
								</div>
								<div className="col">
									<details className="text-center">
										<summary className="h3" style={{ outline: "none" }}>
											How quickly can TCA construct our new office?
										</summary>
										<p className="text-body pt-3 fs-5">
											Rush orders and tight deadlines are not an issue. Our
											in-house specialists allow us to respond quickly to
											time-sensitive scenarios. This unique advantage ensures
											every project is on time and under budget. Our only
											constraints are municipality development and building
											permit requirements.
										</p>
										<div className="row text-center">
											<div className="col">
												<HashLink
													smooth
													to="/services#top"
													className="btn btn-primary btn-sm text-uppercase"
												>
													Learn More{" "}
													<i className="fa fa-chevron-right ms-2"></i>
												</HashLink>
											</div>
										</div>
									</details>
								</div>
							</div>
						</section>
					</header>
				</article>
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
						to="/contact#top"
						className="btn btn-outline-primary text-uppercase"
					>
						Request free estimate <i className="fa fa-chevron-right ms-2"></i>
					</HashLink>
				</div>
			</article>
		</main>
	);
}

export default About;
