import * as Images from "./Images";
// Project Data

/* Categories:
 * 0. Interior
 * 1. Services
 * 2. Exterior
 */

const ProjectData = [
	{
		id: 0,
		name: "Skyview Dental",
		consultant: "Skyview Dental",
		date: "Sept 01, 2019",
		location: "13625 St NW, Edmonton, AB T5V 0B5, Canada",
		description: "Skyview Dental Clinic.",
		images: [...Images.skyview.images],
		thumbnail: Images.findThumbnail(Images.skyview.images[0]),
		contract: "Stipulated Price",
		category: 0,
		isFeatured: true,
	},

	{
		id: 2,
		name: "Structube",
		consultant: "Bentall Green Oak",
		date: "April 19, 2021",
		location: "1005 Eby Road, Edmonton, AB T6X 2N9, Canada",
		description: "Structube project.",
		images: [...Images.structube.images],
		thumbnail: Images.findThumbnail(Images.structube.images[1]),
		contract: "Stipulated Price",
		category: 0,
		isFeatured: true,
	},
	{
		id: 3,
		name: "Trane Supply",
		consultant: null,
		date: "Sept 03, 2019",
		location: "15316 111 Ave NW, Edmonton, AB T5M 4C8, Canada",
		description: "Trane Supply project.",
		images: [...Images.traneSupply.images],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
	{
		id: 4,
		name: "Finning Cat",
		consultant: null,
		date: "Aug 15, 2019",
		location: "10910 170 St NW, Edmonton, AB T5S 1H6, Canada",
		description:
			"TCA Developments provided HVAC services for Finning Cat Canada.",
		images: [...Images.finning.images],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
	{
		id: 5,
		name: "Goodwill",
		consultant: "CBRE & Totem Business Group",
		date: "April 01, 2021",
		location: "730 St-Albert Trail, St. Albert AB T8N 7H5, Canada",
		description: "Goodwill Project",
		images: [...Images.goodwill.images],
		thumbnail: Images.findThumbnail(Images.goodwill.images[2]),
		contract: "Stipulated Price",
		category: 0,
		isFeatured: true,
	},
	{
		id: 7,
		name: "Huntswood Cabinets",
		consultant: "Bentall Green Oak",
		date: "In Progress",
		location: "5120 75 St NW, Edmonton, AB T6E 6W2, Canada",
		description:
			"TCA Developments completed warehouse renovations for Huntswood Custom Cabinets. The project included drywall, mudding, and exterior services.",
		images: [...Images.huntswood.images],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
	{
		id: 8,
		name: "Bonaventure Building",
		consultant: "Blackwood Partners",
		date: "Oct 01, 2015",
		location: "5404 Bonaventure Ave NW, Edmonton, AB Canada",
		description:
			"TCA Developments completed interior and exterior services for 149 St.",
		images: [...Images.bonaventure.images],
		thumbnail: Images.findThumbnail(Images.bonaventure.images[4]),
		contract: "Stipulated Price",
		category: 2,
		isFeatured: false,
	},
	// Ramps Services
	{
		id: 9,
		name: "Ramp Services",
		description:
			"TCA Developments can erect ramps of various types and sizes. Please contact us for an estimate.",
		images: [...Images.ramps.images],
		thumbnail: "",
		category: 1,
		isFeatured: true,
	},
	// Commercial Doors
	{
		id: 10,
		name: "Commercial Door Services",
		description:
			"TCA Developments can install commercial doors of various types and sizes. Please contact us for an estimate.",
		images: [...Images.commercialDoors.images],
		thumbnail: "",
		category: 1,
		isFeatured: false,
	},
	// Masonry Services
	{
		id: 11,
		name: "Masonry Services",
		description:
			"TCA Developments can perform a variety of masonry services. Please contact us for an estimate.",
		images: [...Images.masonry.images],
		thumbnail: Images.findThumbnail(Images.masonry.images[1]),
		category: 1,
		isFeatured: false,
	},
	// Window Services
	{
		id: 12,
		name: "Window Services",
		description:
			"TCA Developments can install windows for properties of all types. Please contact us for an estimate.",
		images: [...Images.windows.images],
		thumbnail: "",
		category: 1,
		isFeatured: false,
	},
	{
		id: 13,
		name: "Scotia Place - Bike Room",
		consultant: "Morguard",
		date: "Sept 27, 2013",
		location: "10060 Jasper Avenue Suite 1100, Edmonton, AB Canada",
		description:
			"TCA Developments designed and built the Scotia Place bike room in Edmonton Alberta.",
		images: [...Images.SPBikeroom.images],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
	{
		id: 1,
		name: "Xtreme",
		consultant: "Bentall Green Oak",
		date: "May 21, 2020",
		location: "1005 Eby Road, Edmonton, AB T6X 2N9, Canada",
		description: "Xtreme project.",
		images: [...Images.xtreme.images],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
	{
		id: 6,
		name: "Scotia Place - 26th floor",
		consultant: "Morguard",
		date: "Sept 27, 2013",
		location: "10060 Jasper Avenue Suite 1100, Edmonton, AB Canada",
		description:
			"TCA Developments remodeled the 26th floor of the Scotia Place building in Edmonton Alberta.",
		images: [...Images.scotiaPlace.images],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
];

export default ProjectData;
