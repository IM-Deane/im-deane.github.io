import React from "react";
import { HashLink } from "react-router-hash-link";

// NOTE: This component is a separate nav bar that only shows up on mobile/smaller devices

function MobileNav() {
	return (
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
	);
}

export default MobileNav;
