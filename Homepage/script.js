//biblioteca
const form = document.getElementById("enviar") 
const btnEnvio = document.getElementById("btnEnvio")
const price = document.getElementById("price")
const uso1 = document.getElementById("uso1")
const software1 = document.getElementById("software1")
const game1 = document.getElementById("game1")
const performance1 = document.getElementById("performance1")

btnEnvio.addEventListener("click",function(event){
  event.preventDefault()
  const formulario = [{
    uso: uso1.value,
    software: software1.value,
    game: game1.value,
    performance: performance1.value,
    preco: price.value,
  }]
  localStorage.setItem("dados",JSON.stringify(formulario))
})

const la = JSON.parse(localStorage.getItem("dados"))
















