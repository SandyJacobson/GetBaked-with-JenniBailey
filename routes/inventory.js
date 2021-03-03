const { Router } = require('express')
const inventory = require('../controllers/inventory')

const router = Router()

router.get('/inventory', inventory.getinventory)
router.get('/inventory/:id', inventory.getItem)
router.post('/inventory', inventory.createItem)
router.put('/inventory/:id', inventory.updateItem)
router.delete('/inventory/:id', inventory.deleteItem)

module.exports = router
