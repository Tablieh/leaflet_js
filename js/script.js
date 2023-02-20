//Let’s create a map of the center of London with pretty OpenStreetMap tiles. From here on, we’ll be working in JS.
// First we’ll initialize the map and set its view to our chosen geographical coordinates and a zoom level:
var map = L.map('map').setView([48.5495719909668 , 7.737119197845459], 14);
//Next, we’ll add a tile layer to add to our map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([48.5495719909668, 7.737119197845459]).addTo(map);
//Cercle
var circle = L.circle([48.5495719909668 , 7.737119197845459], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

// is stande here 
var polygon = L.polygon([
  [48.5495719909668, 7.737119197845459],
]).addTo(map);

//hey im pupups
marker.bindPopup("<b>Elan Formation</b><br>Centre de formation.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
var popup = L.popup()
    .setLatLng([48.5495719909668, 7.737119197845459])
    .setContent("Elan Formation. <br> 14 Rue du Rhône, 67100 Strasbourg, France")
    .openOn(map);
/* var popup = L.popup()
    .setLatLng([48.5495719909668, 7.737119197845459])
    .setContent("Elan Formation")
    .openOn(map); */


function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);