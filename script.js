//code1:
//actual data with no customization
document.addEventListener("DOMContentLoaded", async function() {

const apiUrl = 
'https://overpass-api.de/api/interpreter?data=[out:json];area[name="Hyderabad"];node[amenity=restaurant](area);out;';

    try {
        // Send a request to the specified URL to get data
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Get the element with ID 'restaurant-list'
     const restaurantList = document.getElementById('restaurant-list');

     restaurantList.textContent = JSON.stringify(data, null, 2);

     console.log(restaurantList);
     console.log(response);
    } catch (error) {
        // Handle any errors
    console.error('Error fetching restaurant data:', error);
    }
});

//code: 2
//customize json data to display what ever you want 

// document.addEventListener("DOMContentLoaded", function() {
//     const apiUrl = 'https://overpass-api.de/api/interpreter?data=[out:json];area[name="Hyderabad"];node[amenity=restaurant](area);out;';

//     const restaurantOrder = [
//         'Bawarchi',
//         '\u0634\u0627\u062f\u0627\u0628 \u06C1\u0648\u0679\u0644 (Hotel Shadab)', 
//         'Hotel Shadab',
//         'Nayab Hotel',
//         'Astoria',
//         'Mythri Restaurant and Bar',
//         'Hyderabad House',
//         'Shanbhag Restaurant',
//         'Malgudi Restaurant',
//         'Swagath',
//         'Madina Hotel'
//     ];

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const restaurants = data.elements;
//             const restaurantList = document.getElementById('restaurant-list');
//             restaurantOrder.forEach(restaurantName => {

//                 const restaurant = restaurants.find(r => r.tags.name === restaurantName);
//                 if (restaurant) {

//                     const restaurantDiv = document.createElement('div');
//                     restaurantDiv.classList.add('restaurant');

//                     const name = document.createElement('h2');
//                     name.textContent = restaurant.tags.name;

//                     const tagsList = document.createElement('ul');
//                     for (const key in restaurant.tags) {
//                         if (restaurant.tags.hasOwnProperty(key)) {
//                             const tagItem = document.createElement('li');
//                             tagItem.textContent = `${key}: ${restaurant.tags[key]}`;
//                             tagsList.appendChild(tagItem);
//                         }
//                     }

//                     restaurantDiv.appendChild(name);
//                     restaurantDiv.appendChild(tagsList);
//                     restaurantList.appendChild(restaurantDiv);
//                 }
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching restaurant data:', error);
//         });
// });
