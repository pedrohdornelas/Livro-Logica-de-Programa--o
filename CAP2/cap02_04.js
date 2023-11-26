const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
const preco = Number(frm.quilo.value)
const peso = Number(frm.consumo.value)

const valor = (peso/1000)*preco

resp.innerText =` Valor a pagar R$: ${valor.toFixed(2)}`

e.preventDefault()

})