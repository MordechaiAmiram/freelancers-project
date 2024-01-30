const { pool } = require('../db')



async function getMessagesBysender(userId) {
    const sql = `
    SELECT message
    FROM messages
    WHERE senser_id = ?
    GROUP CONCAT()
`
    const [messages] = await pool.query(sql, [userId])
}

async function getMessagesByreceiver(userId) {

}