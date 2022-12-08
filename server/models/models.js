const Sequelize = require('../db')
const {DataTypes} = require("sequelize")
const Pizza = Sequelize.define('pizza', {
    id_pizza: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    name_pizza: {type: DataTypes.TEXT, allowNull: false},
    price_pizza: {type: DataTypes.INTEGER, allowNull: false},
    image_name_pizza: {type: DataTypes.TEXT, allowNull: false}
})
const Ingridient = Sequelize.define('ingridient', {
    id_ingridient: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    name_ingridient: {type: DataTypes.TEXT, allowNull: false},
    price_ingridient: {type: DataTypes.INTEGER, allowNull: false}
})
const PizzaPack = Sequelize.define('pizza_pack', {
    is_basic: {type: DataTypes.BOOLEAN, allowNull: false}
})
Pizza.hasMany(PizzaPack)
PizzaPack.belongsTo(Pizza)
Ingridient.hasMany(PizzaPack)
PizzaPack.belongsTo(Ingridient)
module.exports={
    Pizza, Ingridient, PizzaPack
}