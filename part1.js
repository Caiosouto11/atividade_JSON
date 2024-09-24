let aluno = {

    nome: "Caio",
    idade: 21,
    curso: "Computação",
    notas: [9.0, 10.0, 8.7]

};
console.log(aluno)

console.log("O nome do aluno é:", aluno.nome);
console.log("A primeira nota do aluno foi:", aluno.notas[0]);

aluno.idade = 22
console.log("agora a idade do aluno é:",aluno.idade)

aluno.notas[0] = 8.5
console.log("agora a primeira nota de",aluno.nome,"é:",aluno.notas[0])

aluno.nome = JSON.stringify(aluno.nome)
console.log('nome em formato de string:',aluno.nome)

aluno.nome = JSON.parse(aluno.nome)
console.log('nome em formato de objeto:',aluno.nome)

let soma = aluno.notas.reduce((addition, value)=> addition + value, 0)
let media = soma /aluno.notas.length
console.log('A média das notas é:',media)

aluno.endereco = {
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP"
};

console.log("Aluno com endereço:", aluno);


console.log("Cidade:", aluno.endereco.cidade);
console.log("Estado:", aluno.endereco.estado);

let alunos = [
    {
        nome: "João",
        idade: 22,
        curso: "Engenharia",
        notas: [8.5, 9.0, 7.5],
        endereco: { rua: "Rua das Flores", cidade: "São Paulo", estado: "SP" }
    },
    {
        nome: "Maria",
        idade: 20,
        curso: "Medicina",
        notas: [9.5, 8.8, 9.0],
        endereco: { rua: "Avenida Brasil", cidade: "Rio de Janeiro", estado: "RJ" }
    },
    {
        nome: "Pedro",
        idade: 21,
        curso: "Direito",
        notas: [7.0, 6.5, 8.0],
        endereco: { rua: "Rua das Acácias", cidade: "Belo Horizonte", estado: "MG" }
    }
];

console.log("Lista de alunos:", alunos);

let aprovados = alunos.filter(function(aluno) {
    let somaNotas = aluno.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    let mediaNotas = somaNotas / aluno.notas.length;
    return mediaNotas > 8;
})

console.log('Os alunos com média acima de 8 são:',aprovados)
