function coletarInformacoesAluno() {
    let nome = prompt("Qual o nome do aluno?")
    let idade = prompt("Qual a idade do aluno?")
    let serie = prompt("Qual a série do aluno?")
    let escola = prompt("Qual o nome da escola?")
    let materia = prompt("Qual a sua matéria favorita?")

    let informacoesAluno = `
    Nome do aluno: ${nome}
    Idade do aluno: ${idade}
    Série do aluno: ${serie}
    Nome da escola: ${escola}
    Matéria favorita: ${materia}
    `

    let confirmacao = confirm("Você confirma os dados inseridos?\n\n" + informacoesAluno);

    if (confirmacao) {
        document.write(informacoesAluno.replace(/\n/g, "<br>"));
    } else {
        alert("Os dados não foram confirmados")
    }
}