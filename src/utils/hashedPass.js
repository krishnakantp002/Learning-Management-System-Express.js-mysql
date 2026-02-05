const bcrypt = require('bcrypt')



const SALT_ROUNDS = 10

exports.hashPass = async(password) => {
    return await bcrypt.hash(password,SALT_ROUNDS)
    
}
exports.comparePassword = async(password,hashedPass) => {
    return await bcrypt.compare(password,hashedPass)
     
}
