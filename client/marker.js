const mapboxgl = require("mapbox-gl");

function buildMarker(type, coords) {
  var iconUrl;
  if (type === 'Activity') iconUrl = 'http://i.imgur.com/WbMOfMl.png';
  else if (type === 'Hotel') iconUrl = 'http://i.imgur.com/D9574Cu.png';
  else if (type === 'Restaurant') iconUrl = 'http://i.imgur.com/cqR6pUI.png';

  const markerDomEl = document.createElement("img"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.src = iconUrl;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}

module.exports = buildMarker;
