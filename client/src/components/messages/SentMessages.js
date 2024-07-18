import React from 'react'
import Message from './Message'

function SentMessages({ messages }) {
    return (
        <div>
            {messages.map(message => (
                <Message
                    text={message.text}
                    receiver={message.receiver}
                />
            ))}
        </div>
    )
}

export default SentMessages