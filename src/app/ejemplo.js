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

//utilizando el método at
console.log(podcast.at(-1))