const frm = document.querySelector("form")
const resp1= document.querySelector("h3")
const resp2= document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const remedio = frm.Nome.value
    const preco = Number(frm.Valor.value)

    const final = Math.floor(preco*2)

    resp1.innerText = `Promoção de ${remedio}`
    resp2.innerText = `Leve 2 por apenas R$: ${final.toFixed(2)}`

    e.preventDefault()

})