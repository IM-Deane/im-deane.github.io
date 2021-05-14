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
	//skyview = skyview.map((obj) => obj.default.toString());
}

// Find main thumbnail
const findThumbnail = (string) => {
    const reg

    return string === "main.jpg";
}

// Save images into variables
const images = importAll(
	require.context("./projects", true, /\.(png|jpe?g|svg)$/)
);
export const oneFourNineSt = parseObject(
	importAll(require.context("./projects/149st", false, /\.(png|jpe?g|svg)$/))
);
export const exterior = parseObject(
	importAll(require.context("./projects/exterior", true, /\.(png|jpe?g|svg)$/))
);
export const finning = parseObject(
	importAll(require.context("./projects/finning", false, /\.(png|jpe?g|svg)$/))
);
export const goodwill = parseObject(
	importAll(require.context("./projects/goodwill", false, /\.(png|jpe?g|svg)$/))
);
export const huntswood = parseObject(
	importAll(
		require.context("./projects/huntswood", false, /\.(png|jpe?g|svg)$/)
	)
);
export const scotiaPlace = parseObject(
	importAll(
		require.context("./projects/scotia-place", true, /\.(png|jpe?g|svg)$/)
	)
);
export const services = parseObject(
	importAll(require.context("./projects/services", false, /\.(png|jpe?g|svg)$/))
);
export const skyview = parseObject(
	importAll(require.context("./projects/skyview", false, /\.(png|jpe?g|svg)$/))
);
export const structube = parseObject(
	importAll(
		require.context("./projects/structube", false, /\.(png|jpe?g|svg)$/)
	)
);
export const traneSupply = parseObject(
	importAll(
		require.context("./projects/tranesupply", false, /\.(png|jpe?g|svg)$/)
	)
);
export const xtreme = parseObject(
	importAll(require.context("./projects/xtreme", false, /\.(png|jpe?g|svg)$/))
);

console.log(skyview);
console.log(findThumbnail(skyview));

// const strings = images.map((obj) => obj.default.toString());

// console.log(strings);

// const fin = strings.filter((string) => {
//     const pattern = new RegExp("/")
// })

// console.log(skyview.findIndex(()));
// export  images;
