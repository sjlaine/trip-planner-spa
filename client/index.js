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


//add hotels
addEventListener('DOMContentLoaded', () => {
  const hotelButton = document.getElementById('add-hotel');

  hotelButton.addEventListener('click', () => {
    function show_selected() {
    var selector = document.getElementById('hotel-options');
    var value = selector[selector.selectedIndex].value;

    return value;
    }

    const selectedHotel = show_selected();

    const myHotels = document.getElementById('list-hotel');
    const addedHotel = document.createElement('li');
    const hotelItem = document.createTextNode(selectedHotel);
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'X';

    addedHotel.appendChild(hotelItem);
    addedHotel.appendChild(removeButton);

    addedHotel.addEventListener('click', () => {
      addedHotel.remove();
    })

    myHotels.append(addedHotel);
    })
});

//add restaurants
addEventListener('DOMContentLoaded', () => {
  const restaurantButton = document.getElementById('add-restaurant');

  restaurantButton.addEventListener('click', () => {
    function show_selected() {
    var selector = document.getElementById('restaurant-options');
    var value = selector[selector.selectedIndex].value;

    return value;
    }

    const selectedRestaurant = show_selected();

    const myRestaurants = document.getElementById('list-restaurant');
    const addedRestaurant = document.createElement('li');
    const restaurantItem = document.createTextNode(selectedRestaurant);
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'X';

    addedRestaurant.appendChild(restaurantItem);
    addedRestaurant.appendChild(removeButton);

    addedRestaurant.addEventListener('click', () => {
      addedRestaurant.remove();
    })

    myRestaurants.append(addedRestaurant);
    })

});

//add activities
addEventListener('DOMContentLoaded', () => {
  const activityButton = document.getElementById('add-activity');

  activityButton.addEventListener('click', () => {
    function show_selected() {
    var selector = document.getElementById('activity-options');
    var value = selector[selector.selectedIndex].value;

    return value;
    }

    const selectedActivity = show_selected();

    const myActivities = document.getElementById('list-activity');
    const addedActivity = document.createElement('li');
    const activityItem = document.createTextNode(selectedActivity);
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'X';

    addedActivity.appendChild(activityItem);
    addedActivity.appendChild(removeButton);

    addedActivity.addEventListener('click', () => {
      addedActivity.remove();
    })

    myActivities.append(addedActivity);
    })
});

