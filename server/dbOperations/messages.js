const { pool } = require('../db')


async function getMessagesBySender(userId) {
    const sql = `
    SELECT message_id as messageId,
		sender_id as senderId, 
		receiver_id as receiverId,
		timestamp,
		message_content as messageContent,
    FROM messages
    WHERE sender_id = ?
    ORDER BY timestamp
`
    const messages = await pool.query(sql, [userId])
    return messages
}

async function getMessagesByReceiver(userId) {
    const sql = `
    SELECT message_id as messageId,
		sender_id as senderId, 
		receiver_id as receiverId,
		timestamp,
		message_content as messageContent,
        is_read as isRead
    FROM messages
    WHERE receiver_id = ?
    ORDER BY timestamp
`
    const messages = await pool.query(sql, [userId])
    return messages
}

async function addMessage(senderId, receiverId, text){
    const sql = `
    INSERT INTO messages (sender_id, reciever_id, message_content, timestamp)
    VALUES (?, ? ,?, CURDATE())
    `
    const [{affectedRwos}] = await pool.query(sql, [senderId, receiverId, text])
    return affectedRwos
}

module.exports = {
    getMessagesByReceiver,
    getMessagesBySender,
    addMessage
}