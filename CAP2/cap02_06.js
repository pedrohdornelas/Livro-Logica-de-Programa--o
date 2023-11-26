const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.Valor.value)
    const tempo = Number(frm.Tempo.value)

    const final = Math.ceil(tempo/15) * preco

    resp1.innerText = `Valor a pagar R$: ${final.toFixed(2)}`

    e.preventDefault()

})