let ladoa = parseFloat(prompt("Digite o valor do lado a: "))
let ladob = parseFloat(prompt("Digite o valor do lado b: "))
let ladoc = parseFloat(prompt("Digite o valor do lado c: "))
let altura = parseFloat(prompt("Digite o valor da altura h: "))

let perimetro = ladoa+ladob+ladoc
let area = (ladob*altura)/2

console.log("O perímetro do triângulo  é: " + perimetro)

console.log("A área do triângulo é: " + area)