const { pool } = require('../db')

async function getMessagesBySender(userId) {
    const sql = `
	SELECT message_id as messageId,
		sender_id as senderId, 
		timestamp,
        is_read as isRead,
		message_content as messageContent,
        CONCAT (first_name, ' ', last_name) as receiver
    FROM messages
    JOIN users
		ON (receiver_id = user_id)
    WHERE sender_id = 69
	ORDER BY timestamp
`
    const [messages] = await pool.query(sql, [userId])
    return messages
}

async function getMessagesByReceiver(userId) {
    const sql = `
    SELECT message_id as messageId,
		receiver_id as receiverId,
		timestamp,
		message_content as messageContent,
        is_read as isRead,
        CONCAT (first_name, ' ', last_name) as sender
    FROM messages
    JOIN users
		ON (sender_id = user_id)
    WHERE receiver_id = ?
    ORDER BY timestamp
`
    const [messages] = await pool.query(sql, [userId])
    return messages
}

async function addMessage(senderId, receiverId, text) {
    const sql = `
    INSERT INTO messages (sender_id, receiver_id, message_content, timestamp)
    VALUES (?, ? ,?, CURDATE())
    `
    const [{ affectedRows }] = await pool.query(sql, [senderId, receiverId, text])
    return affectedRows
}

module.exports = {
    getMessagesByReceiver,
    getMessagesBySender,
    addMessage
}