import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaChevronRight } from "react-icons/fa";

const RequestEstimate = () => {
	return (
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
					className="btn btn-outline-light text-uppercase"
				>
					<span className="d-flex align-items-center">
						Request an estimate <FaChevronRight className="ms-2" />
					</span>
				</HashLink>
			</div>
		</article>
	);
};

export default RequestEstimate;
