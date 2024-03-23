//importando as rotas do atendimentoRoute para a constante routerAtendimento depois estou atribuindo a constante para o app na função abaixo
const routerAtendimento = require("./atendimentoRoute")
module.exports = (app) => {
    app.use(routerAtendimento);
}