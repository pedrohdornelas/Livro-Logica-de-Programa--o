const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2= document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero1 = Number(frm.valorA.value)
    const numero2 = Number(frm.valorB.value)
    const numero3 = Number(frm.valorC.value)

    if(numero1 <= numero2+numero3 && numero2<= numero1+numero3 && numero3<= numero1+numero2){
        resp1.innerText = `Lados podem formar um triângulo`
    } else {
        resp1.innerText = `Lados não podem formar um triângulo`
    }

    if(numero1===numero2 && numero2===numero3){
        resp2.innerText =`Tipo: equilátero` 
    } else if ( numero1 !== numero2 && numero1!== numero3 && numero2 !== numero3 ) {
        resp2.innerText =`Tipo: escaleno` 
    } else {
        resp2.innerText =`Tipo: isósceles` 
    }
})
