const atendimentoModel = require("../models/atendimentoModel");
class AtendimentoController{
    buscar(){
        return AtendimentoModel.listar();
    }
    criar(novoAtendimento){
        return  AtendimentoModel.criar(novoAtendimento);
    }
    atualizar(atendimentoAtualizado,id){
        return atendimentoModel.atualizar(atendimentoAtualizado, id);
    }
    deletar(id){
        return atendimentoModel.delete(id);
    }
}

module.exports = new AtendimentoController();