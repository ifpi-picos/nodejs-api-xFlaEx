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

    async alterarPorId(id, postagemDTO){
        await this.Postagem.updateOne({_id: id}, postagemDTO);
    }

    async consultarPorId(id){
        const postagtem = await this.Postagem.findById(id);
        return postagem;
    }
    async DeletarPorId(id){
        const postagem = await this.Postagem.deleteOne({_id: id});
    }
}

module.exports = Postagens;