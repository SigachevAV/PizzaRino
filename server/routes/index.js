const Router = require('express')
const router = new Router()
const mainRouter = require('./main')
const pizzaRouter = require('./pizza')

router.use('/main', mainRouter)
router.use('/pizza', pizzaRouter)

module.exports = router