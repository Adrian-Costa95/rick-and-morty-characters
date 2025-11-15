
// ![Captura de Pantalla](./assets/img/rickandmorty-screenshot.png)

// ## Características

// - Lista de personajes con imágenes, nombres y especies.
// - Paginación para navegar entre las páginas de personajes. Los botónes de `Previous page`
//  y `Next page` están creados
// - Uso de la API de Rick and Morty para obtener datos de personajes. Este es el end point
//  `https://rickandmortyapi.com/api/character/?page=(aquí añade el numero de la página)`

// ## Instrucciones

// 1. Abre el archivo `index.html` en tu navegador para ver la página web.
// 2. La página mostrará una lista de personajes con sus imágenes, nombres y especies.
// 3. Puedes utilizar los botones "Previous Page" y "Next Page" para navegar entre las páginas de personajes.
// 4. Los personajes se obtienen de la API de Rick and Morty (https://rickandmortyapi.com/). Y aquí las documentación https://rickandmortyapi.com/documentation
// 5. Las imágenes de los personajes se muestran junto a sus nombres y especies.

// ## Código

// El código del ejercicio se divide en tres archivos:

// - `index.html`: Contiene la estructura HTML de la página. Tendrá la cabecera creada y los botones para pasar las páginas.
// - `styles.css`: Contiene estilos CSS para dar formato a la página. Hay algunos de inicio.
// - `script.js`: Contiene el código JavaScript para obtener y mostrar los personajes, así como para la paginación. Aquí introducirás todo tu código, está vacio.

// ## CONSEJOS

// - Incia viendo que trae el fetch https://rickandmortyapi.com/api/character/?page=1. Los console.log() son tus amigos!
// - Una vez sepamos que trae cada página muéstrala en navegador. 
// - Pon los estilos para que se vea similar al ejemplo
// - Haz el páginado. Piensa como añadir +1 a tu página al pulsar "Next Page" o -1 al pulsar "Previous Page" a la página en la que está para hacer el páginado.
// - Revisa la documentación si tienes dudas  

// Let´s CODE
const characterList = document.getElementById("character-list");
const nextpage = document.getElementById("next-page");
const prevpage = document.getElementById("prev-page");

let currentPage = 1;

function loadcharacter(page) {
fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
.then(response => response.json())
.then(data => {
   const characters = data.results;
   characterList.innerHTML = "";

   characters.forEach(character => {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src="${character.image}"/>
    <h2>${character.name}</h2>
    <p>${character.species}</p>
    `;
    characterList.appendChild(li);
   });
})
.catch(error => {
    console.error("error al obtener los personajes", error);
});
}
loadcharacter(currentPage);

nextpage.addEventListener("click", () => {
    currentPage++;
    loadcharacter(currentPage);
})
prevpage.addEventListener("click", () => {
    currentPage--;
    loadcharacter(currentPage)
})