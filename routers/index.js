//importando as rotas do atendimentoRoute para a constante routerAtendimento depois estou atribuindo a constante para o app na função abaixo
const routerAtendimento = require("./atendimentoRoute")
module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use(routerAtendimento); 
}