const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const produto = frm.Nome.value
    const preco = Number(frm.Valor.value)

    const promocao = (preco *2) + (preco/2)
    const produto3 = preco/2

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`
    resp2.innerText = ` O 3º produto custa apenas R$: ${produto3.toFixed(2)}`

    e.preventDefault()

})