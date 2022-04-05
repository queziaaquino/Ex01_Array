let valor = document.getElementById('num')
let valores = []

let num1 = document.getElementById('num1')
let numeros = []

const list1 = document.getElementById("lista1")
const list2 = document.getElementById("lista2")

function adicionar() {
    valores.push(Number(valor.value))
    valor.value = ''
    valor.focus()
    lista1()
    
}

function inserir() {
    numeros.unshift(Number(num1.value))
    num1.value = ''
    num1.focus ()
    lista2()
    
}
function remover() {
    let r = parseInt(rem1.value)
    if (valores[r]) {
     valores.splice(r, 1)
     rem1.value = ""
     rem1.focus()
     lista1()
     

 }else {
     alert('Digite um índice válido')
 }
    
    
}
function retirar() {

    let re = parseInt(rem2.value)
    if (numeros[re]) {
        numeros.splice(re, 1)
        rem2.value = ""
        rem2.focus()
        lista2()
        

    }else {
        alert('Digite um índice válido')
    }
     
    
    
}
function lista1() {
    list1.innerText = '';
    valores.forEach(n=>{
        item = document.createElement('li')
        item.textContent = n
        list1.appendChild(item)
      })
}
function lista2() {
    list2.innerText = '';
    numeros.forEach(n=>{
        item = document.createElement('li')
        item.textContent = n
        list2.appendChild(item)
      })
}