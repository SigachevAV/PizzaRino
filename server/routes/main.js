const Router = require('express')
const { UUID } = require('sequelize')
const router = new Router()
const {Pizza} = require('../models/models')
const {Ingridient} = require('../models/models')
const {PizzaPack} = require('../models/models')
const uid = require('uuid')
const path = require('path')

router.post('/', async (req, res) => {
    const query = req.body
    id_pizza = query.id_pizza
    name_pizza = query.name_pizza
    price_pizza = query.price_pizza
    let filename = uid.v4() + ".jpg"
    const {image_name_pizza} = req.files
    image_name_pizza.mv(path.resolve(__dirname, '..', 'static', filename))
    const pizza = await Pizza.create({image_name_pizza: filename,
    name_pizza: name_pizza,
    id_pizza: id_pizza,
    price_pizza: price_pizza})
    return res.json(pizza)
})
router.post('/ingridient', async (req, res) =>
{
    const query = req.query
    id_ingridient =query.id_ingridient
    name_ingridient = query.name_ingridient
    price_ingridient = query.price_ingridient 
    const ingridient = await Ingridient.create({
        id_ingridient: id_ingridient,
        name_ingridient: name_ingridient,
        price_ingridient: price_ingridient
    })
    return res.json(ingridient)
})
router.post('/link', async (req, res) =>
{
    const query = req.query
    ingridientIdIngridient =query.id_ingridient
    pizzaIdPizza = query.id_pizza
    is_basic = query.is_basic 
    const pack = await PizzaPack.create({
        ingridientIdIngridient: ingridientIdIngridient,
        pizzaIdPizza: pizzaIdPizza,
        is_basic: is_basic
    })
    return res.json(pack)
})
router.get('/all', async (req, res) => { const pizzas = await Pizza.findAll()
res.json(pizzas)})

module.exports = router