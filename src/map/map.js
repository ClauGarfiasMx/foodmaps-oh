// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map;
var service = new google.maps.infowindow();
var infowindow = new google.maps.places.PlacesService(_map);
function initMap() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latlng = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );

    _map = new google.maps.Map(document.getElementById("map"), {
      center: latlng,
      zoom: 15
    });

    // Especificamos la localización, el radio y el tipo de lugares que queremos obtener
    var request = {
      location: latlng /*provee la latitud y longitud de un lugar*/,
      radius: "1000",
      query: ["Restaurante"] /*se puede usar query en lugar de type */,
      center: latlng
    };
    service.nearbysearch(request, callback);
    /*nearbysearch() y textSearch() estas funciones retornan un arreglo de objetos de PlaceResults  */
  });
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: _map,
    position: place.geometry.location
  });
  google.maps.event.addListener(marker, "click", function() {
    infowindow.setContent(place.name, place.position);
    infowindow.open(_map, this);
  });
}
function callback(results, status) {
  /*PlacesServiceStatus objeto responsivo que contiene el estatus de respuesta, track de porque el lugar es fallido*/
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
