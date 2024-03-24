const conexao = require("../infraestrutura/conexao");
class AtendimentoModel{
    listar(){
        const sql = "SELECT * FROM atendimentos"
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
            if(error){
                console.log("DEU ERRO 1")
                reject(error);
            }
            console.log("SHOW 1")
            resolve(resposta)
            })
        });
    }
    criar(novoAtendimento){
        const sql = "INSERT INTO atendimento SET ?"
        return new Promise((resolve, reject)=>{
            conexao.query(sql, novoAtendimento, (erro, resposta) => {
            if(erro){
                console.log("DEU ERRO 2")
                reject(error);
            }
            console.log("SHOW 2")
            resolve(resposta)
        })
        })
    }
    atualizar(atendimentoAtualizado, id){
        const sql = "UPDATE atendimentos SET ? WHERE id = ?";
        return new Promise((resolve, reject)=>{
            conexao.query(sql, [atendimentoAtualizado, id], (erro, resposta) => {
            if(erro){
                console.log("DEU ERRO 3")
                reject(error);
            }
            console.log("SHOW 3")
            resolve(resposta)
            })
        })
    }
    delete(id){
        const sql = "DELETE FROM atendimentos WHERE id = ?";
        return new Promise((resolve, reject)=>{
            conexao.query(sql, id, (erro, resposta) => {
            if(erro){
                console.log("DEU ERRO 4")
                reject(error);
            }
            console.log("SHOW 4")
            resolve(resposta)
            })
        })
    }

}
module.exports = new AtendimentoModel;