const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');
// const router = require('../routes');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2psYWluZSIsImEiOiJjamQxdmtpdGszMzhyMnlvNTlmZXYwMXl4In0.U9LGc_1sWW6oTB3F6R57nw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

var fullstackNYCoords = [-74.009151, 40.705086];
const marker = buildMarker('Activity', fullstackNYCoords);
// console.log(marker);

marker.addTo(map);

addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api', {
    method: 'GET',
  })
    .then(result => {
      // console.log(result, 'type: ', typeof result);
      return result.json();
    })
    .then(data => {
      //hotels
      data[0].forEach((element) => {
        const hotelDropdown = document.getElementById('hotel-options');
        const hotelOption = document.createElement('option');
        const hotelText = document.createTextNode(element.name);
        hotelOption.appendChild(hotelText);
        hotelDropdown.append(hotelOption);
      });

      //activities
      data[1].forEach((element) => {
        const activityDropdown = document.getElementById('activity-options');
        const activityOption = document.createElement('option');
        const activityText = document.createTextNode(element.name);
        activityOption.appendChild(activityText);
        activityDropdown.append(activityOption);
      });

      //restaurants
      data[2].forEach((element) => {
        const restaurantDropdown = document.getElementById('restaurant-options');
        const restaurantOption = document.createElement('option');
        const restaurantText = document.createTextNode(element.name);
        restaurantOption.appendChild(restaurantText);
        restaurantDropdown.append(restaurantOption);
      });

    })
    .then(() => {

    })
    .catch(console.error)
}
);

addEventListener('DOMContentLoaded', () => {
  const hotelButton = document.getElementById('add-hotel');
  const restaurantButton = document.getElementById('add-restaurant');
  const activityButton = document.getElementById('add-activity');

  let hotelSelectArr = [...document.getElementById('hotel-options').childNodes];
  console.dir(hotelSelectArr);

  for (let i = 0; i < hotelSelectArr.length; i++) {
    console.log('nodes:', hotelSelectArr[i].innerText);
  }

  hotelButton.addEventListener('click', () => {

  });
});


// const selectedHotel = console.log('test select', document.getElementById('hotel-options').selectedIndex.value);

// if (document.getElementById('hotel-options').selectedIndex === 0) {
//   console.log('val', document.getElementById('hotel-options').innerHTML);
// }


