import React from "react";
import { HashLink } from "react-router-hash-link";
import LazyLoad from "react-lazyload";

// Image module
import { importAll, parseObject } from "./Images";

// Import and parse service photos
const serviceImgs = {
	nextGen: parseObject(
		importAll(
			require.context(
				"../imgs/services-cards/nextgen",
				false,
				/\.(webp|jxr|jpx)$/
			)
		)
	),
	legacy: parseObject(
		importAll(
			require.context(
				"../imgs/services-cards/legacy",
				false,
				/\.(png|jpe?g|svg)$/
			)
		)
	),
};

function ServiceCards() {
	return (
		<div className="row mx-0" id="custom-cards">
			<div className="row align-items-stretch mx-auto py-5">
				{/* <!-- General Contractor --> */}
				<div className="col-sm mt-2 pe-md-0">
					<LazyLoad height={200} offset={100} once>
						<div
							className="
												card card-cover
												image-container
												h-100
												bg-dark
												rounded-5
												shadow-lg
                                                service-card
											"
							style={{
								background: `url(${serviceImgs.legacy[1]}) center`,
								backgroundSize: "cover",
							}}
						>
							<HashLink to="/services#top">
								<div
									className="
														card-text-box
														d-flex
														flex-column
														text-center
														h-100
														pb-3
														text-white text-shadow-1
													"
								>
									<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
										General Contracting
									</h3>
								</div>
							</HashLink>
						</div>
					</LazyLoad>
				</div>

				<div className="col-sm mt-2">
					<LazyLoad height={200} offset={100} once>
						<div
							className="
												card card-cover
												image-container
												h-100
												text-white
												bg-dark
												rounded-5
												shadow-lg
                                                service-card
											"
							style={{
								background: `url(${serviceImgs.legacy[3]}) center no-repeat`,
								backgroundSize: "cover",
							}}
						>
							<HashLink to="/services#officeSection">
								<div
									className="
														d-flex
														flex-column
														h-100
														pb-3
														text-center text-white text-shadow-1
													"
								>
									<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
										Office Renovations
									</h3>
								</div>
							</HashLink>
						</div>
					</LazyLoad>
				</div>
				{/* <!-- Electrical --> */}
				<div className="col-sm mt-2 ps-md-0">
					<LazyLoad height={200} offset={100} once>
						<div
							className="
												card card-cover
												image-container
												h-100
												text-white
												bg-dark
												rounded-5
												shadow-lg
                                                service-card
											"
							style={{
								background: `url(${serviceImgs.legacy[2]}) center`,
							}}
						>
							<HashLink to="/services#electricalSection">
								<div
									className="
														d-flex
														flex-column
														h-100
														pb-3
														text-white text-center text-shadow-1
													"
								>
									<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
										Electrical Services
									</h3>
								</div>
							</HashLink>
						</div>
					</LazyLoad>
				</div>
				{/* <!-- Mechanical --> */}
				<div className="col-sm mt-2 ps-md-0">
					<LazyLoad height={200} offset={100} once>
						<div
							className="
												card card-cover
												image-container
												h-100
												text-white
												bg-dark
												rounded-5
												shadow-lg
                                                service-card
											"
							style={{
								background: `url(${serviceImgs.nextGen[3]}) no-repeat center left`,
								backgroundSize: "cover",
							}}
						>
							<HashLink to="/services#hvacSection">
								<div
									className="
														d-flex
														flex-column
														h-100
														pb-3
														text-white text-center text-shadow-1
													"
								>
									<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
										Mechanical & Plumbing
									</h3>
								</div>
							</HashLink>
						</div>
					</LazyLoad>
				</div>
				{/* <!-- Concrete --> */}
				<div className="col-sm mt-2 ps-md-0">
					<LazyLoad height={200} offset={100} once>
						<div
							className="
												card card-cover
												image-container
												h-100
												text-white
												bg-dark
												rounded-5
												shadow-lg
                                                service-card
											"
							style={{
								background: `url(${serviceImgs.legacy[0]}) center no-repeat`,
							}}
						>
							<HashLink to="/services#concreteSection">
								<div
									className="
														d-flex
														flex-column
														h-100
														pb-3
														text-white text-center text-shadow-1
													"
								>
									<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
										Concrete Services
									</h3>
								</div>
							</HashLink>
						</div>
					</LazyLoad>
				</div>
				<div className="col-auto w-100 mt-2">
					<div
						id="customService"
						className="
												card card-cover
												image-container
												text-white
												bg-dark
												rounded-5
												shadow-lg
                                                service-card
											"
						style={{
							background: `url(${serviceImgs.nextGen[3]}) no-repeat center`,
							backgroundSize: "cover",
						}}
					>
						<HashLink to="/services#customSection">
							<div
								className="
														d-flex
														flex-column
														h-100
														pb-3
														text-white text-center text-shadow-1
													"
							>
								<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
									Customized Solutions
								</h3>
							</div>
						</HashLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServiceCards;
