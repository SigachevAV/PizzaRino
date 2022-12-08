const Router = require('express')
const router = new Router()
const {Pizza} = require('../models/models')
const {Ingridient} = require('../models/models')
const {PizzaPack} = require('../models/models')

router.post('/', async (req, res) => {
    const query = req.query
    id_pizza = query.id_pizza
    name_pizza = query.name_pizza
    price_pizza = query.price_pizza
    image_name_pizza = query.image_name_pizza
    const pizza = await Pizza.create({image_name_pizza: image_name_pizza,
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