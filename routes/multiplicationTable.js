
const express = require('express')
const router = express.Router()

const multiplicationTableController = require('../controllers/multiplicationTable')

//router.get('/', (req, res) => res.send('multiplicationTable'))
router.get('/', multiplicationTableController.list)
router.get('/of/:num', multiplicationTableController.multiplicationTable)

module.exports = router