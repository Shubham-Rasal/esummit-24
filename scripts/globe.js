import createGlobe from "https://cdn.skypack.dev/cobe";

let phi = 0;
let canvas = document.getElementById("cobe");

const globe = createGlobe(canvas, {
	devicePixelRatio: 1,
	width: 600,
	height: 600,
	phi: 1,
	opacity: 0.5,
	theta: 0.41,
	dark: 1,

	diffuse: 1.63,
	mapSamples: 15000,
	mapBrightness: 6,
	baseColor: [0.1608, 0.6706, 0.8863],
	markerColor: [1, 0.5, 1],
	glowColor: [1, 1, 1],
	markers: [
		// add custom markers
		{ location: [37.7595, -122.4367], size: 0.03 },
		{ location: [40.7128, -74.006], size: 0.1 },
	],
	onRender: (state) => {
		// Called on every animation frame.
		// `state` will be an empty object, return updated params.
		state.phi = phi;
		phi += 0.01;
	},
});

globe.destory();
