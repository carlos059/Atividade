const express = require("express")
const controller = require("../controle/controleCliente")

const routes = express.Router()

routes.get("/",controle.listarTodos)
routes.get("/:id",controle.buscarPorId)
routes.get("/:cidade",controle.buscarPorCidade)
routes.post("/",controle.criar)
routes.put("/:id",controle.atualizar)
routes.delete("/:id",controle.deletar)

module.exports = routes