//neste arquivo tenho as rotas definidas e estou exportando elas para o modulo

const {Router} = require("express");
const router = Router();
const AtendimentoController = require("../controllers/atendimentoController"); 
const atendimentoController = require("../controllers/atendimentoController");

//get post put delete;
router.get("/atendimentos", (req, res) =>{
    //Tudo o que acontece aqui dentro roda do lado do servidor então este console não aparece-ra no console do browser;
    //console.log(req)
    //console.log(res)
    const resposta = atendimentoController.buscar();
    res.send(resposta)
});

router.post("/atendimentos",(req, res) =>{
    const resposta = atendimentoController.criar();
    res.send(resposta);
})

router.put("/atendimento/:id",(req, res) =>{
    const { id } = req.params;
    const reposta = atendimentoController.atualizar();
    res.send(resposta + `${id}`);
})

router.delete("/atendimento/:id",(req, res) =>{
    const { id } = req.params;
    const resposta = atendimentoController.deletar();
    res.send(resposta + `${id}`);
})

//Exportando o router para ser utilizado em outros arquivos no caso esta sendo usado no arquivo ./routers/index.js
module.exports = router;


