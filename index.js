const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const dados = require('./db.json')

app.use(bodyParser.json());

app.get('/livros', (req, res) => {
    res.send(dados.livros);
});

app.get('/livros/:id', (req, res) =>{
    const livro = dados.livros.filter((elemento)=>{
        if(elemento.id == req.params.id){
            return true
        }
        else{
            return false
        }
    })
    app.send(...livro);
});
app.post('/livros', (req, res) => {
    res.send('Livro: -' + req.body.titulo + " foi cadastrado com sucesso!");
});

app.put('/livros/:id', (req, res) => {
    res.send('Livro foi cadastrado com sucesso!');
});

app.listen(3000);