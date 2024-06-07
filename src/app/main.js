import  podcasts from "./datos.js";
import { generateCard, generatePlayer } from "./generator.js";

const parentElement = document.querySelector('[data-indicados]');


//forEach
// Iteramos sobre el arreglo de podcasts y agregamos cada tarjeta al DOM
 podcasts.forEach((podcast) => {
  const card = generateCard(podcast);
  parentElement.appendChild(card);
}); 
