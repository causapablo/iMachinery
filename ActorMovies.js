const { DataTypes } = require('sequelize');

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