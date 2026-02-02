const pool = require ('../config/db.js')

exports.getAllUsers = async () => {
    try {
        const [rows] = await pool.query ('select * from users;')
        return rows;
    } catch (error) {
        throw error;
    }
}

exports.getUserById= async(id) => {
    try {
        const [rows] = await pool.query ('select * from users where id=?',[id])
        return rows[0]
    } catch (error) {
        throw error;
    }
}

exports.createUser = async(username,email,password,role) =>{
    try {
     const [result] = await pool.query(
        'insert into users (username,email,password,role) values (?,?,?,?);',
            [username,email,password,role])
     return result;
    } catch (error) {
     throw error
    }
}

exports.updateUser = async(id,username,email,password,role) => {
    try {
        const [result] = await pool.query (
            'update users set username=?,email=?,password=?,role=? where id=?;',
        [username,email,password,role,id])
        return result;
    } catch (error) {
        throw error
    }
}

exports.deleteUser = async(id) => {
    try {
        const [result] = await pool.query (
            'delete from users where id =?;',[id])
            return result
    } catch (error) {
        throw error;
    }
}