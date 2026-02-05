const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    const {token} = req.headers.authorization.split(' ')[1]
    if(!token) {return res.status(404).json({error : "unauthorized"})}

    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        req.user = payload
        next()
    } catch (error) {
        console.log(error)
        res.status(501).json({message:"Server Error"})
    }


}

const generateToken = (userData) => {
    return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:'1d'})
}
module.exports = {auth,generateToken}