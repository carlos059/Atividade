const Client = require('../modelo/cliente.js');
const controller = {}

controller.listarTodos = async (req, res) => {
    try{
        let clients = await Client.findAll()
        res.status(200).json(clients)
    }catch(error){
        res.status(500).json(error)
    }
}

controller.buscarPorId = async (req, res) => {
    try{
        const client = await Client.findByPk(req.params.id)
        res.status(200).json(client)
    }catch(error){ 
        res.status(422).json("Ocorreu um erro ao buscar o cliente. " + error)
    }
}

controller.buscarPorCidade = async (req, res) => {
    try{
        const client1 = await Client.findAll({
            where:{
                cidade:req.params.cidade
             }
        })
        res.status(200).json(client1)
    }catch(error){ 
        res.status(422).json("Ocorreu um erro ao buscar o cliente. " + error)
    }
}

controller.criar = async (req, res) => {
    let reqClient = req.body

    try{
        const newClient = await Client.create({
            nome: reqClient.nome,
            email: reqClient.email,
            cidade: reqClient.cidade,
            estado: reqClient.estado,
            cep: reqClient.cep
        })
        res.status(200).redirect("/")
    }catch(error){ 
        res.status(422).send("Ocorreu um erro ao cadastrar o cliente. " + error)
    }

}

controller.atualizar = async (req, res) => {
    try{
        let client = await Client.findByPk(req.params.id)
        client.nome = req.body.nome
        await client.save()
        res.status(200).redirect("/")
    }catch (error){
        res.status(422).send("Ocorreu um erro ao atualizar o cliente. " + error)
    }
}

controller.deletar = async (req, res) => {
    try {
        const item = await Client.findByPk(req.params.id);

        if (item) {
            await item.destroy(); // Remova o item do banco de dados
            res.status(200).redirect('/');
        } else {
            res.status(404).send('Id não existe!');
        }
    } catch (error) {
        res.status(500).send("Ocorreu um erro ao remover o cliente. " + error)
    }
}

module.exports = controller