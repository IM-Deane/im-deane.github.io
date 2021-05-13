import React from "react";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// import Gallery from "./Gallery";
import Template from "./pages/Template";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

function App() {
	return (
		<div className="wrapper w-100">
			<Router>
				<header className="row w-100">
					<div
						className="navbar nav-banner navbar-expand-lg w-100"
						aria-label="Secondary navigation"
					>
						<div className="container">
							<span className="ps-2">
								Celebrating 30 years of Canadian business!
								<img
									id="leaf"
									src="./assets/maple-leaf.png"
									alt="Canadian maple leaf"
								/>
							</span>
							<div className="d-none d-md-flex align-items-baseline">
								<a href="tel:(825) 401-2404" className="btn btn-sm text-white">
									<span className="mx-1 text-center vertical">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
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
									825-401-2404
								</a>
							</div>
						</div>
					</div>
					<nav
						className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
						aria-label="Main navigation"
					>
						{/* <!-- Center container items on lg+ screens --> */}
						<div className="container-fluid container-lg justify-content-lg-center">
							<Link className="navbar-brand" to="/">
								<img
									src="./assets/tca-logo.png"
									className="img-fluid logo"
									alt="TCA Developments company logo"
								/>
							</Link>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarCollapse"
								aria-controls="navbarCollapse"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div
								className="collapse navbar-collapse justify-content-lg-end"
								id="navbarCollapse"
							>
								<div className="navbar-nav mr-auto mb-2 mb-lg-0 align-items-baseline">
									<Link className="nav-link text-uppercase" to="/">
										Home
									</Link>
									<Link className="nav-link text-uppercase" to="/about">
										About us
									</Link>
									<Link className="nav-link text-uppercase" to="/projects">
										Projects
									</Link>
									<Link className="nav-link text-uppercase" to="/services">
										Services
									</Link>
									<Link className="nav-link text-uppercase" to="/contact">
										Contact Us
									</Link>
									<span className="ms-3 d-none d-lg-inline-block">
										<HashLink
											smooth
											to="/contact#contactForm"
											className="btn btn-danger btn-sm text-uppercase"
										>
											Get Started
										</HashLink>
									</span>
								</div>
							</div>
						</div>
					</nav>
				</header>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/services">
						<Services />
					</Route>
					{/* <Route path="/gallery">
						<Gallery />
					</Route> */}
					<Route exact path="/projects">
						<Projects />
					</Route>
					<Route path="project">
						<Template />
					</Route>
					<Route path="/contact#contactForm">
						<Contact />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					{/* Handle Individual Routes */}
					<Route exact path="/projects/:id" childern={<Template />}>
						<Template />
					</Route>
					<Route eaxct path="/home/:id" childern={<Template />}>
						<Template />
					</Route>
					<Route exact path="/services/:id" childern={<Template />}>
						<Template />
					</Route>
					<Route path="*">
						<Error />
					</Route>
				</Switch>
				{/* <!-- Hidden on 450px screens and up --> */}
				<nav
					className="mobile-nav navbar-expand d-md-none fixed-bottom w-100 mx-0"
					aria-label="Tertiary navigation"
				>
					<div
						className="
						btn-group btn-group-lg
						w-100
						h-100
						d-flex
						justify-content-evenly
					"
						role="group"
						aria-label="Mobile navigation bar"
					>
						<div
							className="
							w-100
							d-flex
							align-items-baseline
							justify-content-evenly
							py-2
						"
						>
							{/* <!-- Phone --> */}
							<div className="flex-column align-items-center justify-content-center">
								<button type="button" className="btn d-flex px-0 w-100">
									<a href="tel:(825) 401-2404" className="flex-fill text-white">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											className="bi bi-telephone-fill"
											viewBox="0 0 16 16"
										>
											<path
												fillRule="evenodd"
												d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
											/>
										</svg>
									</a>
								</button>
								<small className="text-uppercase">Call</small>
							</div>
							{/* <!-- Email --> */}
							<div className="flex-column align-items-center justify-content-center px-4">
								<button
									type="button"
									className="btn btn-tertiary-tca d-flex px-0 w-100"
								>
									<a
										href="mailto:info@tcadevelopments.com?subject=General Inquiry"
										className="flex-fill text-white"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											className="bi bi-envelope-fill"
											viewBox="0 0 16 16"
										>
											<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
										</svg>
									</a>
								</button>
								<small className="text-uppercase">Mail</small>
							</div>
							{/* <!-- Quote --> */}
							<div className="flex-column align-items-center justify-content-center">
								<button
									type="button"
									className="btn btn-tertiary-tca d-flex px-0 w-100"
								>
									{/* <a
										href="./contact.html#contact-form"
										className="flex-fill text-white"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											className="bi bi-pencil-square"
											viewBox="0 0 16 16"
										>
											<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
											<path
												fillRule="evenodd"
												d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
											/>
										</svg>
									</a> */}
									<HashLink
										smooth
										to="/contact#contactForm"
										className="flex-fill text-white"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											className="bi bi-pencil-square"
											viewBox="0 0 16 16"
										>
											<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
											<path
												fillRule="evenodd"
												d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
											/>
										</svg>
									</HashLink>
								</button>
								<small className="text-uppercase">Quote</small>
							</div>
						</div>
					</div>
				</nav>
				<div className="row m-0 w-100">
					<footer className="footer py-5 m-0 text-center navbar-light bg-primary-alt w-100">
						<section className="row w-100 mb-4">
							<div className="col w-25">
								<HashLink
									smooth
									to="#top"
									className="text-accent-blue-tca text-decoration-none text-uppercase"
								>
									Back to the top
								</HashLink>
							</div>
						</section>
						<section className="row row-cols-md-2 row-cols-sm-auto mb-3 ps-3">
							<div className="col">
								<h5 className="pb-2 text-white-tca">TCA DEVELOPMENTS LTD</h5>
								<p className="ft ft-phone">
									<a className="link-accent-blue-tca" href="tel:(825) 401-2404">
										825-401-2404
									</a>
								</p>
								<p className="ft ft-email">
									<a
										href="mailto:info@tcadevelopments.com?subject=General Inquiry"
										className="link-light text-accent-blue-tca"
									>
										info@tcadevelopments.com
									</a>
								</p>
								<div className="row pt-3">
									<p className="text-light">16065 132 Ave NW</p>
									<p className="text-light">Edmonton AB T5V 1H8</p>
								</div>
							</div>
							<div className="col">
								<h5 className="text-white-tca pb-2">CONNECT WITH US</h5>
								<a href="#instagram">
									<i className="fab fa-instagram-square social"></i>
								</a>
								<a href="#facebook">
									<i className="fab fa-facebook-square social mx-2"></i>
								</a>
								<a href="#twitter">
									<i className="fab fa-twitter-square social"></i>
								</a>
							</div>
						</section>
						<section className="justify-content-center pb-3 w-100">
							<div className="container pt-2">
								<hr className="text-white" />
								<p className="text-accent-tca py-3">
									&copy; 2021 TCA Developments Ltd |
									<a
										className="alchemized text-white ms-1"
										href="http://alchemizedsoftware.com/"
									>
										Crafted by Alchemized Software
										<i className="fa fa-fire text-accent-blue-tca ms-1"></i>
									</a>
								</p>
							</div>
						</section>
					</footer>
				</div>
			</Router>
		</div>
	);
}

export default App;
