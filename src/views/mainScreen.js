const mainScreen = `
<section class="main-screen">
  <div class="logo-container flex-column">
    <img src="https://claudiagarfias.works/laboratoria/sharedimages/foodmapslogo.png" />
    <h1>find & eat</h1>
    <p>¿qué se te antoja hoy?</p>
  </div>
  <p class="orange-p" for="myLocation-lat">Restaurantes más cercanos:</p>
  <div class="map-container">
    <section id="map" />
  </div>
  <hr>
  <div
  class="settings">
  <p class="orange-p" for="myLocation-lat">O encuentra tu restaurante:</p>
  <input type="text" id="myLocation-lat" class="form-control" placeholder="ALGUN TEXTO" />
  <button type="submit" id="boton">BUSCAR</button>
  <hr>
  <h3>Resultado de Busqueda</h3>
  <div id="nearbyResults">
    <ul></ul>
  </div>
</div>
</section>  
`;
