const express = require('express');
const postRoutes = require('./postagemRoutes');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('App está Online :)!')
});

router.use('/postagens', postRoutes);

module.exports = router;

//router.use((req, res, next) => {
    // console.log('Time: ', Date.now());
    // next();
// });