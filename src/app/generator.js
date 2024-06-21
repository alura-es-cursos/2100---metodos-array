{/* <li class="tarjeta">
<img class="tarjeta__imagen" src="./src/imagenes/Imagens/hipsters-punto-tech/hipsters-punto-tech-techguide.png" alt="Hipsters Punto Tech - TechGuide: Storytelling con datos">
<h3 class="tarjeta__titulo">TechGuide: Storytelling  con datos</h3>
<h4 class="tarjeta__subtitulo">Hipsters Punto Tech</h4>
<i class="fa-regular fa-star"></i>
</li>
 */}


const generateCard = (podcasts) => {
    const cardElement = document.createElement('li');
    cardElement.classList.add('tarjeta');

    const imgElement = document.createElement('img');
    imgElement.classList.add('tarjeta__imagen');
    imgElement.src = podcasts.image;
    imgElement.alt = podcasts.title;

    const titleElement = document.createElement('h3');
    titleElement.classList.add('tarjeta__titulo');
    titleElement.textContent = podcasts.title;

    const subtitleElement = document.createElement('h4');
    subtitleElement.classList.add('tarjeta__subtitulo');
    subtitleElement.textContent = podcasts.subtitle;


    const starElement = document.createElement('i');
    podcasts.saved === 'true' ? starElement.classList.add('fa-solid', 'fa-star') : starElement.classList.add('fa-regular', 'fa-star');


    cardElement.appendChild(imgElement);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(subtitleElement);
    cardElement.appendChild(starElement);

    return cardElement;

}



const generatePlayer = (podcasts) => {


    const cardElement = document.createElement('li');
  
    const anchorElement = document.createElement('a');
    anchorElement.classList.add('tarjeta');
    anchorElement.href = '#';
  
    const imgElement = document.createElement('img');
    imgElement.classList.add('tarjeta__imagen');
    imgElement.src = podcasts.image;
    imgElement.alt = podcasts.subtitle;
  
    const subtitleElement = document.createElement('h3');
    subtitleElement.classList.add('tarjeta__titulo');
    subtitleElement.textContent = podcasts.subtitle;
  
    const playerElement = document.createElement('div');
    playerElement.classList.add('tarjeta__player');
  
    const formElement = document.createElement('form');
    formElement.classList.add('tarjeta__boton');
    formElement.action = '.';
  
    const buttonElement = document.createElement('button');
    buttonElement.ariaLabel = 'Play Podcast';
  
    const playIconElement = document.createElement('img');
    playIconElement.src = './src/imagenes/Iconos/boton-play.svg';
    playIconElement.alt = 'Icono de Play';
  
    buttonElement.appendChild(playIconElement);
    formElement.appendChild(buttonElement);
    anchorElement.appendChild(imgElement);
    anchorElement.appendChild(subtitleElement);
    anchorElement.appendChild(playerElement);
    anchorElement.appendChild(formElement);
    cardElement.appendChild(anchorElement);
  
    return cardElement;
  };

  export { generateCard, generatePlayer };
