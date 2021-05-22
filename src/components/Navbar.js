import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, NavLink } from "react-router-dom";

import { FaCanadianMapleLeaf } from "react-icons/fa";

function Navbar() {
	const [isCollapsed, setIsCollapsed] = useState(true);

	return (
		<header className="row w-100">
			<div
				className="navbar nav-banner navbar-expand-lg w-100"
				aria-label="Secondary navigation"
			>
				<div className="container">
					<span className="ps-2">
						Celebrating 30 years of Canadian business!{" "}
						<FaCanadianMapleLeaf style={{ color: "red" }} />
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
							src="/tca-logo.png"
							className="logo"
							alt="TCA Developments company logo"
						/>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						// data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded={isCollapsed ? false : true}
						aria-label="Toggle navigation"
						onClick={() => setIsCollapsed(!isCollapsed)}
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className={`${
							isCollapsed ? "collapse" : ""
						} navbar-collapse justify-content-lg-end`}
						id="navbarCollapse"
					>
						<div className="navbar-nav mr-auto mb-2 mb-lg-0 pb-2 align-items-baseline">
							<NavLink
								onClick={() => setIsCollapsed(!isCollapsed)}
								className="nav-link text-uppercase"
								activeClassName="active"
								exact
								to="/"
							>
								Home
							</NavLink>
							<NavLink
								onClick={() => setIsCollapsed(!isCollapsed)}
								className="nav-link text-uppercase"
								activeClassName="active"
								to="/about"
							>
								About us
							</NavLink>
							<NavLink
								onClick={() => setIsCollapsed(!isCollapsed)}
								className="nav-link text-uppercase"
								activeClassName="active"
								to="/projects"
							>
								Projects
							</NavLink>
							<NavLink
								onClick={() => setIsCollapsed(!isCollapsed)}
								className="nav-link text-uppercase"
								activeClassName="active"
								to="/services"
							>
								Services
							</NavLink>
							<NavLink
								onClick={() => setIsCollapsed(!isCollapsed)}
								className="nav-link text-uppercase"
								activeClassName="active"
								to="/contact"
							>
								Contact Us
							</NavLink>
							<span className="ms-3 d-none d-lg-inline-block">
								<HashLink
									onClick={() => setIsCollapsed(!isCollapsed)}
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
	);
}

export default Navbar;
