import { newPodcast, newPodcast2, podcasts } from "./datos.js";
import { generateCard, generatePlayer } from "./generator.js";

const parentElement = document.querySelector('[data-indicados]');
const tarjetas = document.querySelector('[data-tarjetas]')
const btnGuardados = document.querySelector('[data-guardados]')


//podcasts.push(newPodcast);

//podcasts.unshift(newPodcast2) 

//console.log(podcasts);

//podcasts.pop();

//podcasts.shift()

//forEach
// Iteramos sobre el arreglo de podcasts y agregamos cada tarjeta al DOM
 podcasts.forEach((podcast) => {
  const card = generateCard(podcast);
  parentElement.appendChild(card);
}); 


//map - recurrimos un arreglo y creamos un nuevo array sin alterar el array original
const players = podcasts.map(({image,subtitle}) => generatePlayer({image,subtitle}));
tarjetas.append(...players);

console.log(podcasts)

console.log(players)


//filter
btnGuardados.addEventListener('click', () =>{

  parentElement.innerHTML = '';

  const techPodcasts = podcasts.filter((podcast) => podcast.saved === 'true')

  techPodcasts.forEach((podcast) => {
      const card = generateCard(podcast);
      parentElement.appendChild(card);
  });

})