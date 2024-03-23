class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaAtendimento();
    }
    criarTabelaAtendimento(){
        const sql = `
        create table if not exists atendimentos(
            id int not null auto_increment primary key,
            dataS date,
            servico varchar(100),
            cliente varchar(100),
            statusS enum("pendente","realizado","cancelado")
        );
        `
        this.conexao.query(sql, (error) => {
            if(error){
                console.log("Erro na criação da tabela");
                console.log(error.message);
                return
            }
        console.log("Tabela criada com sucesso") 
        })
    }
}
module.exports = new Tabelas();
