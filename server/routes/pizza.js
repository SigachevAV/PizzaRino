const Router = require('express')
const router = new Router()

router.post('/', )
router.get('/', (req, res) => {
    const query = req.query
    res.json(query)
})
router.get('/:id', (req, res) => {
    const query = req.query
    res.json(query)
})

module.exports = router