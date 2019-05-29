const contentDiv = document.getElementById("root");
contentDiv.style.display = "block";

// //// SPLASH SCREEN //// //
if (location.hash === "") {
  contentDiv.innerHTML = splashScreen;
}

// //// MAIN SCREEN //// //
if (location.hash === "#main") {
  contentDiv.innerHTML = mainScreen;
}

const tryingFoursquare = () => {
  fetch(
    "https://api.foursquare.com/v2/venues/explore?client_id=AYQDABJELOW5PZJL5XLWUEVFJ33I1XKZ5C0CFZU1IVJBXYOK&client_secret=ZTNBWKX1QKVVCY3D2IG5NX4YX2PRS0PYMUQ4TBQDW2ASPKI5&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee"
  )
    .then(function() {
      console.log("hi!");
    })
    .catch(function() {
      // Code for handling errors
    });
};

window.onpopstate = event => {
  console.log(
    "location: " + document.location + ", state: " + JSON.stringify(event.state)
  );
  window.location.reload(true);
};
