let map, marker, service, infoWindow, buscarRest, type;
const navigateCard = () => {
    document.getElementById("cardview").scrollIntoView({
        behavior: "smooth",
        inline: "start"
    });
};

document.getElementById("boton").addEventListener("click", requestData);
// document.getElementById("boton-filter").addEventListener("click", requestData);

function requestData() {
    // type=document.getElementById("myLocation-lat").value;
    type = document.getElementById("empty").innerText;
    document.getElementById("nearbyResults").innerHTML = "";
    // if (type === "") {
    //     alert("Favor de seleccionar un campo");
    // } else {
    //     initMap();
    // }
    initMap();
    navigateCard();
}

let dataList = document.getElementsByName("myTypes")[0];
dataList.addEventListener("change", function() {
    let permittedTypes = [
        "comida mexicana",
        "mexicana",
        "comida italiana",
        "italiana",
        "comida china",
        "china",
        "comida japonesa",
        "japonesa",
        "comida libanesa",
        "libanesa",
        "comida arabe",
        "árabe",
        "comida árabe",
        "comida corrida",
        "cocina corrida",
        "cocina",
        "corrida",
        "pizza",
        "sushi",
        "tacos",
        "comida oriental",
        "oriental",
        "comida asiática",
        "asiática",
        "asiatica",
        "comida india",
        "india",
        "comida hindú",
        "comida hindu",
        "hindú",
        "hindu",
        "comida"
    ];
    type = this.value.toLowerCase();
    document.getElementById("nearbyResults").innerHTML = "";
    dataList.value = "";
    console.log(type);
    let validation = permittedTypes.includes(type);
    console.log(validation);

    if (validation) {
        document.getElementById("error").style.display = "none";
        document.getElementById("input").className -= "red-border";
        initMap();
        navigateCard();
    } else {
        document.getElementById("input").className += "red-border";
        document.getElementById("error").style.display = "block";
        // alert("Favor de seleccionar un campo");
    }
});

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            // En caso de no obtener la Geolocalización esta sería la posición inicial.
            lat: -34.397,
            lng: 150.644
        },
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    infoWindow = new google.maps.InfoWindow({ map: map });

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
                    type: type
                };

                infoWindow.setPosition(latlng);
                infoWindow.setContent("Tu estas aquí");
                map.setCenter(latlng); // Centramos el Mapa a la ubicación actual
                getNearby(pos["lat"], pos["lng"], map, pos["type"]);
                navigateCard();
            },

            function() {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation ?
        "Error: The Geolocation service failed." :
        "Error: Your browser doesn't support geolocation."
    );
}

function getNearby(lat, lng, map, type) {
    var userLocation = new google.maps.LatLng(lat, lng);
    // var type = type.value;
    // console.log(type);

    var request = {
        location: userLocation,
        radius: 5000,
        query: ["restaurant"],
        name: type
    };

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, nearbyCallback);
}

function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        // console.log(results);

        let cardContainer = document.getElementById("card");

        let cardDiv2 = results.map((e, i) => {
            const cardPhoto = results[i].photos ?
                results[i].photos[0].getUrl({ maxWidth: 200, maxHeight: 200 }) :
                "";
            // console.log(e.name);
            let cardArr = `
                <div class="card-div" id=card${i}>
                <div class="card-img-div">
                    <img  class="card-img" src=${cardPhoto}/>
                    </div>
                    <div class="card-description">
                    
                        <h3><img class="logo-description" src="https://claudiagarfias.works/laboratoria/sharedimages/foodmapslogo-or.png"/>${
                          e.name
                        }</h3>
                        <p>${e.vicinity}</p>
                        <a class="card-link" target="_blank" href="https://www.google.com/maps/search/?api=1&map_action=map&query=${
                          e.name
                        }">Ver en  Google Maps</a>
                        

                        
                    </div>
                </div>`;
            // cardContainer.innerHTML = "";
            return cardArr;
        });

        let injectArr = cardDiv2.join("");
        // console.log(cardDiv2);
        cardContainer.innerHTML = injectArr;

        for (var i = 0; i < results.length; i++) {
            let infoPlace = results[i];
            const name = results[i].name;
            const vicinity = results[i].vicinity;
            const priceLevel = results[i].price_level;
            const foto = results[i].photos ?
                results[i].photos[0].getUrl({ maxWidth: 200, maxHeight: 200 }) :
                "";
            const rattingF = results[i].rating;

            // nearbyOutput(name, vicinity, priceLevel, rattingF, foto);

            // inserPhoto(foto);

            var marker = new google.maps.Marker({
                map: map,
                place: {
                    placeId: results[i].place_id,
                    location: results[i].geometry.location
                },
                icon: {
                    url: "https://claudiagarfias.works/laboratoria/sharedimages/foodmapsmapplaceholder.png",
                    scaledSize: new google.maps.Size(30, 30) // pixels
                },
                animation: google.maps.Animation.DROP
            });

            google.maps.event.addListener(marker, "click", function() {
                infoWindow.setContent(
                    infoPlace.name +
                    "<br>" +
                    infoPlace.vicinity +
                    "<br>" +
                    "$" +
                    infoPlace.price_level +
                    "<br>" +
                    "Calificación" +
                    infoPlace.rating
                );
                infoWindow.open(map, this);
            });
        }
    }
}