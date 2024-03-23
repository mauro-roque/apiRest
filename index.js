const express = require("express");
const app = express();
const port = "3000"
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas")

tabelas.init(conexao);

const router = require("./routers/index")
router(app);

app.listen(port, (error) => {
    if(error){
        console.log("Deu Erro")
        return;
    }
    console.log("Subiu show");
});





