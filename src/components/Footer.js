import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Icons
import {
	FaFire,
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
	FaGooglePlusSquare,
} from "react-icons/fa";
import { MdRateReview } from "react-icons/md";

function Footer() {
	const location = useLocation();
	// Hide footer on reviews path
	return location.pathname === "/reviews" ? null : (
		<div className="row m-0 w-100">
			<footer className="footer py-5 m-0 text-center navbar-light bg-primary-alt w-100">
				<section className="row w-100 mb-4">
					<div className="col w-25">
						<HashLink
							smooth
							to="#top"
							className="text-white text-decoration-none text-uppercase"
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
						{/* Google Review */}
						<a
							href="https://g.page/r/CZxhm26y8EAzEAg/review"
							className="link-light text-accent-blue-tca"
							target="_blank"
							rel="noreferrer"
							aria-label="Review form for TCA Development's Google Business profile."
						>
							<MdRateReview className="text-white me-2 fs-4" />
							Leave us a review
						</a>
					</div>
					<div className="col">
						<h5 className="text-white-tca pb-2">CONNECT WITH US</h5>
						<a
							href="https://www.instagram.com/tcadevelopments/"
							target="_blank"
							rel="noreferrer"
							aria-label="The Instagram account for TCA Developments."
						>
							<FaInstagramSquare className="social" />
						</a>
						<a
							href="https://g.page/r/CZxhm26y8EAzEAE"
							target="_blank"
							rel="noreferrer"
							aria-label="Google Business profile for TCA Developments."
						>
							<FaGooglePlusSquare className="social ms-2" />
						</a>
						<a
							href="#facebook"
							aria-label="The Facebook account for TCA Developments."
						>
							<FaFacebookSquare className="social mx-2" />
						</a>
						<a
							href="#twitter"
							aria-label="The Twitter account for TCA Developments."
						>
							<FaTwitterSquare className="social" />
						</a>
					</div>
				</section>
				<section className="justify-content-center pb-3 w-100">
					<div className="container pt-2">
						<hr className="text-white" />
						<p className="text-accent-tca py-3 d-flex justify-content-center align-items-center">
							&copy; 2021 TCA Developments & Consultants Ltd |
							<a
								className="alchemized text-white ms-1"
								href="http://alchemizedsoftware.com/"
								aria-label="Links to the website for Alchemized Software."
							>
								<span className="d-flex align-items-center">
									Crafted by Alchemized Software
									<FaFire className="text-accent-blue-tca ms-1" />
								</span>
							</a>
						</p>
					</div>
				</section>
			</footer>
		</div>
	);
}

export default Footer;
