const mysql = require("mysql");

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "",
    database: "controle_atendimento",
})

module.exports = conexao;
