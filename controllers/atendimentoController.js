class AtendimentoController{
    buscar(){
        return "Buscando atendimentos. . . .";
    }
    criar(){
        return "Criando atendimento. . . .";
    }
    atualizar(id){
        return "Alterando atendimento numero " + id + ". . .";
    }
    deletar(id){
        return "Deletando atendimento numero " + id + ". . .";
    }
}

module.exports = new AtendimentoController();