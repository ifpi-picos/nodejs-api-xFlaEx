const express = require('express');
const router = express.Router();
const PostagensController = require('../controllers/postagens');
const postagemModel = require('../models/postagem');

const postagensController = new PostagensController(postagemModel);

//get por id
router.get('/:id', async (req, res) => {
    //Busca postagem no banco de dados
    const id = req.params.id;
    const postagem = await postagensController.consultarTodos();
    if(postagem){
        res.send(postagem);
    }else{
        res.sendStatus(404);
    }
});

//get localhost:3000/postagens/{id}

//post localhost:3000/postagens/{id}

router.post('/', async (req, res) => {
    //salva postagem no banco de dados
    const novaPostagem = req.body;
    const retorno = await postagensController.adicionar(novaPostagem);
    res.send(retorno);
});

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const postagemDTO = req.body;
    await postagensController.alterarPorId(id, PostagemDTO);
    res.send('Alterado com Sucesso!');
})

//delete por id
router.delete('/:id', async(req, res) =>{
    const id = req.params.id;
    await postagensController.deletePorId(id);
    res.sendStatus('Deletado com Sucesso')
});

module.exports = router;