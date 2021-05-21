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
			<source srcSet={src} type={type} />
			<img src={fallback} {...delegated} />
		</picture>
	);
};

export default ImgWithFallback;
