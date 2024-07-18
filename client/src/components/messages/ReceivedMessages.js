import React from 'react'
import Message from './Message'

function ReceivedMessages({ messages }) {

    return (
        <div>
            {messages.map(message => (
                <Message
                    text={message.text}
                    sender={message.sender}
                />
            ))}
        </div>
    )
}

export default ReceivedMessages