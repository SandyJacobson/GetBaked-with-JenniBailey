const { Router } = require('express')
const controllers = require('../controllers/inventory')

const router = Router()

router.get('/inventory', controllers.getInventory)
router.get('/inventory/category/:category', controllers.getInventoryByCategory)
router.get('/inventory/id/:id', controllers.getInventoryById)
router.get('/inventory/name/:name', controllers.getInventoryByName)
router.post('/inventory/', controllers.addProduct)
// router.put('/inventory/id/:id', controllers.updateInventoryItem)
// router.delete('/inventory/id/:id', controllers.deleteInventoryItem)

module.exports = router
