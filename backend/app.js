const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const ProdutosRoutes = require('./routes/ProdutosRoutes')
app.use(cors())
app.use(express.json())
app.use('/produtos',ProdutosRoutes)
app.listen(3001,()=>{
    console.log(`Servidor rodando na porta: 3001`)
  })
  
  require("./database/connection")

