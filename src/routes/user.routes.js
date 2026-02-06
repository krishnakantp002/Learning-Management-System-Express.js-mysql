const express = require ('express')
const userRouter = express.Router()
const userController = require ('../controllers/user.controller.js')
const {auth} = require('../middlewares/jwt.auth.js')

userRouter.get('/user',auth,userController.getAllUsers)
userRouter.get('/user/:id',auth,userController.getUserById)
userRouter.post('/user/signup',userController.createUser)
userRouter.put('/user/:id',auth,userController.updateUser)
userRouter.delete('/user/:id',auth,userController.deleteUser)
userRouter.post('/user/login',userController.loginUser)

module.exports = userRouter;