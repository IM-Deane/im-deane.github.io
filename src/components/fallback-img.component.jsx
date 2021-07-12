import React from "react";

// Create an iamge component
const ImgWithFallback = ({
	src,
	fallback,
	type = "image/webp",
	...delegated
}) => {
	return (
		<picture>
			<source className="img-fluid" srcSet={src} type={type} />
			<img className="img-fluid" src={fallback} {...delegated} />
		</picture>
	);
};

export default ImgWithFallback;
