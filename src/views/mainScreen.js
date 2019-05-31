const mainScreen = `
<section class="main-container">
    <div class="main-screen">
        
        <div class="logo-container flex-column">
            <img src="https://claudiagarfias.works/laboratoria/sharedimages/foodmapslogo.png" />
            <h1>find & eat</h1>
            <p>¿qué se te antoja hoy?</p>
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
                    <option value="Pizza"></option>
                    <option value="Sushi"></option>
                    <option value="Tacos"></option>
                    <option value="Comida Oriental"></option>
                    <option value="Comida Asiática"></option>
                    <option value="Comida india"></option>
            </datalist>
        </div>
        <hr>


            
            <p id="empty" hidden>comida+restaurant+bar</p>
           

            
        <div class="map-container">


        <section id="map" />
        
    </div>
    

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