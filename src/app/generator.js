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
    starElement.classList.add('fa-regular', 'fa-star')

    cardElement.appendChild(imgElement);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(subtitleElement);
    cardElement.appendChild(starElement);

    return cardElement;

}



