const modelo = require('../modelo.js');
const repositorioMemoria = require('../repositorio/repositorioMemoria.js');

modelo.reconfigRepositorio(repositorioMemoria);

test('Testando listar três perguntas com suas respectivas quantidades de respostas', () => {
  const perguntas = modelo.listarPerguntas();

  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('Qual a capital de MG?');
  expect(perguntas[1].texto).toBe('Qual a capital de RJ?');
  expect(perguntas[2].texto).toBe('Qual a capital de SP?');

  expect(perguntas[0].qtdRespostas).toBe(2);
  expect(perguntas[1].qtdRespostas).toBe(1);
  expect(perguntas[2].qtdRespostas).toBe(3);
});
