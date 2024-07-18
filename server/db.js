const sql = require('mysql2/promise')
require('dotenv').config()
const pool = sql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: 'freelancers_project'
    }
)

async function createDbConnection() {
    try {
        const connection = await pool.getConnection()
        console.log('Database is connected');
        connection.release()
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = {
    createDbConnection,
    pool
}