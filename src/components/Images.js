/*
 * This module imports all the images from the img directory,
 * parses the resulting object into various projects, and then
 * exports the resulting array of strings as a module.
 *
 */

// Import all images from specified diretory
function importAll(r) {
	return r.keys().map(r);
}

function parseObject(object) {
	return object.map((obj) => obj.default.toString());
}

// Find main thumbnail
export const findThumbnail = (string) => {
	// "/static/media/main.0c9ef875.jpg";
	console.log(string);

	if (string.search("/main.")) {
		return string;
	} else {
		return "";
	}
};

// Save images into variables
const images = importAll(
	require.context("./projects", true, /\.(png|jpe?g|svg)$/)
);
export const bonaventure = {
	images: parseObject(
		importAll(
			require.context("./projects/bonaventure", false, /\.(png|jpe?g|svg)$/)
		)
	),
	thumbnail: null,
};
export const exterior = {
	images: parseObject(
		importAll(
			require.context("./projects/exterior", true, /\.(png|jpe?g|svg)$/)
		)
	),
};
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
			require.context("./projects/scotia-place", true, /\.(png|jpe?g|svg)$/)
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

// console.log(findThumbnail(skyview.images[0]));

// console.log(bonaventure.thumbnail);

// const strings = images.map((obj) => obj.default.toString());

// console.log(strings);

// const fin = strings.filter((string) => {
//     const pattern = new RegExp("/")
// })

// console.log(skyview.findIndex(()));
// export  images;
