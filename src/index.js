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