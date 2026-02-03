const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const pool = require('../config/db.js')

passport.use(
    new localStrategy (async(username,password,done) => {
        try {
            const [rows] = await pool.query('select * from users where username = ?',[username])
                const user = rows[0]
            if(!user){
                return done(null,false,{message : "user not found"})
            }
            const isValid = await user.password === password ? true : false
            if(!isValid){
                return done(null,false,{message:"invalid password"})
            }
            return done(null,user)
        } catch (error) {
           return done(error)
        }

}))


module.exports=passport;