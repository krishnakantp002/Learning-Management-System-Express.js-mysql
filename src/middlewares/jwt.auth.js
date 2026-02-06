const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) {return res.status(404).json({error : "unauthorized"})}
    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        req.user = payload
        next()
    } catch (error) {
        console.log(error)
        res.status(501).json({message:"Invalid Token"})
    }


}

const generateToken = (payload) => {
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1d'})
}



module.exports = {auth,generateToken}