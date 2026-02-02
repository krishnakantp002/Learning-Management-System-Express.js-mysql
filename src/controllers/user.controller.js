const userModel = require('../models/users.model.js')

exports.createUser = async(req,res) => {
    try {
        const {username,email,password,role} = req.body;
        if(!username || !email || !password || !role){
            return res.status(402).json({
                message:"all fields are required"
            })
        }
        const result = await userModel.createUser(username,email,password,role)
        res.status(201).json({
            message : "user created",
            result : result
        })
    } catch (error) {
        res.status(401).json({
            error:error.message
        })
    }
}

exports.getAllUsers = async(req,res) =>{
    try {
        const result = await userModel.getAllUsers()
        res.status(200).json({
            message : " All Users fethched",
            result: result
        })
    } catch (error) {
        res.status(402).json({
            error : error.message
        })
    }
}

exports.getUserById = async (req,res) => {
    try {
        const {id} = req.params
        const result = await userModel.getUserById(id)

    if(!result){
        return res.status(404).json({
            message : "user not found"
        })
    }
        res.status(200).json({
            message : 'User fetched',
            result: result
        })
    } catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}

exports.updateUser = async(req,res) =>{
    try {
    const {id} = req.params
    const {username,email,password,role} = req.body

    const result = await userModel.updateUser(id,username,email,password,role)
    res.status(203).json({
        message : "User Data Updated",
        result:result
    })       
    } catch (error) {
        res.status(402).json({
            error:error.message
        })
    }

}

exports.deleteUser = async (req,res) => {
    try {
        const {id} = req.params
        const result = await userModel.deleteUser(id)
        res.status(204).json({
            message:'DELETED SUCCESSFULLY',
            result:result
        })
    } catch (error) {
        res.status(402).json({
            error:error.message
        })
    }
}