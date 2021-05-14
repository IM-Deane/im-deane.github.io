import * as Images from "./Images";
// Project Data
const ProjectData = [
	{
		id: 0,
		name: "Skyview Dental",
		date: "September 01, 2019",
		location: "13625 St NW, Edmonton, AB T5V 0B5, Canada",
		description: "Skyview Dental Clinic.",
		images: [...Images.skyview],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: true,
	},
	{
		id: 1,
		name: "Xtreme",
		date: "August 01, 2019",
		location: "Edmonton, AB",
		description: "Xtreme project.",
		images: [...Images.xtreme],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
	{
		id: 2,
		name: "Structube",
		date: "April 01, 2021",
		location: "Edmonton, AB",
		description: "Structube project.",
		images: [...Images.structube],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: true,
	},
	{
		id: 3,
		name: "Trane Supply",
		date: "September 03, 2019",
		location: "15316 111 Ave NW, Edmonton, AB T5M 4C8, Canada",
		description: "Trane Supply project.",
		images: [...Images.traneSupply],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
	{
		id: 4,
		name: "Finning Cat",
		date: "August 15, 2019",
		location: "10910 170 St NW, Edmonton, AB T5S 1H6, Canada",
		description:
			"TCA Developments provided HVAC services for Finning Cat Canada.",
		images: [...Images.finning],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 2,
		isFeatured: false,
	},
	{
		id: 5,
		name: "Goodwill",
		date: "06/22/2021",
		location: "Edmonton, AB",
		description: "Goodwill Project",
		images: [...Images.goodwill],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: true,
	},
	{
		id: 6,
		name: "Scotia Place - 26th floor",
		date: "09/27/2013",
		location: "10060 Jasper Avenue Suite 1100, Edmonton, AB Canada",
		description:
			"TCA Developments remodeled the 26th floor of the Scotia Place building in Edmonton Alberta.",
		images: [...Images.scotiaPlace],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
	{
		id: 7,
		name: "Huntswood Cabinets",
		date: "May 01, 2020",
		location: "5120 75 St NW, Edmonton, AB T6E 6W2, Canada",
		description:
			"TCA Developments completed warehouse renovations for Huntswood Custom Cabinets. The project included drywall, mudding, and exterior services.",
		images: [...Images.huntswood],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
	{
		id: 8,
		name: "149 St",
		date: "May 01, 2020",
		location: "Edmonton, AB Canada",
		description:
			"TCA Developments completed interior and exterior services for 149 St.",
		images: [...Images.oneFourNineSt],
		thumbnail: "",
		contract: "Stipulated Price",
		category: 0,
		isFeatured: false,
	},
	// Ramps Services
	{
		id: 9,
		name: "Ramp Services",
		description:
			"TCA Developments can erect ramps of various types and sizes. Please contact us for an estimate.",
		images: [...Images.exterior],
		thumbnail: "",
		category: 2,
		isFeatured: true,
	},
	// Commercial Doors
	{
		id: 10,
		name: "Commercial Door Services",
		description:
			"TCA Developments can install commercial doors of various types and sizes. Please contact us for an estimate.",
		images: [
			"../src/imgs/projects/exterior/commercial-doors/commercial-door.jpg",
		],
		thumbnail: "",
		category: 2,
		isFeatured: false,
	},
	// Masonry Services
	{
		id: 11,
		name: "Masonry Services",
		description:
			"TCA Developments can perform a variety of masonry services. Please contact us for an estimate.",
		images: [
			"../src/imgs/projects/exterior/masonry/masonry-main.jpg",
			"../src/imgs/projects/exterior/masonry/masonry-anytime-fitness.jpg",
		],
		thumbnail: "",
		category: 1,
		isFeatured: false,
	},
	// Window Services
	{
		id: 12,
		name: "Window Services",
		description:
			"TCA Developments can install windows for properties of all types. Please contact us for an estimate.",
		images: ["../src/imgs/projects/exterior/windows/windows-main.jpg"],
		thumbnail: "",
		category: 1,
		isFeatured: false,
	},
];

export default ProjectData;
