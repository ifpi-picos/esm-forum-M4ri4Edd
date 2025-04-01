const bd = require('../bd/bd_utils.js');

function recuperarTodasPerguntas() {
    return bd.queryAll('SELECT * FROM perguntas', []);
}
  
function recuperarQtdRespostas(id_pergunta) {
    const resultado = bd.query('SELECT count(*) AS total FROM respostas WHERE id_pergunta = ?', [id_pergunta]);
    return resultado.total;
}
  
function recuperarPergunta(id_pergunta) {
    return bd.query('SELECT * FROM perguntas WHERE id_pergunta = ?', [id_pergunta]);
}
  
function recuperarTodasRespostas(id_pergunta) {
    return bd.queryAll('SELECT * FROM respostas WHERE id_pergunta = ?', [id_pergunta]);
}
  
function criarPergunta(texto, id_usuario) {
    return bd.exec('INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?)', [texto, id_usuario]);
}
  
function criarResposta(id_pergunta, texto) {
    return bd.exec('INSERT INTO respostas (id_pergunta, texto) VALUES(?, ?)', [id_pergunta, texto]);
}
  
module.exports = {
    recuperarTodasPerguntas,
    recuperarQtdRespostas,
    recuperarPergunta,
    recuperarTodasRespostas,
    criarPergunta,
    criarResposta
};