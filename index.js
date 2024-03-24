const express = require("express");
const app = express();
const port = "3000"
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas")
const router = require("./routers/index")

router(app, express);
tabelas.init(conexao);

app.listen(port, (error) => {
    if(error){
        console.log("Deu Erro")
        return;
    }
    console.log("Subiu show");
});