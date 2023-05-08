const DataTypes = require("sequelize");
const db = require("../configuracao/dbconnection")

const cliente = db.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cidade: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    estado: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    cep: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

(async () => {
    try {
        await cliente.sync();
        console.log('Tabela de cliente criada com sucesso.');

    } catch (error) { 
        console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
})();

module.exports = cliente