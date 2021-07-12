import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { FaChevronRight } from "react-icons/fa";
import ServiceCards from "../components/service-cards.component";
import FeaturedProjects from "../components/featured-projects.component";
import ContactForm from "../components/contact-form.component";
import { importAll, parseObject } from "../components/Images";

import ImageWithFallback from "../components/fallback-img.component";

import { clientList } from "../components/client-list";

import "bootstrap/js/dist/carousel";

const heroImgs = {
	nextGen: parseObject(
		importAll(
			require.context("../imgs/heroes/nextgen/", false, /\.(webp|jxr|jpx)$/)
		)
	),
	legacy: parseObject(
		importAll(
			require.context("../imgs/heroes/legacy/", false, /\.(png|jpe?g|svg)$/)
		)
	),
};

function Home() {
	useEffect(() => {
		document.title =
			"TCA Developments - Construction Consultant & General Contractor";
	}, []);
	return (
		<main className="container-fluid px-0 m-0">
			<div className="row">
				{/* <!-- Hero carousel --> */}
				<div
					id="myCarousel"
					className="hero-carousel slide"
					data-bs-ride="carousel"
					data-bs-interval="6000"
				>
					<div className="carousel-inner">
						<div className="hero-container">
							<div className="carousel-item active border-0">
								<div className="hero-inner mx-0 px-0 w-100">
									<ImageWithFallback
										src={heroImgs.nextGen[0]}
										fallback={heroImgs.legacy[0]}
										type="image/webp"
										alt={"A city under development."}
									/>
									<div className="carousel-caption text-start">
										<h1 className="display-6 fw-bold text-uppercase w-100">
											TCA DEVELOPMENTS
										</h1>
										<p className="lead py-3">
											Edmonton's
											<strong className="fw-bold">{" premier "}</strong>
											commercial renovation & development company
										</p>
										<div className="border-top w-75">
											<p className="fst-italic fw-bold pt-3">
												The Right Course to Great Developments
											</p>
											<p id="hero-consult-container">
												<HashLink
													smooth
													to="/contact#contactForm"
													className="hero-btn btn-primary mt-3 text-white w-100"
												>
													<span className="d-flex align-items-center text-white">
														Request a Consultation{" "}
														<FaChevronRight className="ms-2" />
													</span>
												</HashLink>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item border-0">
								<div className="hero-inner mx-0 px-0 w-100">
									<ImageWithFallback
										src={heroImgs.nextGen[1]}
										fallback={heroImgs.legacy[1]}
										alt={"Structube kitchen created by TCA Developments."}
									/>
									<div className="carousel-caption">
										<h1 className="display-6 fw-bold text-uppercase">
											General Contracting
										</h1>
										<p className="lead fs-5 py-3">
											Our
											<strong className="fw-bold">
												{" construction solutions "}
											</strong>
											are suitable for properties of every scope
										</p>
										<Link
											className="hero-btn btn-primary fs-6 mt-3 text-white"
											to="/services"
										>
											<span className="d-flex align-items-center text-white">
												View our Services <FaChevronRight className="ms-2" />
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="carousel-item border-0">
								<div className="hero-inner mx-0 px-0 w-100">
									<ImageWithFallback
										src={heroImgs.nextGen[2]}
										fallback={heroImgs.legacy[2]}
										alt={
											"Background of a masonry wall that was built by TCA Developments."
										}
									/>
									<div className="carousel-caption text-end">
										<h1 className="display-6 fw-bold text-uppercase text-white">
											See our Work
										</h1>
										<p className="lead fs-5 py-3">
											We have
											<strong className="fw-bold">{" decades "}</strong>
											of experience in the commercial development industry
										</p>
										<Link
											className="hero-btn btn-primary fs-6 mt-3 text-white"
											to="/projects"
										>
											<span className="d-flex align-items-center text-white">
												Browse Gallery <FaChevronRight className="ms-2" />
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Welcome & lead --> */}
			<article className="row">
				<section className="container p-5 bg-white">
					<div className="welcome sections mx-0">
						<header className="d-flex pb-5 justify-content-center">
							<div className="text-center">
								<h2 className="display-5 fw-bold text-primary-alt">
									TCA Developments
								</h2>
								<small className="text-uppercase text-dark fw-bold">
									General Construction{" "}
									<span className="text-primary-alt">& </span>commercial
									renovations
								</small>
							</div>
						</header>
						<section className="row mx-0 d-flex justify-content-center text-center">
							<p className="lead lh-base">
								TCA Developments specializes in commercial renovations. We are
								committed to producing quality facilities that are on time,
								under budget, and will exceed your expectations!
							</p>
							<section className="row mx-0 pt-5 text-center">
								<header className="py-2">
									<h3 className="text-body fw-bold">Our Satisfied Clients</h3>
								</header>
								<p className="text-body">
									We are honoured to have worked with a variety of companies
									over the years.
								</p>
								{/* Client list */}
								<div className="col py-2 clients-list w-100 fs-5">
									<ul>
										{clientList.map(({ name }, index) => (
											<li key={index}>{name}</li>
										))}
									</ul>
								</div>
								<ul id="output"></ul>
							</section>
						</section>
					</div>
				</section>
			</article>
			{/* <!-- Services --> */}
			<article className="row">
				<section className="container mx-0 px-0 py-5 bg-light">
					<div className="sections">
						<header
							className="
									d-flex
									pb-4
									justify-content-center justify-content-md-between
									align-items-end
								"
						>
							<div className="ms-4 text-center text-md-left">
								<small className="text-uppercase text-dark fw-bold">
									What we do best
								</small>
								<h2 className="display-5 fw-bold text-primary-alt">
									Our Services
								</h2>
							</div>
						</header>
						<div className="row w-100 px-2">
							<p className="text-body fs-5 ms-4">
								Are you looking to
								<strong className="text-primary-alt fw-bold">
									{" upgrade "}
								</strong>
								your property?
							</p>
							<p className="text-body lh-base fs-5 ms-4">
								We have craftsmen from every trade who are ready to serve.
								Whether you need a do-it-all general contractor or expert
								project management advice, TCA Developments has the solution.
							</p>
							<p className="text-body lh-base fs-5 ms-4 mt-2">
								Click on a card to learn about a specific service. Or tap the
								button to view all of our solutions.
							</p>
						</div>
						<ServiceCards />
					</div>
					<div className="row pt-2">
						<div className="col justify-content-center text-center">
							<HashLink
								className="btn btn-primary text-white mt-3 text-uppercase"
								to="/services#top"
								role="button"
							>
								<span className="d-flex align-items-center">
									View our services <FaChevronRight className="ms-2" />
								</span>
							</HashLink>
						</div>
					</div>
				</section>
			</article>
			{/* <!-- Projects --> */}
			<section className="row">
				<article className="container py-5 bg-white w-100">
					<div className="sections">
						<div className="row g-3 w-100 px-2">
							<header
								className="
										d-flex
										pb-3
										justify-content-center justify-content-md-between
										align-items-end
									"
							>
								<div className="text-center text-md-left ms-4">
									<small className="text-uppercase text-dark fw-bold">
										Our latest work
									</small>
									<h2 className="display-5 fw-bold text-primary-alt">
										Project Spotlight
									</h2>
								</div>
							</header>
							<div className="col-12 px-2 mb-4">
								<p className="lh-base fs-5">
									These projects exemplify the quality of work that TCA
									Developments is known for. When you work with us, your
									building is in excellent hands.
								</p>
							</div>
							<div
								className="
										row row-cols-md-2 row-cols-lg-4
										justify-content-center
										justify-content-lg-start
										text-center
										align-items-center
										g-2
									"
								id="featuredProjects"
							>
								<FeaturedProjects />
							</div>
							<div className="row pt-4">
								<div className="col justify-content-center text-center">
									<HashLink
										className="btn btn-primary mt-3 text-uppercase"
										to="/projects#top"
										role="button"
									>
										<span className="d-flex align-items-center">
											Browse gallery <FaChevronRight className="ms-2" />
										</span>
									</HashLink>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
			{/* <!-- Contact --> */}
			<article className="row py-5 bg-secondary-tca w-100 mx-0">
				<div
					className="
							container
							justify-content-center
							align-items-center
							text-center
							w-100
							mx-0
						"
				>
					<header>
						<h4 className="h3 text-light">Choose the right course</h4>
						<p className="text-white fst-italic">We answer within 24 hours</p>
					</header>
					<ContactForm />
				</div>
			</article>
		</main>
	);
}

export default Home;
