const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Person', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
        ,
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}