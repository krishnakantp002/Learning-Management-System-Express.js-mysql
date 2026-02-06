const userModel = require('../models/users.model.js')
const {generateToken} = require('../middlewares/jwt.auth.js')
const bcrypt = require('../utils/hashedPass.js')
const pool = require('../config/db.js')

exports.createUser = async(req,res) => {
    try {
        const {username,email,password,role} = req.body;
        if(!username || !email || !password || !role){
            return res.status(402).json({
                message:"all fields are required"
            })
        }
        const hashedPass = await bcrypt.hashPass(password)
        const result = await userModel.createUser(username,email,hashedPass,role)
        const payload = ({
            id : result.id,
            username : username
        })
        const token = generateToken(payload)
        res.status(201).json({
            message : "user created",
            result : result,
            token : token
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
    const hashedPass = await bcrypt.hashPass(password)
    const result = await userModel.updateUser(id,username,email,hashedPass,role)
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

exports.loginUser = async (req,res) => {
    try {
        const {username , password} = req.body

        if(!username || !password) {
            return res.status(402).json('username and password is required')
        }
        const [rows] = await pool.query('select * from users where username = ?',[username])
        if(rows.length === 0) { return res.status(404).json({message:"user not found"})}
        const user = rows[0]

        const isMatch = await bcrypt.comparePassword(password,user.password)
        if(!isMatch){ return res.status(402).json({message:"wrong username and password"})}

        const payload =  ({
            id: user.id,
            username : user.username
        })

        const token = generateToken(payload)
        return res.status(201).json({
            message:"user logged in successfully",
            result : user,
            token:token
        })
    } catch (error) {
        return res.status(501).json({error:error})
    }


}
