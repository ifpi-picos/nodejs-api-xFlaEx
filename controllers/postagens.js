class Postagens {
    constructor(postagemModel){
        this.Postagem = postagemModel;
    }

    async adicionar (postagemDTO){
        const postagem = new this.Postagem(postagemDTO);
        await postagem.save();
        return 'Adicionado com sucesso!';
    }
    async consultarTodos (){
        const postagens = await timingSafeEqual.Postagem.find({});
        return postagens;
    }
}

module.exports = Postagens;