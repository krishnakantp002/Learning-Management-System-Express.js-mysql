const express = require('express')
const dotenv = require ('./config/db.js')
const userRouter = require('./routes/user.routes.js')
const createUserTable = require('./data/createUsertable.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',userRouter)

createUserTable()

PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server running on http:localhost:${PORT}`)
})