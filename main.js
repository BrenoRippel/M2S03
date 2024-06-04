import { calcularMedia } from './calcularMedia.js';

function capturarNotas() {
    let materia = prompt("Digite o nome da matéria:");
    let notas = [];
    let i = 0;

    while (i < 4) {
        let nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
        notas.push(nota); 
        i++;
    }

    let materiaNotas = {
        nomeMateria: materia,
        notas: notas
    };

    return materiaNotas;
}

function calcularMediaNotas(notas) {
    return calcularMedia(notas);
}

let materiaNotas = capturarNotas();
let media = calcularMediaNotas(materiaNotas.notas);