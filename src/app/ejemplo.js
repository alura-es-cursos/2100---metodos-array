const podFront = "PodFront"
const podBack = "PodBack"
const podData = "PodData"

//array o arreglos

const podcast = ["PodFront", "PodBack", "PodData"]

//los indexes
/* 0 - podFront
1 - podBack
2 - podData 

*/

//cómo saber el valor de un elemento de un arreglo 
console.log(podcast[0])

//para saber el tamaño del arreglo
console.log(podcast.length)

//para saber cuál es el último valor del arreglo
console.log(podcast[podcast.length-1])

console.log(podcast.at(-1))


//Desestructuración

//const podcast = ["PodFront", "PodBack", "PodData"]

const [pod0, pod1, pod2] = podcast;

console.log(pod0)


const podcast2 = {
    nombre: "Podcast Prueba",
    titulo: "Podcast"
}

const {nombre, titulo} = podcast2

console.log(nombre)