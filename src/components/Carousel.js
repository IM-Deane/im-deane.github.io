import React from "react";
import ImageWithFallback from "./ImgWithFallback";

const Carousel = ({ imgList, indicatorId }) => {
	return (
		<div id={indicatorId} className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				{imgList.map((obj, index) => {
					return (
						<button
							key={`btn-${index}`}
							type="button"
							data-bs-target={`#${indicatorId}`}
							data-bs-slide-to={`${index}`}
							className={`${index === 0 ? "active" : ""}`}
							aria-label={`${index + 1}`}
						></button>
					);
				})}
			</div>

			<div className="carousel-inner">
				{imgList.map((obj, index) => {
					const { primarySrc, fallbackSrc, type, alt } = obj;
					return (
						<div
							key={`carousel-item-${index + 1}`}
							className={`carousel-item ${
								index === 0 ? "active" : ""
							} border-0`}
						>
							<ImageWithFallback
								src={primarySrc}
								fallback={fallbackSrc}
								type={type}
								alt={alt}
							/>
						</div>
					);
				})}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target={`#${indicatorId}`}
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target={`#${indicatorId}`}
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Carousel;
