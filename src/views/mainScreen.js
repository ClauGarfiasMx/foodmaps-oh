const mainScreen = `
<section class="main-container">
    <div class="main-screen">
        <div class="logo-container flex-column">
            <img src="https://claudiagarfias.works/laboratoria/sharedimages/foodmapslogo.png" />
            <h1>find & eat</h1>
            <p>¿qué se te antoja hoy?</p>
        </div>

        <div class="map-container">
            <section id="map" />
        </div>
        <hr>
        <div class="settings">
            <p class="orange-p">filtra por tipo de cocina:</p>
            <div id="foodType">
                <select id="type">
				<option value=""selected>Seleccionar </option>
				<option value="mexicana">Mexicana</option>
				<option value="italiana">Italiana</option>
				
				<option value="japonesa">Japonesa</option>

				<option value="arabe">Arabe</option>
				<option value="fast food">Fast food</option>
			</select>
            </div>
            <button type="submit" id="boton">FILTRAR</button>
            <hr>

            <div id="card">
                <img id="card-photo" src="" />
                <div>
                    <h3 id="card-title"></h3>
                    <p id="card-adress"></p>
                </div>
            </div>
            <div id="nearbyResults">
                <ul></ul>
            </div>
        </div>
    </div>
</section>
`;