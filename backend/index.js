require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path');
app.use(morgan('dev'))
const cors = require('cors')
app.use(cors())
app.use(express.json())
require('./dataBase')

app.use('/static', express.static(path.join(__dirname, 'public')));

const port = process.env.PORT

 const Routes = require('./routes')

 app.use('/api/v1', Routes)

app.use(function (req, res, next) {
   
    res.status(404).json({ mensaje: 'ERROR: 404 not found' })
})

app.listen(port, () => console.log(`Escuchando http://localhost:${port}`))
