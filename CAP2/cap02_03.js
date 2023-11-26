const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
const resp3 = document.querySelector("h5")

frm.addEventListener("submit", (e) =>{
    const veiculo = frm.Nome.value
    const preco = Number(frm.Preco.value)

    const entrada = preco /2
    const saldo = (preco /2) / 12

    resp1.innerText = `Promoção ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+ 12x de R$: ${saldo.toFixed(2)}`

    e.preventDefault()

})