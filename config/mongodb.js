const moongose = require('moongose');

function conectaMongoDB(){
    moongose.connect(
        'mongodb://webuser:web12345@ds135128.mlab.com:35128/aula-web',
        { useUnifiedTopology: true, useNewUrlParser: true }
    );

    const db = moongose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.on('open', console.info('MongoDB conectado com sucesso!'));
}

module.exports = conectaMongoDB;