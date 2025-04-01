var repositorio = require('./repositorio/repositorioBD.js');

// usada pelo teste de unidade
// para que o modelo passe a usar uma versão "mockada" de bd
function reconfigRepositorio(novoRepositorio) {
  repositorio = novoRepositorio;
}

// listar_perguntas retorna um array de objetos com os seguintes campos:
// { id_pergunta: int
//   texto: int
//   id_usuario: int
//   num_respostas: int 
// }

function listarPerguntas() {
  const perguntas = repositorio.recuperarTodasPerguntas();
  perguntas.forEach(pergunta => {
    pergunta['qtdRespostas'] = repositorio.recuperarQtdRespostas(pergunta.id_pergunta);
  });
  return perguntas;
}

function cadastrarPergunta(texto) {
  repositorio.criarPergunta(texto, 1); // fixo id_usuario = 1
}

function cadastrarResposta(id_pergunta, texto) {
  repositorio.criarResposta(id_pergunta, texto);
}

function getPergunta(id_pergunta) {
  return repositorio.recuperarPergunta(id_pergunta);
}

function getRespostas(id_pergunta) {
  return repositorio.recuperarTodasRespostas(id_pergunta);
}

function getQtdRespostas(id_pergunta) {
  return repositorio.recuperarQtdRespostas(id_pergunta);
}

// Exportando as funções
exports.reconfigRepositorio = reconfigRepositorio;
exports.listarPerguntas = listarPerguntas;
exports.cadastrarPergunta = cadastrarPergunta;
exports.cadastrarResposta = cadastrarResposta;
exports.getPergunta = getPergunta;
exports.getRespostas = getRespostas;
exports.getQtdRespostas = getQtdRespostas;