const express = require('express');
const router = express.Router();
const PostagensController = require('../controllers/postagens');
const postagemModel = require('../models/postagem');

const postagensController = new PostagensController(postagemModel);

router.get('/', async (req, res) => {
    //Busca postagem no banco de dados
    const postagens = await postagensController.consultarTodos();
    res.send(postagens);
});

router.post('/', async (req, res) => {
    //salva postagem no banco de dados
    const novaPostagem = req.body;
    const retorno = await postagensController.adicionar(novaPostagem);
    res.send(retorno);
});

module.exports = router;