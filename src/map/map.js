let Btn = document.getElementById("boton");
let map, marker, service, infoWindow, buscarRest, tipo;

// La función de HTML5 Geolocalización solo funciona si el usuario proporciona el consentimiento
// desde el navegador, de lo contrario arrojara un error.

document.getElementById("boton").addEventListener("click", rellenar);
function rellenar() {
  tipo = document.getElementById("myLocation-lat").value;
  document.getElementById("nearbyResults").innerHTML = "";
  buscarRest = "restaurante";
  initMap();
}

function initMap() {
  // buscarRest="restaurante";
  tipo = tipo;
  //  tipo="pizza"

  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      // En caso de no obtener la Geolocalización esta sería la posición inicial.
      lat: -34.397,
      lng: 150.644
    },
    zoom: 15 // Determinamos el nivel de zoom en el mapa.
  });

  infoWindow = new google.maps.InfoWindow({ map: map });
  // infowindow= new google.maps.places.PlacesService(_map);

  // Iniciamos la Geolozalización por HTML5.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var latlng = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          tipo: tipo
        };

        // estos dos son para aparecer un windowInfo en la posición actual
        infoWindow.setPosition(latlng);
        infoWindow.setContent("Tu estas aquí");
        map.setCenter(latlng); // Centramos el Mapa a la ubicación actual
        getNearby(pos["lat"], pos["lng"], map, pos["tipo"]);
      },

      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Si el navegador no soporta la HTML5 Geolocalización.
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
}

function getNearby(lat, lng, map, tipo) {
  var userLocation = new google.maps.LatLng(lat, lng);

  console.log(lat + " lat");
  console.log(tipo.value + " tipo.value");

  var request = {
    location: userLocation,
    radius: 5000, // Puedes cambiar el radio hasta 50000 metros.
    types: ["restaurant"], // El type del lugar, en el caso de las pizzas: restaurant, pero checa esta url para mas información =>  https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=23.2996241,-106.4818282&radius=10000&sensor=false&language=es&name=Pizza+Xtreme+Factory&key=AIzaSyCBpibgr1-cx8JRbEsg5tAASOnhnTvPTwY
    name: tipo // El nombre del lugar, en el caso de las pizas: Pizza Xtreme Factory
    // radius:radio
  };

  console.log(tipo + " tipo tipo");

  // infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
}

function nearbyCallback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      name = results[i].name;
      console.log(name + " name");

      vicinity = results[i].vicinity;
      console.log(vicinity + " vicinity");

      nearbyOutput(results[i].name, results[i].vicinity);

      var marker = new google.maps.Marker({
        map: map,
        icon:
          "https://claudiagarfias.works/laboratoria/sharedimages/foodmapsmapplaceholder.png", // Aquí puedes poner la URL del asset del icono

        place: {
          placeId: results[i].place_id,
          location: results[i].geometry.location
        }
      });
      console.log(results[i].icon);

      google.maps.event.addListener(marker, "click", function() {
        infoWindow.setContent(name + "<br>" + vicinity);
        infoWindow.open(map, this);
      });
    }
  }
  console.log(results.outerHTML() + " resultas");
}

function nearbyOutput(namePlace, vicinity) {
  document
    .getElementById("nearbyResults")
    .append("NOMBRE: " + namePlace + "| DIRECCION " + vicinity);
  // $('#nearbyResults ul').append('<li><strong>Nombre:</strong> '+ namePlace + ' | <strong>Dirección:</strong> ' + vicinity + '</li>');
}
