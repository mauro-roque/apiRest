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
    const listaAtendimentos = atendimentoController.buscar();
    listaAtendimentos.then(atendimentos => res.status(200).json(atendimentos))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/atendimentos",(req, res) =>{
    const novoAtendimento = req.body;
    const atendimento = atendimentoController.criar(novoAtendimento);
    atendimento.then(atendimentoCriado => res.status(201).json(atendimentoCriado))
    .catch((error) => res.status(400).json(error.message))
})

router.put("/atendimento/:id",(req, res) =>{
    const { id } = req.params;
    const atendimentoAtualizado = req.body;
    const atendimento = atendimentoController.atualizar(atendimentoAtualizado, id);
    atendimento
    .then((resulAtendimentoAtualizado) => res.status(200).json(resulAtendimentoAtualizado))
    .catch((error) => res.status(400).json(error.message))
})

router.delete("/atendimento/:id",(req, res) =>{
    const { id } = req.params;
    const atendimento = atendimentoController.deletar(id);
    atendimento
    .then((resulAtendimentoDeletado) => res.status(200).json(resulAtendimentoDeletado))
    .catch((error) => res.status(400).json(error.message))
})

//Exportando o router para ser utilizado em outros arquivos no caso esta sendo usado no arquivo ./routers/index.js
module.exports = router;


