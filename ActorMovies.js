const { DataTypes } = require('sequelize');
//Aqui tendriamos que importar los modelos de Sequelize "Movie" y "Actor"
//Para que este modelo pueda tomar las referencias. 
//De la instancia de sequelize configurada en el server, let sequelize = new Sequelize("Connection String") pordemos obtener los modelos que se necesitan aca.
//const {Person, Movie} = require(')
module.exports = (sequelize) => {
    sequelize.define('ActorxMovie', {
        MovieId: {
            type: DataTypes.INTEGER,
            references: {
                model: Movie,
                key: 'id'
            }
        },
        ActorId: {
            type: DataTypes.INTEGER,
            references: {
                model: Actor, 
                key: 'id'
            }
        }

    }, {
        timestamps: false
    })
}