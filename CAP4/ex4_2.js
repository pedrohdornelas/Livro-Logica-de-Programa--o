const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const genero = document.querySelector('input[name="sexo"]:checked');
    const altura = Number(frm.inAltura.value);

    let peso;

    if (genero) {
        if (genero.id === "inMasculino") {
            peso = 22 * Math.pow(altura, 2);
        } else if (genero.id === "inFeminino") {
            peso = 21 * Math.pow(altura, 2);
        }
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;
    } else {
        resp.innerText = "Por favor, selecione o gênero.";
    }
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
