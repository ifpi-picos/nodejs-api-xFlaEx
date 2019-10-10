const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //Busca postagem no banco de dados
    res.send('Lista de postagens!');
})

router.post('/', (req, res) => {
    //salva postagem no banco de dados
    res.send('Postagem salva!');
})

module.exports = router;