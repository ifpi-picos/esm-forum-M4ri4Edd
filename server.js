const express = require('express')
const modelo = require('./modelo.js');

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.set('views', './visao');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  try {
    const perguntas = modelo.listarPerguntas();
    res.render('index', {
      perguntas: perguntas
    });
  }
  catch(erro) {
    res.status(500).json(erro.message); 
  }
});

app.post('/perguntas', (req, res) => {
  try {
    modelo.cadastrarPergunta(req.body.pergunta);
    res.render('pergunta-sucesso');
  }
  catch(erro) {
    res.status(500).json(erro.message); 
  } 
});

app.get('/respostas', (req, res) => {
  const id_pergunta = req.query.id_pergunta;
  const pergunta = modelo.getPergunta(id_pergunta);
  const respostas = modelo.getRespostas(id_pergunta);
  try {
    res.render('respostas', {
      pergunta: pergunta,
      respostas: respostas
    });
  }
  catch(erro) {
    res.status(500).json(erro.message); 
  } 
});

app.post('/respostas', (req, res) => {
  try {
    const id_pergunta = req.body.id_pergunta;
    const resposta = req.body.resposta;
    modelo.cadastrarResposta(id_pergunta, resposta);
    res.render('resposta-sucesso', {
      id_pergunta: id_pergunta
    });
  }
  catch(erro) {
    res.status(500).json(erro.message); 
  } 
});

// espera e trata requisições de clientes
const port = 3000;
app.listen(port, 'localhost', () => {
  console.log(`ESM Forum rodando na porta ${port}`)
});