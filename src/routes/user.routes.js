const express = require ('express')
const userRouter = express.Router()
const userController = require ('../controllers/user.controller.js')


userRouter.get('/user',userController.getAllUsers)
userRouter.get('/user/:id',userController.getUserById)
userRouter.post('/user/signup',userController.createUser)
userRouter.put('/user/:id',userController.updateUser)
userRouter.delete('/user/:id',userController.deleteUser)

module.exports = userRouter;