const express = require('express')
const dotenv = require ('./config/db.js')
const userRouter = require('./routes/user.routes.js')
const courseRouter = require('./routes/course.routes.js')
const createUserTable = require('./data/createUsertable.js')
const createCourseTable = require('./data/createCourseTable.js')
const loggingReq = require('./middlewares/loggingReq.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(loggingReq)


app.use('/api/v1',userRouter)
app.use('/api/v1',courseRouter)

createUserTable() 
createCourseTable()


PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})