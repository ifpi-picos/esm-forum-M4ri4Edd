const perguntas = [
    { id_pergunta: 1, texto: 'Qual a capital de MG?', id_usuario: 1 },
    { id_pergunta: 2, texto: 'Qual a capital de RJ?', id_usuario: 1 },
    { id_pergunta: 3, texto: 'Qual a capital de SP?', id_usuario: 1 }
];
  
const respostas = {
    1: ['Belo Horizonte', 'BH'],
    2: ['Rio de Janeiro'],
    3: ['São Paulo', 'Sampa', 'SP']
};

function recuperarTodasPerguntas() {
    return perguntas.map(p => ({ ...p }));
}
  
function recuperarQtdRespostas(id_pergunta) {
    return respostas[id_pergunta]?.length || 0;
}
  
function recuperarTodasRespostas(id_pergunta) {
    return respostas[id_pergunta] || [];
}
  
function recuperarPergunta(id_pergunta) {
    return perguntas.find(p => p.id_pergunta === id_pergunta);
}
  
module.exports = {
    recuperarTodasPerguntas,
    recuperarQtdRespostas,
    recuperarTodasRespostas,
    recuperarPergunta
};