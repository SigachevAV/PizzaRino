const Router = require('express')
const router = new Router()
const {Pizza} = require('../models/models')
const {Ingridient} = require('../models/models')
const {PizzaPack} = require('../models/models')
const { QueryTypes} = require('sequelize')
const sequlize = require('../db')



router.get('/', async (req, res) => {
    const {id_pizza} = req.query
    if(!id_pizza)
    {
        return
    }
    pizza = await Pizza.findAll({where:{id_pizza: id_pizza}})
    const list = await sequlize.query('SELECT "ingridients"."name_ingridient", "ingridients"."price_ingridient", "pizza_packs"."is_basic" FROM ingridients JOIN pizza_packs ON "pizza_packs"."ingridientIdIngridient" = "ingridients"."id_ingridient" WHERE "pizza_packs"."pizzaIdPizza"  = '+ id_pizza+';', {type: QueryTypes.SELECT} )
    tmp = []
    list.forEach(i => {
        tmp.push(i)
    });
    res.json({pizza: pizza, ingridient: tmp})
})
router.get('/:id', async (req, res) => {
    const {id} = req.param
    if(!id)
    {
        return
    }
    pizza = await Pizza.findAll({where:{id_pizza: id}})
    const list = await sequlize.query('SELECT "ingridients"."name_ingridient", "ingridients"."price_ingridient", "pizza_packs"."is_basic" FROM ingridients JOIN pizza_packs ON "pizza_packs"."ingridientIdIngridient" = "ingridients"."id_ingridient" WHERE "pizza_packs"."pizzaIdPizza"  = '+ id+';', {type: QueryTypes.SELECT} )
    tmp = []
    list.forEach(i => {
        tmp.push(i)
    });
    res.json({pizza: pizza, ingridient: tmp})

})

module.exports = router