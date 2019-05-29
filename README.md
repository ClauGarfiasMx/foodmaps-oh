# foodmaps-oh

FoodMaps project for Laboratoria Guadalajara 002 Open House Day 2019

## Historia de usuario 1

Yo como usuarix busco opciones de restaurantes cerca de mi ubicación.

## DOD 1

En la pantalla aparece un mapa con mi ubicación y debajo una lista de los restaurantes cercanos.

## Historia de usuario 2

Como usuarix quiero filtrar las opciones por:
-costos
-horarios
-tipo de comida

## DOD 2

Hay en pantalla un selector con las opciones y al pulsar una, la lista de restaurantes muestra los resultados de mi elección.

## Historia de usuario 3

Yo usuarix quiero ver los detalles del restaurante que elegí.

##DOD 3
Al tocar una opción de restaurante se abre un modal que muestra los detalles de la elección.

# Foodmap

Crea una web-app que a través de un input pueda filtrar los restaurantes
que se encuentran cerca de ti _(Tú decides la estructura que tendrán tus datos,
puedes crear una lista de restaurantes en un arreglo, en un objeto, consumir una API, etc. Lo importante es que el contenido debe ser dinámico y no estático y el diseño es totalmente libre)_.

## Flujo de la aplicación.

Vista splash con duración de 2 segundos que redirecciona a tu vista
principal.
![Splash](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/splash.jpg?raw=true)

En la vista principal se muestran todos los restaurantes "cerca de ti" junto
con el input para filtrar tu elección _(Los criterios de filtrado son decisión
tuya, puede ser por tipo de comida, costos, orden alfabético, etc.)_.
![vista principal](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/2.jpg?raw=true)

Ya que se hizo la elección del filtro deben mostrarse únicamente aquellos
restaurantes que cumplan con la condición.
![vista filtrado](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/3.jpg?raw=true)

Al seleccionar alguno de los restaurantes, deberá mostrarse la información de
este a través de un modal.
![modal imagen](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/5.jpg?raw=true)

Una vez cerrado el modal debe volver a la vista principal.
![ultima vista](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/6.jpg?raw=true)
