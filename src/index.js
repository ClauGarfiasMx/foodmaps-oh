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

window.onpopstate = event => {
    console.log(
        "location: " + document.location + ", state: " + JSON.stringify(event.state)
    );
    window.location.reload(true);
};