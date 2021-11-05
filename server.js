require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000
const router = require('./backend/routes/router')
require('./backend/db/connection')
//middleware
app.use(express.json())
app.use(cors())
app.use('/',router)

app.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})