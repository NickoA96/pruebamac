let resu = prompt("Cual es tu nombre ?")
let contenido = document.getElementById("titulo").textContent  
console.log(contenido)

document.getElementById("titulo").innerText= `${contenido} ${resu}`