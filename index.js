
const express = require('express')
const path = require('path')
const app = express()
//const port = 3000
const port = process.env.PORT || 3000

const indexRouter = require('./routes/index')
const multiplicationTableRouter = require('./routes/multiplicationTable')

//to otiginal =>
//app.use(express.static('public'))

//to change use vercel =>
app.use(express.static(path.join(__dirname, 'public')))

//To define which view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/multiplicationTables', multiplicationTableRouter)

app.listen(port, () => console.log('multiplicationTable server on port: ' +port))