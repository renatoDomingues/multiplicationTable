
const express = require('express')
const router = express.Router()

const indexController = require('../controllers/index')

//router.get('/', (req, res) => res.send('multiplicationTable'))
router.get('/', indexController.home)

module.exports = router