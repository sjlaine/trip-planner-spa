const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2psYWluZSIsImEiOiJjamQxdmtpdGszMzhyMnlvNTlmZXYwMXl4In0.U9LGc_1sWW6oTB3F6R57nw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

var fullstackNYCoords = [-74.009151, 40.705086];
const marker = buildMarker('Activity', fullstackNYCoords)
console.log(marker);

marker.addTo(map);
