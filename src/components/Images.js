/*
 * This module imports all the images from the img directory,
 * parses the resulting object into various projects, and then
 * exports the resulting array of strings as a module.
 *
 */

// Import all images from specified diretory
export function importAll(r) {
	return r.keys().map(r);
}

export function parseObject(object) {
	return object.map((obj) => obj.default.toString());
}

// Find main thumbnail
export const findThumbnail = (string) => {
	// "/static/media/main.0c9ef875.jpg";

	if (string.search("/main.")) {
		return string;
	} else {
		return "";
	}
};

// Save images into variables
// const images = importAll(
// 	require.context("./projects", true, /\.(png|jpe?g|svg)$/)
// );
export const bonaventure = {
	images: parseObject(
		importAll(
			require.context("./projects/bonaventure", false, /\.(png|jpe?g|svg)$/)
		)
	),
	thumbnail: null,
};
// export const exterior = {
// 	images: parseObject(
// 		importAll(
// 			require.context("./projects/exterior", true, /\.(png|jpe?g|svg)$/)
// 		)
// 	),
// };
export const finning = {
	images: parseObject(
		importAll(
			require.context("./projects/finning", false, /\.(png|jpe?g|svg)$/)
		)
	),
};
export const goodwill = {
	images: parseObject(
		importAll(
			require.context("./projects/goodwill", false, /\.(png|jpe?g|svg)$/)
		)
	),
};
export const huntswood = {
	images: parseObject(
		importAll(
			require.context("./projects/huntswood", false, /\.(png|jpe?g|svg)$/)
		)
	),
};
export const scotiaPlace = {
	images: parseObject(
		importAll(
			require.context("./projects/scotia-place", false, /\.(png|jpe?g|svg)$/)
		)
	),
};
export const SPBikeroom = {
	images: parseObject(
		importAll(
			require.context(
				"./projects/scotia-place/scotia-place-bikeroom",
				false,
				/\.(png|jpe?g|svg)$/
			)
		)
	),
};
export const services = {
	images: parseObject(
		importAll(
			require.context("./projects/services", false, /\.(png|jpe?g|svg)$/)
		)
	),
};
export const skyview = {
	images: parseObject(
		importAll(
			require.context("./projects/skyview", false, /\.(png|jpe?g|svg)$/)
		)
	),
};
export const structube = {
	images: parseObject(
		importAll(
			require.context("./projects/structube", false, /\.(png|jpe?g|svg)$/)
		)
	),
};
export const traneSupply = {
	images: parseObject(
		importAll(
			require.context("./projects/tranesupply", false, /\.(png|jpe?g|svg)$/)
		)
	),
};
export const xtreme = {
	images: parseObject(
		importAll(require.context("./projects/xtreme", false, /\.(png|jpe?g|svg)$/))
	),
};

// SERVICES images
export const commercialDoors = {
	images: parseObject(
		importAll(
			require.context(
				"./projects/exterior/commercial-doors",
				false,
				/\.(png|jpe?g|svg)$/
			)
		)
	),
};
export const masonry = {
	images: parseObject(
		importAll(
			require.context(
				"./projects/exterior/masonry",
				false,
				/\.(png|jpe?g|svg)$/
			)
		)
	),
};
export const ramps = {
	images: parseObject(
		importAll(
			require.context("./projects/exterior/ramps", false, /\.(png|jpe?g|svg)$/)
		)
	),
};
export const windows = {
	images: parseObject(
		importAll(
			require.context(
				"./projects/exterior/windows",
				false,
				/\.(png|jpe?g|svg)$/
			)
		)
	),
};
