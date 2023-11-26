const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero1 = Number(frm.inVelocidade.value);
    const numero2 = Number(frm.inCondutor.value);

    if (numero2 <= numero1) {
        resp.innerText = "Situação = Sem Multa";
    } else if (numero2 <= numero1 * 1.2) {
        resp.innerText = "Situação = Multa Leve";
    } else {
        resp.innerText = "Situação = Multa Grave";
    }
});


    