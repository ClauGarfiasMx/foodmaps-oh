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
        <button type="submit" id="boton">VER RESTAURANTES CERCANOS</button>
            <p class="orange-p">O ElegIR una categoría:</p>

            <div class="select-container" data-content="">
            <input type="text" list="kindFood"  name="myTypes" id="input"></label> 
            <datalist id="kindFood" >
                    <option value="Comida Mexicana" ></option>
                    <option value="Comida Italiana"></option>
                    <option value="Comida China"></option>
                    <option value="Comida Japonesa"></option>
                    <option value="Comida Libanesa"></option>
                    <option value="Comida Arabe"></option>
                    <option value="Comida Corrida"></option>
            </datalist>
        </div>


            
            <p id="empty" hidden>restaurante</p>
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