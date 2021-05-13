// Project Data
const ProjectData = [
	{
		id: 0,
		name: "Skyview Dental",
		date: "September 01, 2019",
		location: "13625 St NW, Edmonton, AB T5V 0B5, Canada",
		description: "Skyview Dental Clinic.",
		images: [
			"../src/imgs/projects/skyview/skyview-main.jpg",
			"../src/imgs/projects/skyview/skyview-lobby.jpg",
			"../src/imgs/projects/skyview/skyview-hall.jpg",
			"../src/imgs/projects/skyview/skyview-hall2.jpg",
		],
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
		images: [
			"../src/imgs/projects/xtreme/xtreme-main.jpg",
			"../src/imgs/projects/xtreme/xtreme-lobby.jpg",
			"../src/imgs/projects/xtreme/xtreme-hall.jpg",
		],
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
		images: [
			"../src/imgs/projects/structube/structube-shipping.jpg",
			"../src/imgs/projects/structube/structube-kitchen.jpg",
			"../src/imgs/projects/structube/structube-electrical.jpg",
			"../src/imgs/projects/structube/structube-hvac.jpg",
			"../src/imgs/projects/structube/structube-bathroom.jpg",
			"../src/imgs/projects/structube/structube-drywall.jpg",
			"../src/imgs/projects/structube/structube-lockers.jpg",
		],
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
		images: [
			"../src/imgs/projects/tranesupply/trane-main.JPG",
			"../src/imgs/projects/tranesupply/trane-interior.JPG",
			"../src/imgs/projects/tranesupply/trane-hvac.JPG",
		],
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
		images: [
			"../src/imgs/projects/finning/finning-scc.jpg",
			"../src/imgs/projects/finning/finning-scc2.jpg",
			"../src/imgs/projects/finning/finning-trusses.jpg",
			"../src/imgs/projects/finning/finning-hvac.jpg",
			"../src/imgs/projects/finning/finning-hvac2.jpg",
			"../src/imgs/projects/finning/finning-controls.jpg",
		],
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
		images: [
			"../src/imgs/projects/goodwill/goodwill-main.JPG",
			"../src/imgs/projects/goodwill/goodwill-hall.JPG",
			"../src/imgs/projects/goodwill/goodwill-trusses.JPG",
			"../src/imgs/projects/goodwill/goodwill-fitting-rooms.JPG",
		],
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
		images: [
			"../src/imgs/projects/scotia-place/scotia-place-main.jpg",
			"../src/imgs/projects/scotia-place/scotia-place-before.jpg",
			"../src/imgs/projects/scotia-place/scotia-place-wall.jpg",
		],
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
		images: [
			"../src/imgs/projects/huntswood/huntswood-main.jpg",
			"../src/imgs/projects/huntswood/huntswood-interior.jpg",
			"../src/imgs/projects/huntswood/huntswood-trusses.jpg",
			"../src/imgs/projects/huntswood/huntswood-bobcat.jpg",
		],
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
		images: [
			"../src/imgs/projects/149st/149st-main.jpg",
			"../src/imgs/projects/149st/149st-exterior.jpg",
			"../src/imgs/projects/149st/149st-lobby.jpg",
		],
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
		images: [
			"../src/imgs/projects/exterior/ramps/concrete-ramp-main.jpg",
			"../src/imgs/projects/exterior/ramps/concrete-ramp-slope.jpg",
			"../src/imgs/projects/exterior/ramps/concrete-ramp-top.jpg",
			"../src/imgs/projects/exterior/ramps/steel-ramps-main.jpg",
			"../src/imgs/projects/exterior/ramps/steel-ramps-front.jpg",
			"../src/imgs/projects/exterior/ramps/steel-ramps-close.jpg",
		],
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
		category: 1,
		isFeatured: false,
	},
];

export default ProjectData;
