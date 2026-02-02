const mysql = require("mysql2/promise");
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port : process.env.DB_PORT,   
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

(async()=>{
    try {
        const Connection = await pool.getConnection();
        console.log('CONNECTED TO mySQL')
        Connection.release();
    } catch (error) {
        console.log('DB Connecton Error',error.message);
        
    }
})();

module.exports = pool;