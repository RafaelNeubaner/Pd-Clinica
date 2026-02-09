import { medicos } from "../../../js/dados/medicos.js";
import { ativarCarrossel } from "../../../js/homepage.js";

ativarCarrossel('containerMedicos', 'containerMedicosScroll', 'btnLeftMedicos', 'btnRightMedicos', 330);

const medicosCardiologistas = medicos.filter(medico => medico.especialidades.includes("Cardiologia"));

console.log(medicosCardiologistas);

let templateCardiologistas = document.querySelector('#containerMedicos #cardMedicoTemplate');
let containerCardiologistas = document.querySelector('#containerMedicosScroll');

medicosCardiologistas.forEach(medico => {
    let card = templateCardiologistas.content.cloneNode(true);
    card.querySelector('img').src = medico.foto;
    card.querySelector('img').alt = `Foto ${medico.nome}`;
    card.querySelector('h3').textContent = medico.nome;
    card.querySelector('p').textContent = medico.descricao;
    containerCardiologistas.appendChild(card);
});