import React from "react";
import { HashLink } from "react-router-hash-link";
import {
	FaFire,
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
	return (
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
							<FaInstagramSquare className="social" />
						</a>
						<a href="#facebook">
							<FaFacebookSquare className="social mx-2" />
						</a>
						<a href="#twitter">
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
